import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPress, children }) => {
    const { buttonStyle, textStyle } = styles; // destructure styles
    return (
        <TouchableOpacity onPress={whenPress} style={buttonStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch', // stretch to fill the limits of the container
        backgroundCloto: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10
    }
};

export { Button };
