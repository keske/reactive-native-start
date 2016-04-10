import { StyleSheet } from 'react-native';

// Vars
const textPadding = 2;

export const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginRight: 5,
    paddingTop: textPadding,
    paddingBottom: textPadding,
  },
  value: {
    paddingTop: textPadding,
    paddingBottom: textPadding,
  },
});

export default styles;
