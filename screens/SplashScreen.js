import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

const SplashScreen= props =>{
    return <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <ActivityIndicator animating={true} color={Colors.red800} />
    </View>

}
 
const styles = StyleSheet.create({

});

export default SplashScreen;