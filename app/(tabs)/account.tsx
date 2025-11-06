import { DownloadPicture } from "@/components/DownloadPicture";
import { useState } from "react";
import { Button, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function Account() {

  const insets = useSafeAreaInsets();

  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Button title="Open Bottom Sheet" onPress={() => setPictureOpen(true)}></Button>
      {pictureOpen && <DownloadPicture onClose={() => setPictureOpen(false)} />}
    </View>
  );
}
