import {useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import Pesquisar from '../components/Pesquisar';
import CardAlbum from '../components/CardAlbum';
import albuns_styles from "./AlbunsScreen.css";

const apiBase = 'https://www.theaudiodb.com/api/v1/json/123/';

const AlbunsScreen = () => {
  const [albuns, setAlbuns] = useState('');
  const [loading, setLoading] = useState(false);

  function searchAlbuns(query) {
    setLoading(true);
    fetch(apiBase + "searchalbum.php?s=" + encodeURIComponent(query))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbuns(data.album || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }
    const renderAlbum = ({ item }) => (
   <CardAlbum
    title={item.strAlbum}
    subtitle={item.intYearReleased}
    image={item.strAlbumThumb}
  />
  );
  return (
    <View style={albuns_styles.container}>
      <Pesquisar onPress={searchAlbuns} />

      {loading && <Text style={albuns_styles.message}>Buscando...</Text>}

      {!loading && albuns.length > 0 ? (
        <FlatList
          data={albuns}
          keyExtractor={(item) => item.idAlbum}
          renderItem={renderAlbum}
          numColumns={2}
          contentContainerStyle={albuns_styles.list}
        />
      ) : (
        !loading && <Text style={albuns_styles.message}>Nenhum álbum encontrado</Text>
      )}
    </View>
  );
};
export default AlbunsScreen;
