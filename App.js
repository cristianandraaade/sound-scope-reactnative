import { NavigationContainer } from "@react-navigation/native";;
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from "./src/screens/HomeScreen";
import ArtistScreen from "./src/screens/ArtistsScreen";
import AlbunsScreen from "./src/screens/AlbunsScreen";
import TrendingScreen from "./src/screens/TrendingScreen"

const Drawer = createDrawerNavigator();

const App = () =>{
  return(
    <>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Trending" component={TrendingScreen} />
        <Drawer.Screen name="Artists" component={ArtistScreen} />
        <Drawer.Screen name="Albuns" component={AlbunsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
}
export default App;