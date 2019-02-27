import React from 'react';
import {
  TextInput,
  Text,
  View
} from 'react-native';

const Input = ({ value, onChangeTextHandler, label, placeholder, secureTextEntry, ...rest }) => {
  return (
    <View style={ styles.containerStyle }>
      <Text style={ styles.labelStyle }>
        { label }
      </Text>
      <TextInput onChangeText={ onChangeTextHandler }
                 value={ value }
                 style={ styles.inputStyle }
                 autoCorrect={ false }
                 placeholder={ placeholder }
                 secureTextEntry={ secureTextEntry }
                 {...rest} />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  labelStyle: {
    fontSize: 18,
    flex: 1,
    paddingLeft: 20
  },
  inputStyle: {
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2
  }
};

export default Input;