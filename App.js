import React from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";

const forecastApiKey = "66a5952b88ae4403c8381be9c7067b82";

import Forecast from "./components/forecast";
import Header from "./components/header";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    let today = new Date();
    this.state = {
      latitude: null,
      longitude: null,
      sublocality: null,
      locality: null,
      error: null,
      forecast: null,
      loading: true,
      todayDate:
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear()
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
        fetch(
          "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            position.coords.latitude +
            "," +
            position.coords.longitude +
            "&sensor=true"
        )
          .then(response => response.json())
          .then(responseJson => {
            // console.log("ADDRESS GEOCODE => " + JSON.stringify(responseJson));
            let address_components = responseJson.results[0].address_components;
            this.setState({
              locality: address_components.filter(
                x => x.types.filter(t => t == "locality").length > 0
              )[0].short_name,
              sublocality: address_components.filter(
                x => x.types.filter(t => t == "sublocality_level_1").length > 0
              )[0].short_name
            });
          })
          .catch(function(error) {
            console.log(
              "There has been a problem with your fetch operation: " +
                error.message
            );
          });

        fetch(
          "https://api.darksky.net/forecast/" +
            forecastApiKey +
            "/" +
            position.coords.latitude +
            "," +
            position.coords.longitude +
            "?lang=pt&exclude=hourly&units=auto"
        )
          .then(response => response.json())
          .then(responseJson => {
            this.setState({ forecast: responseJson, loading: false });
          })
          .catch(function(error) {
            console.log(
              "There has been a problem with your fetch operation: " +
                error.message
            );
          });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }


    render() {

      if (this.state.error) {
        return (<Text>Error: {this.state.error}</Text>);
      }

      if (!this.state.forecast) return (<Text>Loading</Text>);

      return (
        <View style={styles.container}>
          // TODO: identificar que é noite e escurecer o header
          {this.renderHeader()}
          {this.renderForecast()}
        </View>
      );
    }

  renderHeader() {
    return (
      <Header
        forecast={this.state.forecast}
        locality={this.state.sublocality + " - " + this.state.locality}
        todayDate={this.state.todayDate}
      />
    );
  }

  renderForecast() {
    return (<Forecast forecast={this.state.forecast} />);
  }

}
