import React from "react";
import { StyleSheet, View, Button } from "react-native";
import RNTrustedWebActivity from 'react-native-trusted-web-activity';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="show PWA"
        onPress={() => {
          RNTrustedWebActivity.goToPWA('https://modest-bartik-081d7b.netlify.app');
          //  navigation.navigate("WebPage");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
