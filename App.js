// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Welcome from './src/screens/Welcome';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';

export default function App() {
  return (
    // <Provider> //bu kisma bak store={store}
      <Navigation/>
    // </Provider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
