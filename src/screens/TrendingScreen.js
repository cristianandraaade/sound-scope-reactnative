import {useEffect, useState} from "react";
import {View, FlatList, Text} from "react-native";
import trending_styles from "./TrendingScreen.css";
import CardAlbum from "../components/CardAlbum";

const apiBase = "https://www.theaudiodb.com/api/v1/json/123/trending.php?country=us&type=itunes&format=albums";
const TrendingScreen = () =>{
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);

  function searchTrending() {
    setLoading(true);
    fetch(apiBase)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTrending(data.trending || []);
        setLoading(false);
      })
      .catch((error) => console.error('Error:', error));
    setLoading(false);
  }
    useEffect(() => {
    searchTrending();
  }, []);
    const renderTrending = ({ item }) => (
   <CardAlbum
    title={item.strArtist}
    subtitle={item.strAlbum}
    image={item.strAlbumThumb}
  />
  );
  return(
        <View style={trending_styles.container}>
      {loading && <Text style={trending_styles.message}>Buscando...</Text>}

      {!loading && trending.length > 0 ? (
        <FlatList
          data={trending}
          keyExtractor={(item) => item.idTrending}
          renderItem={renderTrending}
          numColumns={2}
          contentContainerStyle={trending_styles.list}
        />
      ) : (
        !loading && <Text style={trending_styles.message}>Sem ranking essa semana</Text>
      )}
    </View>
  );
}
export default TrendingScreen;