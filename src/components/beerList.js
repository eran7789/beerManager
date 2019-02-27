import React from 'react';
import { FlatList } from 'react-native';

import Card from './common/card';
import BeerListItem from './beer-list-item';

const getKey = (beer) => beer.name;
const renderItem = ({ item }) => <BeerListItem {...item} />

const BeerList = ({ beers }) => {
  return (
    <Card>
      <FlatList data={ beers }
                keyExtractor={ getKey }
                renderItem={ renderItem }
                initialNumberToRender={ 20 } />
    </Card>
  )
}

export default BeerList;
