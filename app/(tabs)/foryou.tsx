import {
  useLibraryWallpapers,
  useLikedWallpapers,
  useSuggestedWallpapers
} from '@/hooks/useWallpapers';
import {
  createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';
import { Text, useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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

  return (
    <View>
      <Text>Library</Text>
    </View>
  );
}

function LikedScreen() {

  const wallpapers = useLikedWallpapers();

  return (
    <View>
      <Text>Liked</Text>
    </View>
  );
}

function SuggestedScreen() {

  const wallpapers = useSuggestedWallpapers();

  return (
    <View>
      <Text>Suggested</Text>
    </View>
  );
}
