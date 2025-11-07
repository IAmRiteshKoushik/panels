import SplitView from '@/components/SplitView';
import {
  useLibraryWallpapers,
  useLikedWallpapers,
  useSuggestedwallpapers,
} from '@/hooks/useWallpapers';
import {
  createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';
import { StyleSheet, useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {

  const theme = useColorScheme() ?? 'light';

  // As the tab bar does not respect the SafeArea, we need to use manual 
  // CSS tinkering to fix it. For this, we are adding a padding to the top 
  // but the value of it comes from the useHook() provided by the same lib
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: insets.top,
          backgroundColor: 'white',
        }
      }}
    >
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
    </Tab.Navigator>
  );
}

function LibraryScreen() {

  const wallpapers = useLibraryWallpapers();

  return <ThemedView style={styles.container}>
    <SplitView wallpapers={wallpapers} />
  </ThemedView>
}

function LikedScreen() {

  const wallpapers = useLikedWallpapers();

  return <ThemedView style={styles.container}>
    <SplitView wallpapers={wallpapers} />
  </ThemedView>
}

function SuggestedScreen() {

  const wallpapers = useSuggestedwallpapers();

  return <ThemedView style={styles.container}>
    <SplitView wallpapers={wallpapers} />
  </ThemedView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
