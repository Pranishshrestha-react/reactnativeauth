/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './navigation/MainNavigation';
import AuthStackNavigator from './navigation/AuthNavigation';
import AuthProvider from './store/providers/AuthProvider';
import AuthContext from './store/contexts/AuthContext';
import { ActivityIndicator, Colors } from 'react-native-paper';
import SplashScreen from './screens/SplashScreen';

const App = () => {
  const isAuthenticated = false;
  return (
    <AuthProvider>
      <PaperProvider>
        <NavigationContainer>
         <AuthContext.Consumer>
           {
             (context) => {
               if (context.isAuthenticating) {
                 return <SplashScreen/>
               }
                return !context.isAuthenticated ? <AuthStackNavigator/> : <MainStackNavigator/>
              }
           }
         </AuthContext.Consumer>
        </NavigationContainer>
      </PaperProvider>
    </AuthProvider>
  );
};

export default App;
