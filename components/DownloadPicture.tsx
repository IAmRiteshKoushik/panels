import React, { useCallback, useRef } from 'react';
import { StyleSheet, useColorScheme, Image, Button } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';

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
      onClose={onClose}
      snapPoints={["90%"]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enableDynamicSizing={false}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image style={{ flex: 1 }} source={{ uri: wallpaper.url }} />
        <Button title="Download"></Button>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

export default DownloadPicture;
