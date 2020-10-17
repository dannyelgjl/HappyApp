import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import mapMarker from './src/assets/images/map-marker.png'

export default function App() {
  return (
    <View style={styles.container}>
      <MapView  
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        initialRegion={{  
          latitude: -7.1164938,
          longitude: -34.8276623,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }} >
          <Marker 
            icon={mapMarker}
            coordinate={{
              latitude: -7.1164938,
              longitude: -34.8276623,
            }}
          />
       </MapView>   
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

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
