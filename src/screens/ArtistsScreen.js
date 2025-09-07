import { useEffect, useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import Pesquisar from '../components/Pesquisar';
import ArtistCard from '../components/Card';
import artist_style from './ArtistsScreen.css';

const apiBase = 'https://www.theaudiodb.com/api/v1/json/123/';
const ArtistScreen = () => {
  const [artist, setArtist] = useState('');
  const [loading, setLoading] = useState(false);

  function searchArtist(query) {
    setLoading(true);
    fetch(apiBase + 'search.php?s=' + encodeURIComponent(query))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArtist(data.artists[0]);
        setLoading(false);
      })
      .catch((error) => console.error('Error:', error));
    setLoading(false);
  }

  return (
    <ScrollView style={artist_style.container}>
      <Pesquisar onPress={searchArtist} />

      {loading && <Text>Buscando...</Text>}

      {!loading && artist && (
        <ArtistCard
          title={artist.strArtist}
          subtitle={artist.strGenre}
          image={artist.strArtistFanart}
          content={artist.strBiographyPT || artist.strBiographyEN}
        />
      )}
    </ScrollView>
  );
};

export default ArtistScreen;
