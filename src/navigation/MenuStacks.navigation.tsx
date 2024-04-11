import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack"
import {} from "../screens"

type MenuStackParam = {
    Slide1: undefined
    Slide2: undefined
}

type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Slide1">
export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MenuStack(){
    const Stack = createStackNavigator<MenuStackParam>();
    return(
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: true
        }}>
            <Stack.screen name="Slide1" component={ScreenSlide1}/>
            <Stack.screen name="Slide2" component={ScreenSlide1}/>
        </Stack.Navigator> 
    )
}