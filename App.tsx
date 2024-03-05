import { Text, View } from 'react-native';
import { styles as s} from "./src/styles/GlobalStyle";
import { PythonScreen } from "./src/screens/index";
import AppLoading from "expo-app-loading"

import {useFonts, JosefinSans_400Regular} from '@expo-google-fonts/josefin-sans'

export default function App() {

  const [ fontsLoaded ] = useFonts({JosefinSans_400Regular});

  if(!fontsLoaded){
    <AppLoading/>
  }

  return (
    <View style={s.container}>
      <PythonScreen></PythonScreen>
    </View>
  );
}