import React, {useEffect} from 'react'
import {
    SafeAreaView, 
    Text,
    StyleSheet,
    View,
    TextInput,
    Button} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setEmail, setPassword } from '../../../redux/actions'
import { USER_LOGGED_IN , getPeople, getships} from '../../../redux/actions'

const LoginPage = ({navigation}) => {

     const {email, password}= useSelector(state => state.userReducer);
     //const password = useSelector(state => state.userReducer.password);
     const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    const userData = () => {
        if (email != '' && password != '' || isLogged != false){
            dispatch(USER_LOGGED_IN())
            dispatch(getPeople())
            dispatch(getships())
            return  navigation.navigate('Pilots')
        }
        else return  navigation.navigate('Login')
    }
    console.log(email);
    console.log(isLogged) 
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.titleText}>Please input email and Password</Text>
                <TextInput label="Email" style={styles.input} onChangeText={(value) => dispatch(setEmail(value)) }></TextInput>
                <TextInput label="Password" style={styles.input} onChangeText={(value) => dispatch(setPassword(value)) }></TextInput>
                <Button title='Login' onPress={() => userData()}/>
                <Button title='guest'/>
            </View>
        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default LoginPage;

