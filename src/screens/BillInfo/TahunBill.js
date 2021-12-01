import {Center, NativeBaseProvider, Box, Stack, HStack} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TahunBill = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Stack>
          <HStack space={3} paddingBottom={5} alignItems="center">
            <TouchableOpacity>
              <Center h="20" w="20" bg="primary.500" rounded="md" shadow={3}>
                2019
              </Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center h="20" w="20" bg="secondary.500" rounded="md" shadow={3}>
                2020
              </Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center h="20" w="20" bg="emerald.500" rounded="md" shadow={3}>
                2021
              </Center>
            </TouchableOpacity>
          </HStack>
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
};

export default TahunBill;

const styles = StyleSheet.create({});
