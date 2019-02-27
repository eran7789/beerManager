import React from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash/fp';

import { fetchBeers } from '../../actions/beers';

import Card from '../common/card';
import Spinner from '../common/spinner';
import BeerList from '../beerList';

class Search extends React.Component {
  state = {
    isLoading: false
  }

  stopLoadingState = () => this.setState({ isLoading: false });

  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.fetchBeers({ success: this.stopLoadingState, failure: this.stopLoadingState });
  }

  render() {
    const { beerList } = this.props;

    return (
      <Card>
        <BeerList beers={ beerList } />
      </Card>
    )
  }
}

const mapStateToProps = ({ beers }) => ({
  error: beers.error,
  beerList: map((beer) => beer, beers.beerList)
});

export default connect(mapStateToProps, { 
  fetchBeers
})(Search);
