import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HomeScreen = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});
