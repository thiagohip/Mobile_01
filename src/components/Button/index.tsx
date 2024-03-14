import {TouchableOpacity, TouchableOpacityProps} from 'react-native'
import {styles} from './style'

interface IButton extends TouchableOpacityProps {
    onPressI: () => void
    buttonPressed: boolean
}


export function Button({onPressI, buttonPressed}: IButton){

    const styleNow = buttonPressed ? styles.button_pressed : styles.button;

    return(
        <TouchableOpacity style={styleNow} onPress={onPressI}></TouchableOpacity>
    )
}