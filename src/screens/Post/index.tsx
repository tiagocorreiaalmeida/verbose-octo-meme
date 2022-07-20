import {Linking, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import {RootStackParamList} from '../../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type PostScreenRouteProp = NativeStackScreenProps<RootStackParamList, 'Post'>;

import {styles} from './styles';

const PostScreen: React.FC<PostScreenRouteProp> = ({route}) => {
  const {data} = route.params;

  const dateLabel = useMemo(
    () => new Date(data.created * 1000).toLocaleDateString(),
    [data.created],
  );

  const isLinkDescription = !!data?.url_overridden_by_dest;

  const onLinkPress = async () => {
    try {
      await Linking.openURL(data?.url_overridden_by_dest!);
    } catch {}
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.author}>Posted by u/{data.author_fullname}</Text>
        <Text style={styles.date}>{dateLabel}</Text>
      </View>
      <Text style={styles.title}>{data.title}</Text>

      <TouchableOpacity onPress={onLinkPress} disabled={!isLinkDescription}>
        <Text
          style={[
            styles.description,
            isLinkDescription && styles.descriptionLink,
          ]}>
          {data.url_overridden_by_dest ?? data.selftext}
        </Text>
      </TouchableOpacity>

      <Text style={styles.countersLabel}>Score: {data.score}</Text>
      <Text style={styles.countersLabel}>Upvotes: {data.ups}</Text>
      <Text style={styles.countersLabel}>Downvotes: {data.downs}</Text>
    </ScrollView>
  );
};

export default PostScreen;
