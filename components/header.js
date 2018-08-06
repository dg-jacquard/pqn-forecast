import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground
} from "react-native";

const styles = StyleSheet.create({
  headerView: {
    marginRight: 5,
    marginLeft: 5
  },
  location: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 35,
    color: "#fff"
  },
  headerIcon: {
    width: 100,
    height: 100
  },
  forecast: {
    fontSize: 14,
    textAlign: "center",
    paddingTop: 3,
    color: "#fff"
  },
  centerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10
  },
  centerImageView: {
    paddingRight: 20
  },
  currentTemp: {
    color: "#fff",
    fontSize: 64,
    fontWeight: "200"
  },
  feelsLike: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500"
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 40
  },
  bottomViewLeft: {
    flex: 1,
    flexDirection: "row"
  },
  bottomViewToday: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 6,
    fontSize: 16
  },
  bottomViewTodayDate: {
    color: "#fff",
    fontSize: 16
  },
  bottomViewRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  low: {
    color: "#fff",
    marginRight: 12,
    fontSize: 14,
    fontWeight: "300",
    width: 32,
    textAlign: "right"
  },
  high: {
    color: "#fff",
    fontWeight: "300",
    fontSize: 14,
    width: 32,
    textAlign: "right"
  }
});

const Header = (props) => (
  <ImageBackground
    resizeMode={"stretch"} // cover
    style={{ flex: 1 }}
    source={require("./img/header-background.png")}
  >
    <View style={styles.headerView}>
      <View>
        <Text style={styles.location}>
          {props.locality}
        </Text>
        <Text style={styles.forecast}>
          {props.forecast.currently.summary}
        </Text>
      </View>
      <View style={styles.centerView}>
        <View style={styles.centerImageView}>
          <Image
            source={require("./img/cloudy.png")}
            style={styles.headerIcon}
          />
        </View>
        <View>
          <Text style={styles.currentTemp}>
            {Math.floor(props.forecast.currently.temperature) +
              "\u00B0"}
          </Text>
          <Text style={styles.feelsLike}>
            {Math.floor(props.forecast.currently.apparentTemperature) + "\u00B0"}
          </Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.bottomViewLeft}>
          <Text style={styles.bottomViewToday}>Hoje</Text>
          <Text style={styles.bottomViewTodayDate}>
            {props.todayDate}
          </Text>
        </View>
        <View style={styles.bottomViewRight}>
          <Text style={styles.low}>{10 + "\u00B0" }C</Text>
          <Text style={styles.high}>{15 + "\u00B0" }C</Text>
        </View>
      </View>
    </View>
  </ImageBackground>
);

export default Header;
