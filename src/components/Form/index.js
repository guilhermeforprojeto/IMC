import React from 'react';
import { View, Text, TextInput, Button} from 'react-native';


export default function Form(){
    return(
        <View>
            <View>

            <Text>Peso </Text>
            <TextInput
             placeholder="Ex.: 1.78" 
             keyboardType="numeric" 
             />

            <Text>Altura</Text>
            <TextInput
             placeholder="Ex.: 82" 
             keyboardType="numeric" />
             <Button title="Calcular IMC "/>
            </View> 
            {/* <ResultImc messageResultImc={messageImc} ResultImc={imc}></ResultImc>           */}
           </View>

    )
}