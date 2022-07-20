import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {Post} from '../../../../types';
import {styles} from './styles';

interface PostItemProps {
  data: Post;
  onPress: () => void;
}

const PostItem: React.FC<PostItemProps> = ({data, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {data.title}
        </Text>
        <Text>
          <Text style={styles.authorLabel}>Author:</Text> {data.author_fullname}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;
