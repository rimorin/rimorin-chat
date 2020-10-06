import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { GoogleSignin } from '@react-native-community/google-signin';
import chatNavigationData from './chatNavigationData';
import LoginScreen from './../auth/AuthViewContainer';
const Stack = createStackNavigator();

export default function NavigatorView(props) {
  
  if (!props.isLoggedIn) {
      return <LoginScreen />;
  }

  const signOutSocial = async() => {
    //Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  }

  const headerRightComponentMenu = () => {
    return (
      <TouchableOpacity
        onPress={async() => {
          await signOutSocial();
          props.signOut();
        }}
        style={{
          paddingRight: 10,
        }}
      >
        <Image
          source={require('../../../assets/images/icons/logout.png')}
          resizeMode="contain"
          style={{
            height: 20,
          }}
        />
      </TouchableOpacity>    
    )
  }

  return (
    <Stack.Navigator>
      {chatNavigationData.map((item, idx) => (
        <Stack.Screen
          key={`stack_item-${idx+1}`}
          name={item.name} 
          component={item.component} 
          options={{
            headerRight: headerRightComponentMenu,
            headerLeft: item.headerLeft,
            headerBackground: () => (
              <Image style={styles.headerImage} source={item.headerBackground.source} />
            ),
            headerTitleStyle: item.headerTitleStyle,
          }} 
        />
      ))}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 100 + '%',
    height: Header.height,
  },
});