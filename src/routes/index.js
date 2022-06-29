import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome' // ele entende que é index, sem precisar colocar :)
import SignIn from '../pages/SignIn'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}  
                options={{ headerShown: false }}  // como o proprio nome já diz, serve para retirar o header            
            /> 
        
            <Stack.Screen
                name='SignIn'
                component={SignIn}    
                options={{ headerShown: false }}            
            />
        </Stack.Navigator>
        
    ); 
}

