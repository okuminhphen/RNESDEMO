import { StyleSheet, View } from 'react-native';

import { colors, radius } from '@/shared/theme';

const windows = Array.from({ length: 12 }, (_, index) => index);

export function OfficeIllustration() {
  return (
    <View pointerEvents="none" style={styles.scene}>
      <View style={[styles.cloud, styles.cloudLeft]} />
      <View style={[styles.cloud, styles.cloudRight]} />
      <View style={[styles.bush, styles.bushLeft]} />
      <View style={[styles.bush, styles.bushCenter]} />
      <View style={[styles.bush, styles.bushRight]} />
      <View style={styles.buildingBack} />
      <View style={styles.building}>
        <View style={styles.windows}>
          {windows.map((window) => (
            <View key={window} style={styles.window} />
          ))}
        </View>
      </View>
      <View style={styles.ground} />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    height: 126,
    width: 142,
  },
  cloud: {
    backgroundColor: 'rgba(255,255,255,0.72)',
    borderRadius: radius.pill,
    height: 12,
    position: 'absolute',
    width: 34,
  },
  cloudLeft: {
    left: 4,
    top: 24,
  },
  cloudRight: {
    right: 0,
    top: 42,
  },
  bush: {
    backgroundColor: '#58D29A',
    borderRadius: radius.pill,
    bottom: 11,
    height: 28,
    position: 'absolute',
    width: 34,
  },
  bushLeft: {
    left: 8,
  },
  bushCenter: {
    bottom: 7,
    left: 23,
  },
  bushRight: {
    right: 1,
  },
  buildingBack: {
    backgroundColor: '#B9D9FE',
    bottom: 12,
    height: 63,
    position: 'absolute',
    right: 13,
    transform: [{ rotate: '3deg' }],
    width: 43,
  },
  building: {
    backgroundColor: '#7AB8FA',
    bottom: 11,
    height: 89,
    left: 42,
    position: 'absolute',
    transform: [{ skewY: '-5deg' }],
    width: 56,
  },
  windows: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    paddingHorizontal: 9,
    paddingTop: 12,
  },
  window: {
    backgroundColor: '#DCEEFF',
    borderRadius: 2,
    height: 9,
    width: 7,
  },
  ground: {
    backgroundColor: colors.success,
    borderRadius: radius.pill,
    bottom: 6,
    height: 10,
    left: 3,
    opacity: 0.45,
    position: 'absolute',
    width: 135,
  },
});
