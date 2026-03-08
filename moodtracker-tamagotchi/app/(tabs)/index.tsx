import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import { useRouter } from 'expo-router';
import React, {useState} from 'react'



const Index = () => {

    const TextVisibility = () => {
        const [isVisible, setIsVisible] = useState(false);

        const handlePet = () => {
            setIsVisible(true)
        }
    
    
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handlePet}>
            <Image source={require('../../assets/images/pet-dog.png')} style={styles.Image}/>
            
        </TouchableOpacity>
        {isVisible && (<Text style={styles.title}>You petted the Doggo</Text>)}
        <Text style={styles.title}>
            Touch him to pet him
        </Text>
        
      
    </View>
  )
}
}

export default Index

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FAEB92',
        flex: 1,
        alignContent: 'center',
    },
    Image: {
        margin: 100,
        width: 200,
        height: 200,
        alignSelf: 'center',
        alignContent: 'center',
        display: 'flex',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignContent: 'center',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',

    }
})