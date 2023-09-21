import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

const Detail = ({id = 0}) => {

    const handlePress = (item) => {
        Alert.alert("Bạn đã click vào item thứ " + item);
    }

    const RenderButton = () => {
        const arrButton = [];
        for(let i=1; i<=id; i++) {
            arrButton.push(i);
        }
        return arrButton.map((item, idx) => 
            <TouchableOpacity 
                onPress={() => handlePress(item, idx)}
                style={{width: 150, margin: 5, padding: 10, borderWidth: 1, borderColor: 'black'}} key={idx}
            >
                <Text style={{textAlign: 'center', fontSize: 20}}>{item}</Text>
            </TouchableOpacity>
        )
    }

    return(
        <View>
            <Text style={{color: 'red', fontSize: 20}}>
                Detail page {id}
            </Text>
            <View>
                {
                    RenderButton()
                }
            </View>
        </View>
    )
}

export default Detail;