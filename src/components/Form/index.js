import React, {useState} from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import ResultImc from './ResultImc'


export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc]= useState("Preencha peso e altura")
    const [imc, setImc]= useState(null)
    const [textButton, setTextButton]= useState("Calcular")

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setMessageImc("Seu IMC é igual: ")
            setHeight(null)
            setWeight(null)
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    }

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
             <Button onPress={validationImc} title="Calcular IMC "/>
            </View> 
           <View>
           <ResultImc messageResultImc={messageImc} ResultImc={imc}></ResultImc> 
           </View>
                     
           
           </View>

    )
}