import { useEffect, useState } from 'react';
import { Avatar, Text } from 'react-native';
import { Card } from 'react-native-paper';
import card_style from './Card.css';

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const MeuCard = ({ title, subtitle, image, content }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  const shouldTruncate = content && content.length > limit;
  const displayedContent =
    expanded || !shouldTruncate ? content : content.substring(0, limit) + '...';

  return (
    <Card mode="outlined" style={card_style.card}>
      <Card.Content style={card_style.teste}>
        <Text variant="bodyLarge" style={card_style.title}>
          {title}
        </Text>
        <Text variant="bodyMedium" style={card_style.subtitle}>
          {subtitle}
        </Text>
      </Card.Content>
      {image && <Card.Cover source={{ uri: image }} style={card_style.image} />}
      <Card.Content>
        <Text variant="bodyLarge" style={card_style.content}>
          {content}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default MeuCard;
