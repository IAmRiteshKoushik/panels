import React, { useCallback, useRef } from 'react';
import {
  StyleSheet,
  useColorScheme,
  Image,
  Pressable,
  Text,
  View
} from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export const DownloadPicture = ({ onClose, wallpaper }: {
  onClose: () => void;
  wallpaper: Wallpaper;
}) => {

  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? 'Light';

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheet
      style={{ paddingTop: 0, flex: 1 }}
      onClose={onClose}
      snapPoints={["95%"]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <ThemedView style={{ flex: 1 }}>
          <Image style={styles.image} source={{ uri: wallpaper.url }} />
          <View style={styles.topBar}>
            <Ionicons
              name={"close"}
              size={18}
              color={theme === "light" ? Colors.light.icon : Colors.dark.text}
            />
            <View style={styles.topBarInner}>
              <Ionicons
                name={"share"}
                size={18}
                color={theme === "light" ? Colors.light.icon : Colors.dark.text}
                style={{ paddingRight: 4 }}
              />
              <Ionicons
                name={"heart"}
                size={18}
                color={theme === "light" ? Colors.light.icon : Colors.dark.text}
              />
            </View>
          </View>
          <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
          </ThemedView>
          <DownloadButton />
        </ThemedView>
      </BottomSheetView>
    </BottomSheet>
  );
};

function DownloadButton() {

  const theme = useColorScheme() ?? 'light';

  return <Pressable style={{
    backgroundColor: "black",
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 40,
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme === "light" ? Colors.light.text : Colors.dark.text,
    flexDirection: "row",
  }}>
    <Ionicons
      name={"download"}
      size={24}
      color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
      style={{ paddingRight: 4 }}
    />
    <Text style={{
      fontSize: 20,
      color: "white",
      fontWeight: "600"
    }}
    >Download</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  // Deviations from the usual "heigth" property as it was not working
  image: {
    flex: 1,
    resizeMode: "cover",
    aspectRatio: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  topBar: {
    position: "absolute",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  topBarInner: {
    display: "flex",
    flexDirection: "row"
  },
  textContainer: {
    justifyContent: "center",
    display: "flex",
    width: "100%"
  },
  text: {
    paddingTop: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
  }
});

export default DownloadPicture;
