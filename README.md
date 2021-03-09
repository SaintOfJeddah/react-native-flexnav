# React Native FlexNav

FlexNav is a flexible navigation bar created for React Native.




## Usage

```javascript

// You can define FlexNav as a Component: <FlexNav></FlexNav>
// It takes 3 Props:

// 1- topColor: Hexadecimal value of top color of gradient 
//       |------> topColor="#FFFFFF"


//2- bottomColor: Functions the same way as top color


//3- icons: An array of type Object, each object has two
//   attributes: source [Picture Source], and onPress [Function for Tap]
//       |
//       |----------->
                      [{
                        source: require("./assets/home.png"),
                        onPress: () => navigation.navigate("Home"),
                      },

                      {
                       source: require("./assets/profile.png"),
                       onPress: () => navigation.navigate("Profile"),
                      }]

```



## Preview


<img src="IMG_6104.gif" width="310" height="640"/>


<img src="IMG_6105.gif" width="310" height="640"/>


