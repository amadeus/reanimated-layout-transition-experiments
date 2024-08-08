import {useState} from 'react';
import {Image, StyleSheet, Platform, View, Pressable, Text} from 'react-native';
import Reanimated, {LinearTransition} from 'react-native-reanimated';

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
  animatedBox: {
    backgroundColor: 'red',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    padding: 4,
  },
  stateA: {
    top: 0,
    width: 100,
    height: 100,
  },
  stateB: {
    width: 300,
    height: 200,
  },
  leftBox: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  rightBox: {
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  child: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'black',
  },
  childMarginA: {
    margin: 4,
  },
  childMarginB: {
    margin: 2,
  },
  button: {
    position: 'absolute',
    bottom: 100,
    width: 100,
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
  bufferBox: {
    width: 100,
    height: 20,
    marginTop: 40,
    backgroundColor: 'green',
  },
});

const transition = LinearTransition.springify().mass(0.5).damping(10).stiffness(100);

export default function HomeScreen() {
  const [state, setState] = useState(false);
  return (
    <View style={styles.wrapper}>
      <Reanimated.View style={[styles.animatedBox, state ? styles.stateB : styles.stateA]} layout={transition}>
        <Reanimated.View
          style={[styles.leftBox, styles.child, state ? styles.childMarginB : styles.childMarginA]}
          layout={transition}
        />
        <Reanimated.View
          style={[styles.rightBox, styles.child, state ? styles.childMarginB : styles.childMarginA]}
          layout={transition}
        />
      </Reanimated.View>
      <Reanimated.View style={styles.bufferBox} layout={transition} />
      <Pressable onPress={() => setState(!state)} style={styles.button}>
        <Text style={styles.text}>Toggle</Text>
      </Pressable>
    </View>
  );
}
