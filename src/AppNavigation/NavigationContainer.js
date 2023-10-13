import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../Screens';


const stack  = createStackNavigator();

const NavigationContainerFile = () => {
    return (
        <NavigationContainer>
            <stack.Navigator>
                  <stack.Screen name='Login' component={LoginScreen} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationContainerFile
