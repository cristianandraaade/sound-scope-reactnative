import { useState } from 'react';
import { Button } from 'react-native-paper';
import { View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import pesquisar_styles from "./Pesquisar.css";

const Pesquisar = ({ onPress }) => {
  const [pesquisa, setPesquisa] = useState('');

  const handlePress = () => {
    if (typeof onPress === 'function') {
      onPress(pesquisa);
    }
  };

  return (
    <View style={pesquisar_styles.container}>
      <TextInput
        placeholder="Pesquise o artista"
        placeholderTextColor="#bbb"
        value={pesquisa}
        onChangeText={setPesquisa}
        style={pesquisar_styles.input}
      />
      <Button
        mode="contained"
        onPress={handlePress}
        style={pesquisar_styles.button}
        contentStyle={{ padding: 0 }} 
      >
      <Icon name="music" size={24} color="#fff" />
      </Button>
    </View>
  );
};

export default Pesquisar;
