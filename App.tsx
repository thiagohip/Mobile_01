import { View } from 'react-native';
import { styles as s} from "./src/styles/GlobalStyle";
import { PythonScreen, JavascriptScreen, CppScreen } from "./src/screens/index";
import { NavigationComponent } from './src/components';
import { Dispatch, SetStateAction, useState } from 'react';
import {  useFonts, JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans';

export interface IPage{
  setPageI: Dispatch<SetStateAction<number>>,
  pageNow: Number
}

function ReturnPage({page}: {page: number}){
  switch(page){
    case 1:
      return(<PythonScreen></PythonScreen>)
      break
    case 2:
      return(<JavascriptScreen></JavascriptScreen>)
      break
    case 3:
      return(<CppScreen></CppScreen>)
      break
  }
}

export default function App() {

  const [ page, setPage ] = useState(1);

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  

  return (
    <View style={s.container}>
      <ReturnPage page={page}/>
      <NavigationComponent setPageI={setPage} pageNow={page}></NavigationComponent>
    </View>
  );
}