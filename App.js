import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryScreen from './screens/GalleryScreen';
import FullImageScreen from './screens/FullImageScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Galeria" 
          component={GalleryScreen} 
          options={{ title: 'Galeria de Imagens' }} 
        />
        <Stack.Screen 
          name="Imagem" 
          component={FullImageScreen} 
          options={{ title: 'Visualização' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
