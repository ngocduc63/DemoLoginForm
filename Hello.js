'use strict'

import { Component }from 'react';
import { View, Text } from 'react-native';

export default class Hello extends Component
{
    constructor(props) {
        super(props);
        console.log(props);
        this.name = props.name;
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 40, fontWeight: "bold"}}>Hello {this.name}!</Text>
            </View>
        )
    }
}