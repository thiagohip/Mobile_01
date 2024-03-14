import { StyleSheet } from "react-native";
import {colors, fonts} from '../../styles/GlobalStyle'

export const styles = StyleSheet.create({
    language: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 120
    },
    
    text: {
        color: colors.primary,
        fontSize: 40,
        fontFamily: fonts.regular,
    }
  });