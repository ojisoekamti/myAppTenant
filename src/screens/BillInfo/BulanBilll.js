import {Center, NativeBaseProvider, Box, Stack, HStack} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const BulanBilll = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Stack>
          <HStack space={3} paddingBottom={5} alignItems="center">
            <TouchableOpacity>
              <Center h="20" w="20" bg="primary.500" rounded="md" shadow={3}>
                Januari
              </Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center h="20" w="20" bg="secondary.500" rounded="md" shadow={3}>
                Februari
              </Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center h="20" w="20" bg="emerald.500" rounded="md" shadow={3}>
                Maret
              </Center>
            </TouchableOpacity>
          </HStack>
          <HStack space={3} paddingBottom={5} alignItems="center">
            <TouchableOpacity>
              <Center h="20" w="20" bg="primary.500" rounded="md" shadow={3}>
                April
              </Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center h="20" w="20" bg="secondary.500" rounded="md" shadow={3}>
                Mei
              </Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center h="20" w="20" bg="emerald.500" rounded="md" shadow={3}>
                Juni
              </Center>
            </TouchableOpacity>
          </HStack>
          <HStack space={3} paddingBottom={5} alignItems="center">
            <TouchableOpacity>
              <Center h="20" w="20" bg="primary.500" rounded="md" shadow={3}>
                Juli
              </Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center h="20" w="20" bg="secondary.500" rounded="md" shadow={3}>
                Agustus
              </Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center h="20" w="20" bg="emerald.500" rounded="md" shadow={3}>
                September
              </Center>
            </TouchableOpacity>
          </HStack>
          <HStack space={3} paddingBottom={5} alignItems="center">
            <TouchableOpacity>
              <Center h="20" w="20" bg="primary.500" rounded="md" shadow={3}>
                Oktober
              </Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center h="20" w="20" bg="secondary.500" rounded="md" shadow={3}>
                November
              </Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center h="20" w="20" bg="emerald.500" rounded="md" shadow={3}>
                Desember
              </Center>
            </TouchableOpacity>
          </HStack>
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
};

export default BulanBilll;

const styles = StyleSheet.create({});
