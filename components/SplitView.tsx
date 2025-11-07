import { FlatList, StyleSheet, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { ImageCard } from "./ImageCard";
import DownloadPicture from "@/components/DownloadPicture";

export default function SplitView({ wallpapers }: { wallpapers: Wallpaper[] }) {

  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);

  return <>
    <ThemedView style={styles.container}>
      <ThemedView style={styles.innerContainer}>
        <FlatList
          data={wallpapers.filter((_, index) => index % 2 === 0)}
          renderItem={({ item }) => <View style={styles.imageContainer}>
            <ImageCard wallpaper={item} onPress={() => setSelectedWallpaper(item)} />
          </View>}
          keyExtractor={item => item.name}
        />
      </ThemedView>
      <ThemedView style={styles.innerContainer}>
        <FlatList
          data={wallpapers.filter((_, index) => index % 2 === 1)}
          renderItem={({ item }) => <View style={styles.imageContainer}>
            <ImageCard wallpaper={item} onPress={() => setSelectedWallpaper(item)} />
          </View>}
          keyExtractor={item => item.name}
        />
      </ThemedView>
    </ThemedView>
    {selectedWallpaper && <DownloadPicture
      wallpaper={selectedWallpaper}
      onClose={() => setSelectedWallpaper(null)}
    />}
  </>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    paddingVertical: 10,
  }
});
