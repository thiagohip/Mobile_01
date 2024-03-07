import { View } from "react-native";
import { styles } from './style';
import { ButtonComponent } from '../index';
import { IPage } from '../../../App';


export function Navigation({setPageI}: IPage){
    return(
        <View style={styles.navigation}>
            <ButtonComponent onPressI={() => setPageI(1)} ></ButtonComponent>
            <ButtonComponent onPressI={() => setPageI(2)}></ButtonComponent>
            <ButtonComponent onPressI={() => setPageI(3)}></ButtonComponent>
        </View>
    )
    
}