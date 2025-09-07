import { Card } from "react-native-paper";
import { Text, StyleSheet } from "react-native";
import albumCard_styles from "./CardAlbum.css";

const AlbumCard = ({ title, subtitle, image }) => {
  return (
    <Card style={albumCard_styles.card}>
      {image && (
        <Card.Cover source={{ uri: image }} style={albumCard_styles.image} />
      )}
      <Card.Content style={albumCard_styles.content}>
        <Text style={albumCard_styles.title} numberOfLines={1}>
          {title}
        </Text>
        {subtitle && <Text style={albumCard_styles.subtitle}>{subtitle}</Text>}
      </Card.Content>
    </Card>
  );
};



export default AlbumCard;