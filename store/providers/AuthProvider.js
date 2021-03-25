import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import AuthContext from '../contexts/AuthContext';

class AuthProvider extends Component{
    state={
        isAuthenticated: false,
        isAuthenticating: false,
        error: false,
        authUser: {}
    };

    componentDidMount = async() => {
        
        this.setAuthenticating(true);
        const Auth = await AsyncStorage.getItem('authenticated');
        if (!Auth) {
            this.setAuthenticated(false)
        }else {
            this.setAuthenticated(true)
            this.setAuthUser(JSON.parse(Auth))
        }
        this.setAuthenticating(false)         
    }

    signUpUser= async(user) => {
        try {
            await AsyncStorage.setItem('users', JSON.stringify(user));
        } catch (e){
            console.log(e)
        }
    }
    loginUser= async(email, password) => {
        try{
            const userRes = await AsyncStorage.getItem('users');
            const users = JSON.parse(userRes);

            if (users.email == email && users.password == password) {
                this.setAuthenticated(true);
                this.setAuthUser(JSON.stringify(users))
                await AsyncStorage.setItem('authenticated' , JSON.stringify(users)); 
            } else {
                this.setAuthenticated(false); 
                this.setAuthError(true);
            }
        } catch (e) {
            this.setAuthenticated(false)
            this.setAuthError(true)
        } finally {
            this.setAuthenticating(false) 
        }
        
    }
    logOut = async() =>{
        await AsyncStorage.removeItem('authenticated');
        this.setAuthenticated(false)
        this.setAuthUser({})
    }

    setAuthUser = (user) => {
        this.setState({
            ...this.state,
            authUser: user
        })
    }
    setAuthenticated=(isAuthenticated) => {
        this.setState({
            ...this.state,
            isAuthenticated
        })
    }
    setAuthenticating=(isAuthenticating) => {
        this.setState({
            ...this.state,
            isAuthenticating
        })
    }
    setAuthError=(error) =>{
        this.setState({
            ...this.state,
            error
        })
    }

    render() {
        return(
            <AuthContext.Provider value={{
                ...this.state,
                setAuthUser: this.setAuthUser,
                setAuthError: this.setAuthError,
                setAutenticated: this.setAuthenticated,
                setAutenticating: this.setAuthenticating,
                signUpUser: this.signUpUser,
                loginUser: this.loginUser,
                logOut: this.logOut,


            }}>
                {this.props.children}
            </AuthContext.Provider>
        )

    }
}

export default AuthProvider;