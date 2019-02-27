import React from 'react';
import { Text, View, Image } from 'react-native';

import CardSection from './common/card-section';

const BeerListItem = ({ name, type, brewery, picture, addedBy }) => {
  return (
    <CardSection>
      <View style={ styles.imageContainer }>
        <Image style={{ height: 80, width: 80 }} 
               source={ { uri: `data:image/jpeg;base64,${picture}` } }/>
      </View>
      <View style={ styles.infoContainer }>
        <View>
          <Text>{ name }</Text>
        </View>
        <View>
          <Text>{ brewery }</Text>
        </View>
        <View>
          <Text>{ type }</Text>
        </View>
        <View>
          <Text>Added by: { addedBy }</Text>
        </View>
      </View>
    </CardSection>
  )
}

const styles = {
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoContainer: {
    padding: 20
  }
}

export default BeerListItem;
