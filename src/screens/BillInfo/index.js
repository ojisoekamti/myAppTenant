import {
  Button,
  Center,
  Flex,
  NativeBaseProvider,
  VStack,
  View,
} from 'native-base';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const BillInfo = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <VStack space={2.5} w="100%" flex={1} backgroundColor="#fff">
        <Flex
          mt={5}
          direction="row"
          _text={{
            color: 'coolGray.800',
          }}
          justify="center"
          alignContent="space-between">
          <Center padding={2}>
            <Button
              style={{height: 40, width: 140}}
              onPress={() => navigation.navigate('BulanBill')}>
              Month
            </Button>
          </Center>
          <Center padding={2}>
            <Button
              style={{height: 40, width: 140}}
              onPress={() => navigation.navigate('TahunBill')}>
              Year
            </Button>
          </Center>
        </Flex>
        <Center>
          <TouchableOpacity>
            <View
              bgColor="amber.500"
              style={{
                alignItems: 'center',
                height: 40,
                justifyContent: 'center',
                width: 300,
                borderRadius: 10,
              }}>
              <Text style={{color: '#fff'}}>Download</Text>
            </View>
          </TouchableOpacity>
        </Center>
      </VStack>
    </NativeBaseProvider>
  );
};

export default BillInfo;

const styles = StyleSheet.create({});
