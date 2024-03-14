import { View } from "react-native";
import { styles } from './style';
import { Button as ButtonComponent } from '../Button';
import { IPage } from '../../../App';


export function Navigation({setPageI, pageNow}: IPage){

    return(
        <View style={styles.navigation}>
            <ButtonComponent onPressI={() => setPageI(1)} buttonPressed={pageNow == 1}></ButtonComponent>
            <ButtonComponent onPressI={() => setPageI(2)} buttonPressed={pageNow == 2}></ButtonComponent>
            <ButtonComponent onPressI={() => setPageI(3)} buttonPressed={pageNow == 3}></ButtonComponent>
        </View>
    )
    
}