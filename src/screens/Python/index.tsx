import {View} from 'react-native'
import {LanguageComponent} from '../../components/index'

export function Python(){

    return(
        <View>
            <LanguageComponent text='Python' image={require('../../assets/python.png')}></LanguageComponent>
        </View>
    )
}