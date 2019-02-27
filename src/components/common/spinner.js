import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={ styles.containerStyle }>
      <ActivityIndicator size={ size || 'large' } />
    </View>
  )
};

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default Spinner;