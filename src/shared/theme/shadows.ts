import { Platform } from 'react-native';

export const cardShadow = Platform.select({
  android: {
    elevation: 2,
  },
  default: {
    shadowColor: '#55708F',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
  },
});
