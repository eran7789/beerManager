import React from 'react';
import { Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { map } from 'lodash';

import { BEER_TYPES } from '../../constants/beer';

import { 
  pictureChanged, 
  nameChanged, 
  typeChanged, 
  breweryChanged, 
  addBeer
} from '../../actions/add';

import Card from '../common/card';
import CardSection from '../common/card-section';
import Button from '../common/button';
import Input from '../common/input';
import Spinner from '../common/spinner';

var ImagePicker = require('react-native-image-picker');

const options = {
  title: 'Select beer photo',
  mediaType: 'photo',
  storageOptions: {
    cameraRoll: true
  }
};

class Add extends React.Component {
  state = {
    pictureLoaded: false
  }

  uploadImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.data) {
        this.setState({ pictureLoaded: true });
        this.props.pictureChanged(response.data)
      }
    });
  }

  render() {
    const { 
      type, 
      brewery, 
      name, 
      picture, 
      user, 
      error,
      pictureChanged, 
      nameChanged, 
      typeChanged, 
      breweryChanged, 
      isLoading,
      addBeer
    } = this.props;

    return (
      <Card>
        <CardSection>
          <Input value={ name } 
                onChangeTextHandler={ name => nameChanged(name) }
                label="Beer name" 
                placeholder="goldstar unfiltered" />
        </CardSection>

        <CardSection>
          <Input value={ brewery } 
                onChangeTextHandler={ brewery => breweryChanged(brewery) }
                label="Beer brewery" 
                placeholder="goldstar..." />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, paddingLeft: 20 }}>Beer type</Text>
          <Picker selectedValue={ type } 
                  onValueChange={ (type) => typeChanged(type) }>
            {
              map(BEER_TYPES, (value, type) => 
                <Picker.Item label={ value } value={ value } key={ type } />)
            }
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={ this.uploadImage }
                  showApproval={ this.state.pictureLoaded } >
            Upload picture
          </Button>
        </CardSection>

        <Text style={ styles.errorStyle } >
          { error }
        </Text>

        <CardSection>
          {
            isLoading 
              ? <Spinner size="large" />
              : (
                <Button onPress={ () => addBeer({ name, type, brewery, picture, user })}>
                  Add beer
                </Button>
              )
          }
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = ({ add, auth }) => ({
  type: add.type,
  name: add.name,
  picture: add.picture,
  brewery: add.brewery,
  error: add.error,
  isLoading: add.isLoading,
  user: auth.email
});

export default connect(mapStateToProps, { 
  addBeer,
  nameChanged,
  pictureChanged,
  typeChanged,
  breweryChanged
})(Add);
