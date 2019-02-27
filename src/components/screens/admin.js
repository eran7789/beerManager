import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { dateChanged, periodChanged, sendInvites } from '../../actions/admin';

import Card from '../common/card';
import Button from '../common/button';
import CardSection from '../common/card-section';
import DatePicker from '../common/date-picker';
import TimePicker from '../common/time-picker';

class Admin extends React.Component {
  renderOpenNew = () => {
    const { invitationForm, dateChanged, periodChanged, sendInvites } = this.props;
    
    return (
      <Card>
        <CardSection style={ styles.titleContainer }>
          <Text style={ styles.title }>Create a new request for beer orders:</Text>
        </CardSection>

        <CardSection style={ styles.centerContainer }>
          <Text style={ styles.text }>Pick a date to take orders:</Text>
          <DatePicker onDateChange={ ({year, day, month}) => dateChanged({ year, month, day }) }
                      date={ invitationForm.date }/>
        </CardSection>

        <CardSection style={ styles.centerContainer }>
          <Text style={ styles.text }>Choose how long the invitation will be available</Text>
          <TimePicker onValueChange={ ({ days, hours, minutes }) => periodChanged({ days, hours, minutes }) }
                      days={ invitationForm.period.days }
                      hours={ invitationForm.period.hours }
                      minutes={ invitationForm.period.minutes } />
        </CardSection>

        <Button onPress={ () => sendInvites({ date, period }) }>
          Invite my groupe  
        </Button> 
      </Card>
    );
  }

  render() {
    const { isWaitingForOrders } = this.props;

    return this.renderOpenNew();
  }
}

const styles = {
  title: {
    fontSize: 22
  },
  titleContainer: {
    padding: 5,
    justifyContent: 'center'
  },
  text: {
    fontSize: 18
  },
  centerContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const mapStateToProps = ({ admin }) => ({
  invitationForm: admin.invitationForm
});

export default connect(mapStateToProps, {
  dateChanged,
  periodChanged,
  sendInvites
})(Admin);