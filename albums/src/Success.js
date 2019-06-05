import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class CheckoutSuccess extends PureComponent {
  render() {
    return (
<View>
<Text> Switching Success </Text>
</View>

<View>
<Text> You have switched your energy from {''} to {''} </Text>
</View>

<View>
<Text> You have switched your energy from {''} to {''} </Text>
</View>
            
    )
  }
}

export default connect()(CheckoutSuccess)
