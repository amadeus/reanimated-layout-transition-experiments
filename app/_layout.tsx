import {useState, useCallback} from 'react';
import {Image, StyleSheet, Platform, View, Pressable, Text} from 'react-native';
import Reanimated, {type ExitAnimationsValues, withTiming} from 'react-native-reanimated';

import {HelloWave} from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  box: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 300,
    height: 100,
  },
  buttonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    bottom: 100,
    width: '45%',
    paddingHorizontal: 10,
    height: 50,
    marginTop: 80,
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});

export default function HomeScreen() {
  const [showElement, setShowElement] = useState(true);
  const [disableExiting, setDisableExiting] = useState(false);
  const exiting = useCallback(
    (values: ExitAnimationsValues) => {
      'worklet';
      if (disableExiting) {
        return {
          animations: {
            height: 10,
            opacity: 0.1,
          },
          initialValues: {
            height: values.currentHeight,
            opacity: 1,
          },
        };
      } else {
        return {
          animations: {
            height: withTiming(10, {duration: 300}),
            opacity: 0.1,
          },
          initialValues: {
            height: values.currentHeight,
            opacity: 1,
          },
        };
      }
    },
    [disableExiting]
  );
  return (
    <View style={styles.wrapper}>
      {showElement && <Reanimated.View style={styles.box} exiting={exiting} />}
      <View style={styles.buttonWrapper}>
        <Pressable onPress={() => setShowElement(!showElement)} style={styles.button}>
          <Text style={styles.text}>Toggle Element</Text>
        </Pressable>
        <Pressable onPress={() => setDisableExiting(!disableExiting)} style={styles.button}>
          <Text style={styles.text}>Animation {disableExiting ? 'Off' : 'On'}</Text>
        </Pressable>
      </View>
    </View>
  );
}
