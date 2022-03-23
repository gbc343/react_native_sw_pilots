import React, {useEffect} from 'react'
import {
    SafeAreaView, 
    Text,
    useColorScheme,
    View,
    TextInput,
    Button} from 'react-native'
import { getPeople } from '../../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'


function PilotPage  () {
    const {pilots,ships}  = useSelector(state => state.sw_pilots);
    const dispatch = useDispatch;

   console.log(pilots)
    return (
        
        <SafeAreaView>
           <FlatList
                data={pilots}
                renderItem={(item) => (
                    <View>
                        <Text>{item.results.name}</Text>
                    </View>
                )}
           
           />
        </SafeAreaView>
    )


}

export default PilotPage;

