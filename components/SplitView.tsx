import { FlatList, StyleSheet, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { ImageCard } from "./ImageCard";
import DownloadPicture from "@/components/DownloadPicture";

export default function SplitView({ wallpapers, onScroll }: {
  wallpapers: Wallpaper[];
  onScroll?: (yOffset: number) => void;
}) {

  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);

  // Pair wallpapers to show two at a time instead of rendering two separate 
  // scroll views and then trying to keep them in sync
  const wallpaperPairs = wallpapers.reduce<Wallpaper[][]>((result, curr, index, arr) => {
    if (index % 2 === 0) {
      result.push([curr, arr[index + 1]]);
    }
    return result;
  }, []);

  return <>
    <FlatList
      onScroll={(e) => {
        // TODO
      }}
      data={wallpaperPairs}
      renderItem={({ item: [first, second] }) => <ThemedView style={styles.container}>
        <ThemedView style={styles.innerContainer}>
          <View style={styles.imageContainer}>
            <ImageCard
              onPress={() => { setSelectedWallpaper(first) }}
              wallpaper={first}
            />
          </View>
        </ThemedView>
        <ThemedView style={styles.innerContainer}>
          <View>
            {second &&
              <View style={styles.imageContainer}>
                <ImageCard
                  wallpaper={second}
                  onPress={() => {
                    setSelectedWallpaper(second)
                  }}
                />
              </View>
            }
          </View>
        </ThemedView>
      </ThemedView>}
      keyExtractor={item => item[0].name}
    />
    {selectedWallpaper &&
      <DownloadPicture
        wallpaper={selectedWallpaper}
        onClose={() => setSelectedWallpaper(null)}
      />
    }
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
