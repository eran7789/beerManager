import React from 'react';
import { Platform, DatePickerAndroid, DatePickerIOS } from 'react-native';

import Button from '../common/button';

class DatePicker extends React.Component {
  openAndroidPicker = () => DatePickerAndroid.open({
    date: this.buildDate(this.props.date)
  })
    .then(({ action, year, month, day }) => {
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({ date: new Date(year, month - 1, day) })
        this.props.onDateChange({ year, month, day });
      }
    })
    .catch (({ code, message }) => {
      console.warn('Cannot open date picker', message);
    });

  renderAndroid = () => (
    <Button onPress={ this.openAndroidPicker } />
  )

  renderIos = () => {
    return (
      <DatePickerIOS date={ this.buildDate(this.props.date) }
                     onDateChange={ (date) => this.props.onDateChange(this.breakDate(date)) }
                     mode="date"
                     style={{ height: 150, width: '100%' }} />
    );
  }

  breakDate = (date) => ({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  });

  buildDate = ({ year, month, day }) => new Date(year, month - 1, day);

  render() {
    const Component = Platform.select({
      ios: this.renderIos,
      android: this.renderAndroid
    });

    return <Component{...this.props } />
  }
}

export default DatePicker;