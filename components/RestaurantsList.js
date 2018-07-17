import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { SearchBar,Icon ,Card } from 'react-native-elements'

class RestaurantsList extends Component {  
    constructor(){
      super();

      this.state = {

        restaurants : [],
        searchBar : '',

      }

      this.urls = ['https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=food-dinner-lunch-70497.jpg&fm=jpg',
                'https://images.pexels.com/photos/247685/pexels-photo-247685.png?cs=srgb&dl=food-plate-healthy-247685.jpg&fm=jpg',
                'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?cs=srgb&dl=food-salad-healthy-46239.jpg&fm=jpg',
                'https://images.pexels.com/photos/247685/pexels-photo-247685.png?cs=srgb&dl=food-plate-healthy-247685.jpg&fm=jpg',
                'http://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2017/06/18922733_1700765506896134_8698153593649030779_o-1.jpg?fit=1863%2C1167',
                'https://1dib1q3k1s3e11a5av3bhlnb-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/italian-cicchetti.jpg',
                'https://jooinn.com/images/food-237.jpg',
                'https://www.eatingthaifood.com/wp-content/uploads/2017/05/thai-cashew-chicken-recipe.jpg',
                'https://peopledotcom.files.wordpress.com/2018/01/cheesecake-factory.jpg',
                'https://s3.amazonaws.com/static-asset/op-video-sync/images/production/p-5423610342001-brightcove-did-you-know-pizza-20170516-061803.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1ohkmg63G8hJQPSB5bLIVBAyCd9kxsK2qpTNP02Mz5Y-Pnha',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77m-zSE164ynYX_17PYmztFyzHuTU6jOrkVZ7-qEdTWtXCQF0xQ',
                'https://peopledotcom.files.wordpress.com/2018/01/cracker-barrel.jpg',
                'https://media-cdn.tripadvisor.com/media/photo-s/11/30/fe/99/our-grilled-chicken-sandwich.jpg',
                'https://peopledotcom.files.wordpress.com/2018/01/cheesecake-factory.jpg',
                'https://s3.amazonaws.com/static-asset/op-video-sync/images/production/p-5423610342001-brightcove-did-you-know-pizza-20170516-061803.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0P63X08EsLSRdXVyn4aDMbM9vNmXbxnLlIEJHvmK2SL5Z9tw1',
                'https://www.eatingthaifood.com/wp-content/uploads/2017/05/thai-cashew-chicken-recipe.jpg',
                'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=food-dinner-lunch-70497.jpg&fm=jpg',
                'https://images.pexels.com/photos/247685/pexels-photo-247685.png?cs=srgb&dl=food-plate-healthy-247685.jpg&fm=jpg']
    }



   searching = (query) => {

          this.setState({
            searchBar :query
          })

          this.readyRestaurants();
    }  

    readyRestaurants = () => {
      
      var API_KEY = '06b7d1e01b08a43c5f5523778ebd6fe9';
      var query = this.state.searchBar;
      var url = `https://developers.zomato.com/api/v2.1/search?q=${query}&apikey=${API_KEY}`;

       return fetch(url)
             .then(response => response.json())
             .then(restaurant => {
                  console.log(restaurant)
                  this.setState({

                    restaurants : restaurant.restaurants

                  })

              });
    }


   

    render() {
      return (
          <View style={{flex : 1}}>
            <SearchBar placeholder='Find your Dish here...' onChangeText={this.searching}/>
            <ScrollView>
              <View>
              {this.state.restaurants.map((restaurant,i) => (
                <Card key={i} containerStyle={{backgroundColor:'#333333'}} titleStyle={{color:'#a7a7a7'}} title={restaurant.restaurant.name}>
                  <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{width:'100%'}}>
                      <Image source={{uri : this.urls[i]}} style={{height:150}}/>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row',width:'100%'}}>
                      <View style={{width:'50%'}}>
                        <Text style={{color:'white',textAlign:'center',fontWeight:'bold',margin:'5%'}}>
                          Cuisines
                        </Text>
                        <Text style={{color:'white',textAlign:'center',margin:'5%'}}>
                        {restaurant.restaurant.cuisines}
                        </Text>
                      </View>
                      <View style={{width:'50%'}}>
                        <Text style={{color:'white',textAlign:'center',fontWeight:'bold',margin:'5%'}}>
                          Raiting
                        </Text>
                        <Text style={{color:'white',textAlign:'center',margin:'5%'}}>
                        {restaurant.restaurant.user_rating.aggregate_rating}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Card>
                ))}
              </View>
            </ScrollView>
          </View>
        )
    }

  }


  export default RestaurantsList