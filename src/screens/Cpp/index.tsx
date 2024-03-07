import {View} from 'react-native'
import {LanguageComponent} from '../../components/index'

export function Cpp(){

    return(
        <View>
            <LanguageComponent text='C++' image={require('../../assets/cpp.png')}></LanguageComponent>
        </View>
    )
}