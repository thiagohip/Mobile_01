import { Text, View } from 'react-native';
import { styles as s} from "./src/styles/GlobalStyle";
import { PythonScreen } from "./src/screens/index"

export default function App() {

  return (
    <View style={s.container}>
      <PythonScreen></PythonScreen>
    </View>
  );
}