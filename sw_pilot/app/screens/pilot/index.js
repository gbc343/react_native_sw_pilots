import React from 'react'
import {
    SafeAreaView, 
    Text,
    useColorScheme,
    View,
    TextInput,
    Button} from 'react-native'


const PilotPage = () => {


    return (
        <SafeAreaView>
            <View>
                <Text>Pilot Page</Text>
                <TextInput label="Email" keyboardType='email-address'></TextInput>
                <TextInput label="Password" secureTextEntry={true}></TextInput>
             
            </View>
        </SafeAreaView>
    )


}

export default PilotPage;

