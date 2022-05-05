import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'atoms';
import { useLogin } from 'particules/serverStore/mutations';
import Constants from 'expo-constants';

export default function TabTwoScreen(): JSX.Element {
  const { mutate } = useLogin();
  const body = {
    password: 'sD555ASD',
    email: 'asd@gmail.com'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Tab Oneasdasd -- {Constants.manifest?.releaseChannel}
      </Text>
      <Button
        title="login"
        onPress={() => {
          // login();
          mutate(body);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
