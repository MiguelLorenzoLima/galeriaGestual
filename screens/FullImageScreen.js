import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function FullImageScreen({ route }) {
  const { uri } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.fullImage} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  fullImage: { width: '100%', height: '100%' },
});
