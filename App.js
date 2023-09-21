import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Hello from './components/Hello';
import Detail from './components/Detail';
import Login from './components/Login';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Hello name={"Canhpv"} />
      <Detail id={5} /> */}
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
