import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-paper';
import AuthContext from '../store/contexts/AuthContext';

const HomeScreen= props =>{
    const authContext = React.useContext(AuthContext);
    return <View style={{alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:30, fontFamily:'Ubuntu-Bold'}}>Welcome { authContext.authUser.fullName} </Text>
        <Button onPress={()=> authContext.logOut()} mode="contained" style={{marginTop:30}} >Logout</Button>
    </View>

}
 
const styles = StyleSheet.create({

});

export default HomeScreen;