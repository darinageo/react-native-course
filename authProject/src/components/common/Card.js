import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        // border
        borderWidth: 1,
        borderRadius: 2, //rounder corders
        borderColor: '#ddd',
        borderBottomWidth: 0,

        // shadow
        shadowcolor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1, // range from 0 to 1, when applied to dark color, it gives a bit of light
        shadowRadius: 2, // because the border has and if shadow doesn't it will look really goofy.

        elevation: 1,

        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    
    }
};

export { Card };
