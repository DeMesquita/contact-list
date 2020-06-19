import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Contatos from './pages/Contatos';
import Detalhes from './pages/Detalhes';
import Adicionar from './pages/Adicionar';



export default function Routes(){
    return(
        <NavigationContainer>
            {/* screenOptions={{ headerShown: false}} */}
            <AppStack.Navigator >   
            <AppStack.Screen name="Contatos" component={Contatos}/>
            <AppStack.Screen name="Detalhes" component={Detalhes}/>
            <AppStack.Screen name="Adicionar" component={Adicionar}/>

            </AppStack.Navigator>
        </NavigationContainer>

    );
}