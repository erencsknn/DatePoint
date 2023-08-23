import React from "react"
import {View , Text,Button} from "react-native"
import { useNavigation } from '@react-navigation/native'; 


const GeciciBaslangicSayfasi = () => {
    const navigation = useNavigation()
    return(
        <View>
            <Button title="Home a gider" onPress={()=> navigation.navigate("Home")} ></Button>
            <Button title="Login Sayfasına Gider" onPress={()=> navigation.navigate("Login")}></Button>
        </View>
    )
}


export default GeciciBaslangicSayfasi