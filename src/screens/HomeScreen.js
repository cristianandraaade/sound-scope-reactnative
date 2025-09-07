import { View, Text, Image} from "react-native";
import home_styles from "./HomeScreen.css"


const HomeScreen = ({ navigation }) => {
  return (
    <View style={home_styles.container}>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-filled/200/ffffff/musical-notes.png",
        }}
        style={home_styles.logo}
      />
      <Text style={home_styles.title}>🎵 SoundScope</Text>
      <Text style={home_styles.subtitle}>
        Encontre seus artistas e albuns favoritos!!!
      </Text>
    </View>
  );
};

export default HomeScreen