import React from 'react';
import { View, Text, TextInput} from 'react-native';


export default function Form(){
    return(
        <View>

            <Text>Peso </Text>
            <TextInput
             placeholder="Digite aqui" 
             keyboardType="numeric" 
             />



            <Text>Altura</Text>
            <TextInput
             placeholder="Digite aqui" 
             keyboardType="numeric" />

        </View>
    )
}