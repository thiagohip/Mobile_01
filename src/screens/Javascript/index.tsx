import {View} from 'react-native'
import {LanguageComponent} from '../../components/index'

export function Javascript(){

    return(
        <View>
            <LanguageComponent text='Javascript' image={require('../../assets/js.png')}></LanguageComponent>
        </View>
    )
}