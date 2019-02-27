import React from 'react';
import { View, Text, Picker } from 'react-native';

const daysArr = [];
for (let i = 0; i <= 7; i++) {
  daysArr.push(i);
}

const hoursArr = [];
for (let i = 1; i <= 12; i++) {
  hoursArr.push(i);
}

const minutesArr = [];
for (let i = 1; i <= 59; i++) {
  minutesArr.push(i);
}

const TimePicker = ({ days = 1, hours = 1, minutes = 1, onValueChange }) => { 
  return (
    <View style={ styles.container }>
      <View style={ styles.pickerContainer }>
        <View style={ styles.textWrapper }>
          <Text>Days:</Text>
        </View>
        <Picker style={ styles.picker }
                selectedValue={ days }
                onValueChange={ (newDays) => 
                  onValueChange({ days: newDays, hours, minutes }) } >
          {
            daysArr.map((dayNumber) => <Picker.Item key={ dayNumber }
                                                    value={ dayNumber } 
                                                    label={ dayNumber.toString() } />)
          }
        </Picker>
      </View>
      
      <View style={ styles.pickerContainer }>
        <View style={ styles.textWrapper }>
          <Text>Hours:</Text>
        </View>
        <Picker style={ styles.picker }
                selectedValue={ hours }
                onValueChange={ (newHours) => 
                  onValueChange({ days, hours: newHours, minutes }) } >
          {
            hoursArr.map((hoursNumber) => <Picker.Item key={ hoursNumber }
                                                      value={ hoursNumber } 
                                                      label={ hoursNumber.toString() } />)
          }
        </Picker>
      </View> 

      <View style={ styles.pickerContainer }>
        <View style={ styles.textWrapper }>
          <Text>Minutes:</Text>
        </View>
        <Picker style={ styles.picker }
                selectedValue={ minutes }
                onValueChange={ (newMinutes) => 
                  onValueChange({ days, hours, minutes: newMinutes }) } >
          {
            minutesArr.map((minutesNumber) => <Picker.Item key={ minutesNumber }
                                                          value={ minutesNumber } 
                                                          label={ minutesNumber.toString() } />)
          }
        </Picker>
      </View>
    </View>
  )
}

const styles = {
  picker: {
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  pickerContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    width: '100%'
  }
}

export default TimePicker;