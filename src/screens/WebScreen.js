import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

const WebScreen = () => {
  return <WebView source={{ uri: "https://xenodochial-nightingale-ed8ef6.netlify.app/" }} />;
};

const styles = StyleSheet.create({});

export default WebScreen;
