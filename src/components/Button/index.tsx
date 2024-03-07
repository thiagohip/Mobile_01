import {TouchableOpacity, TouchableOpacityProps} from 'react-native'
import {styles} from './style'

interface IButton extends TouchableOpacityProps {
    onPressI: () => void
}

const changeColor = () =>{
    buttonStyle = styles.button_pressed
}

export function Button({onPressI}: IButton){

    const [] = useState(false)

    return(
        <TouchableOpacity style={styles.button} onPress={onPressI}></TouchableOpacity>
    )
}