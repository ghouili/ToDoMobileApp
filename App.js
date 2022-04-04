import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AUth_Navigation from './navigations/AUth_Navigation';
import BottomTabNabigation from './navigations/BottomTabNabigation';

export default function App() {
  return (
    <NavigationContainer>
      <AUth_Navigation />
    </NavigationContainer>
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
