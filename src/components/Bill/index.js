import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Bill = () => {
    return (
        <Stack space={3} py="2" alignItems="center">
          <Text>Bill </Text>
          <HStack space={3} alignItems="center">
            <TouchableOpacity>
              <Center h="20" w="20" bg="primary.500" shadow={3}>
                <MaterialComIcon
                  name="note-text-outline"
                  size={50}
                  color="#fff"
                />
                <Text style={{color: '#fff'}}>Bill</Text>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center h="20" w="20" bg="secondary.500" shadow={3}>
                <MaterialComIcon
                  name="note-text-outline"
                  size={50}
                  color="#fff"
                />
                <Text style={{color: '#fff'}}>Bill</Text>
              </Center>
            </TouchableOpacity>
            <TouchableOpacity>
              <Center h="20" w="20" bg="emerald.500" shadow={3}>
                <MaterialComIcon
                  name="note-text-outline"
                  size={50}
                  color="#fff"
                />
                <Text style={{color: '#fff'}}>Bill</Text>
              </Center>
            </TouchableOpacity>
          </HStack>
        </Stack>
      
    )
}

export default Bill

const styles = StyleSheet.create({})
