import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers } from "@/hooks/useWallpapers";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SplitView from "@/components/SplitView";

export default function Explore() {

  const insets = useSafeAreaInsets();
  const wallpapers = useWallpapers();

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{ uri: wallpapers[0]?.url ?? "" }} />
        }>
        <SplitView wallpapers={wallpapers} />
      </ParallaxScrollView>
    </View>
  );
}
