import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const Button = ({ children, onPress, showApproval }) => {
  return (
    <TouchableOpacity style={ getStyles(showApproval).buttonStyle }
                      onPress={ onPress }>
      {
        showApproval && 
        <Image style={{ tintColor: 'green', height: 16, width: 16 }} 
               source={require('../../assests/icons/checked.png')} />
      }
      <Text style={ getStyles(showApproval).buttonTextStyle }>
        { children }
      </Text>
    </TouchableOpacity>
  );
};

const getStyles = (showApproval) => ({
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: showApproval ? 'green' : '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: showApproval ? 'green' : '#007aff',
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  }
});

export default Button;