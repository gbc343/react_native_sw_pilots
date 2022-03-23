import React from 'react'
import {
    SafeAreaView, 
    Text,
    useColorScheme,
    View,
    TextInput,
    Button} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setEmail, setPassword } from '../../../redux/actions'
import { USER_LOGGED_IN } from '../../../redux/actions'

const LoginPage = ({navigation}) => {

     const {email, password}= useSelector(state => state.userReducer);
     //const password = useSelector(state => state.userReducer.password);
     const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    const userData = () => {
        if (email != '' && password != '' || isLogged != false){
            dispatch(USER_LOGGED_IN())
            return  navigation.navigate('Pilots')
        }
        else return  navigation.navigate('Login')
    }
    console.log(email);
    console.log(isLogged) 
    return (
        <SafeAreaView>
            <View>
                <Text>Please input email and Password</Text>
                <TextInput label="Email" onChangeText={(value) => dispatch(setEmail(value)) }></TextInput>
                <TextInput label="Password" onChangeText={(value) => dispatch(setPassword(value)) }></TextInput>
                <Button title='Login' onPress={() => userData()}/>
                <Button title='guest'/>
            </View>
        </SafeAreaView>
    )


}

export default LoginPage;

