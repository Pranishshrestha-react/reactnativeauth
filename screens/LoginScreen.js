import React, {useContext} from 'react';
import {View, StyleSheet, ScrollView,} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';

const LoginScreen = props => {
    const[email, setEmail] = React.useState('');
    const[password, setPassword] = React.useState('');
    const authContext = useContext(AuthContext);

    return <ScrollView style={styles.screen}>

       <TextInput
       mode="outlined"
       value={email}
       onChangeText={text => setEmail(text)}
       placeholder="Email"
       />
       <TextInput
       mode="outlined"
       value={password}
       onChangeText={text => setPassword(text)}
       placeholder="Password"
       />

       {authContext.error && <Text style={{color:'red'}}>Something went wrong!</Text>}
       <Button onPress={()=> authContext.loginUser(email, password)} mode="contained" style={{marginTop:30}} >Login</Button>
       <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
           <Text style={{fontSize:20, color:'black', fontFamily:'Ubuntu-Regular'}}>Not Registered Yet</Text>
           <Button onPress={()=> props.navigation.navigate('Signup')}>Signup</Button>
       </View>
    </ScrollView>
    

};
 
const styles = StyleSheet.create({
    screen: {
      padding:30
    }
  });

export default LoginScreen;