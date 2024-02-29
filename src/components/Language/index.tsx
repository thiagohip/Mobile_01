import {View, Image, Text} from 'react-native'
import {styles} from './styles'

interface Props{
    text: string,
    image: any
}
 
export function Language({text, image}: Props){
    const language_symbol = image;

    return(
        <View style={styles.language}>
            <Image source={language_symbol}></Image>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}