import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import RestaurantsList from './components/RestaurantsList';
export default class App extends Component {
   

  render() {
    const uri = 'https://stmed.net/sites/default/files/restaurant-wallpapers-28840-4336902.jpg';
    return ( 
         
          <ImageBackground resizeMode='cover' source={{uri : uri}} style={styles.container}>
            <RestaurantsList />
          </ImageBackground>  
           
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
