import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const PalettePreview = ({ handlePress, palette }) => (
  <TouchableOpacity style={styles.container} onPress={handlePress}>
    <Text style={styles.nameText}>{palette.paletteName}</Text>
    <FlatList
      style={styles.list}
      keyExtractor={(item) => item.hexCode}
      data={palette.colors.slice(0, 5)}
      renderItem={({ item }) => (
        <View style={[styles.colorBlock, { backgroundColor: item.hexCode }]} />
      )}
      scrollEnabled={false}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  list: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  colorBlock: {
    height: 30,
    width: 30,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default PalettePreview;
