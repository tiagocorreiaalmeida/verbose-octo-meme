import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
  },
  author: {
    color: 'grey',
    marginBottom: 4,
  },
  date: {
    color: 'grey',
  },
  description: {
    marginBottom: 8,
    color: 'black',
  },
  countersLabel: {
    fontWeight: '300',
    fontSize: 12,
  },
  descriptionLink: {
    color: 'blue',
  },
});
