import React from 'react';
import { View, Text, Modal } from 'react-native';

import CardSection from './card-section';
import Button from './button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { cardSectionStyle, containerStyle, textStyle } = styles;

  return (
    <Modal animationType="slide"
           onRequestClose={ () => null }
           transparent
           visible={ visible }>
      <View style={ containerStyle }>
        <CardSection style={ cardSectionStyle }>
          <Text style={ textStyle }>
            { children }
          </Text>
        </CardSection>

        <CardSection>
          <Button pressHandler={ onAccept }>
            Yes
          </Button>
          <Button pressHandler={ onDecline }>
            No
          </Button>
        </CardSection>
      </View>
    </Modal>
  )
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    lineHeight: 40,
    textAlign: 'center'
  }
}

export default Confirm;
