export default class Checkbox extends Component {
    static propTypes = {
      errorMessage: PropTypes.string,
      label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
      onChange: PropTypes.func.isRequired,
      testLabel: PropTypes.string,
      containerStyle: ViewPropTypes.style,
      testID: PropTypes.string
    }
  
    state = {
      checked: false
    }
  
    toggle = () => {
      const { onChange } = this.props
      const { checked } = this.state
  
      const newValue = !checked
  
      this.setState({ checked: newValue })
  
      onChange(newValue)
    }
  
    render() {
      const { checked } = this.state
      const { containerStyle, errorMessage, label, testID } = this.props
  
      return (
        <TouchableWithoutFeedback
          onPress={this.toggle}
          accessible={true}
          testID={testID}
        >
          <View style={[styles.container, containerStyle]}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} testID={testID + 'Checkbox'}>
                <Image source={checkboxUnchecked} style={styles.unChecked} />
                {checked && (
                  <Image
                    resizeMode="contain"
                    source={checkboxChecked}
                    style={styles.checked}
                  />
                )}
              </View>
              {typeof label === 'string' ? (
                <BodyText containerStyle={styles.label}>{label}</BodyText>
              ) : (
                label
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      )
    }
  }