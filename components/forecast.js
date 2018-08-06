import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ForecastItem from "./forecastitem";

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    marginBottom: 40
  },
  forecastList: {
    flex: 1,
    borderColor: "#E2E2E2",
    paddingLeft: 12,
    paddingRight: 12
  }
});

const Forecast = (props) => (
  <View style={styles.forecastList}>
    <ScrollView>
      <View style={styles.content}>
      {
        props.forecast.daily.data.map(day => {
          return (
            <ForecastItem
              key={day.time}
              summary={day.summary}
              low={day.temperatureMin}
              high={day.temperatureMax}
            />
          )
        })
      }</View>
    </ScrollView>
  </View>
);

export default Forecast;
