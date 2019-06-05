import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// 1.pass the size of the spinner as a prop
const Spinner = ( {sizeProp} ) => {
   return (
    <View style={styles.spinnerStyle}>
        <ActivityIndicator size={ sizeProp || 'large' } /> 
    </View>
   );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };
