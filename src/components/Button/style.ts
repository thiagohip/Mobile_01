import { StyleSheet } from "react-native";
import {colors} from '../../styles/GlobalStyle'


export const styles = StyleSheet.create({
    navigation: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 40
    },

    button: {
        borderColor: colors.primary,
        borderWidth: 2,
        width: 25,
        height: 25,
        borderRadius: 50
    },

    button_pressed: {
        borderColor: colors.primary,
        backgroundColor: colors.primary,
        borderWidth: 2,
        width: 25,
        height: 25,
        borderRadius: 50
    },
})