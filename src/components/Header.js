import React from 'react';
import { Text, View } from 'react-native';

export const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
    <View style={viewStyle}>
        <Text style={textStyle}> {props.headerText}</Text>
    </View>
    );
};
const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 3,
        position: 'relative'

    }
};
