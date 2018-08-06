import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   photo: {
//     height: 32,
//     width: 32
//   },
//   text: {
//     marginLeft: 12,
//     fontSize: 16,
//   }
// });


const styles = StyleSheet.create({
  forecastItem: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 3,
    paddingRight: 3,
    flexDirection: 'row'
  },
  forecastItemDayView: {
    flex: 1
  },
  forecastItemDataView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  photo: {
    height: 32,
    width: 32
  },
  dayText: {
    fontSize: 14,
    flexWrap: 'wrap'
  },
  forecastItemTempLow: {
    textAlign: 'right',
    marginLeft: 12,
    width: 32,
    color: '#B0B5BF',
    fontSize: 12
  },
  forecastItemTempHigh: {
    textAlign: 'right',
    marginLeft: 12,
    width: 32,
    fontSize: 12
  },
  separator: {
    borderColor: '#F4F4F4',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

const Row = (props) => (
  <View style={[styles.forecastItem, styles.separator]}>
    <View stye={styles.forecastItemDayView}>
      <Text style={styles.dayText}>{ props.summary}</Text>
    </View>
    <View style={styles.forecastItemDataView}>
      <Text style={styles.forecastItemTempLow}>{ Math.floor(props.low) + "\u00B0" }C</Text>
      <Text style={styles.forecastItemTempHigh}>{ Math.floor(props.high) + "\u00B0" }C</Text>
    </View>
  </View>
);
// const Row = (props) => (
//   <View style={styles.container}>
//     <Image source={require('./img/cloudy.png')} style={styles.photo} />
//     <Text style={styles.text}>
//       { props.summary }
//     </Text>
//   </View>
// );

export default Row;
