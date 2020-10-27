import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Catalogue from './screens/Catalogue';
import ShirtCatalogue from './screens/ShirtCatalogue';
import PantCatalogue from './screens/PantCatalogue'
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
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

const SwitchNavigator = createSwitchNavigator({
  Catalogue:{screen:Catalogue},
  ShirtCatalogue:{screen:ShirtCatalogue},
  PantCatalogue:{screen:PantCatalogue}
})

const AppContainer = createAppContainer(SwitchNavigator)