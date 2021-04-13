import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  return (
    <FlatList
      style={styles.container}
      data={route.params.colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={
        <Text style={styles.textHeader}>{route.params.paletteName}</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ColorPalette;
