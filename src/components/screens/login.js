import React from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';

import { goToUserMain } from '../../screens';

import { emailChanged, passwordChanged, loginUser } from '../../actions/auth';

import Button from '../common/button';
import Card from '../common/card';
import CardSection from '../common/card-section';
import Input from '../common/input';
import Spinner from '../common/spinner';

class Login extends React.Component {
  render() {
    const { emailChanged, passwordChanged, email, password, error, isLoading, loginUser } = this.props;

    return (
      <Card>
        <CardSection>
          <Input onChangeTextHandler={ emailValue => emailChanged(emailValue) }
                 value={ email }
                 label="Email"
                 placeholder="user@host.com"
                 keyBoardType="email-address" />
        </CardSection>

        <CardSection>
          <Input onChangeTextHandler={ passwordValue => passwordChanged(passwordValue) }
                 value={ password }
                 label="Password"
                 placeholder="password"
                 secureTextEntry />
        </CardSection>

        <Text style={ styles.errorStyle } >
          { error }
        </Text>

        <CardSection>
          {
            isLoading
              ? (
                <Spinner size="large" />
              )
              : (
                <Button onPress={ () => loginUser({ email, password, success: goToUserMain }) } >
                  Log In
                </Button>
              )
          }
        </CardSection>
      </Card>
    );
  };
};

styles = {
  errorStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
}

const mapStateToProps = ({ auth }) => ({
  email: auth.email,
  password: auth.password,
  error: auth.error,
  isLoading: auth.isLoading
})

export default connect(mapStateToProps, { 
  emailChanged,
  passwordChanged,
  loginUser
})(Login);