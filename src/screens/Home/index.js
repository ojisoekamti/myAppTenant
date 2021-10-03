import {Stack, Heading, HStack, Center} from 'native-base';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppBar from '../../components/AppBar';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Example() {
  return (
    <SafeAreaView>
      <AppBar />
    </SafeAreaView>
  );
}

const Home = () => {
  return <Example />;
};

export default Home;

const styles = StyleSheet.create({});
