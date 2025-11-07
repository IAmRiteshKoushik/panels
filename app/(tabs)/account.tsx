import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Text,
  Pressable,
  View,
  StyleSheet,
  Appearance,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Account() {

  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <ThemedView style={{ flex: 1 }}>
        <Header />
        <ThemedView style={{ flex: 1 }}>
          <LoginButtons />
          <ThemeSelector />
        </ThemedView>
      </ThemedView>
    </View>
  );
}

function ThemeSelector() {
  return <View style={styles.margin}>
    <ThemedText style={styles.textBig}>Settings</ThemedText>
    <ThemedText>Theme</ThemedText>
    <View style={styles.themeSelectorContainer}>
      <ThemeButton
        title={"Dark"}
        selected={false}
        colorScheme="dark"
      />
      <ThemeButton
        title={"Light"}
        selected={false}
        colorScheme="light"
      />
      <ThemeButton
        title={"System"}
        selected={false}
        colorScheme={null}
      />
    </View>
  </View>
}

function ThemeButton({ title, selected, colorScheme }: {
  title: string,
  selected: boolean,
  colorScheme: "dark" | "light" | null
}) {

  const theme = useColorScheme() ?? 'light';

  return <Pressable style={{
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme === 'light' ? Colors.light.text : Colors.dark.text,
    flex: 0.3,
    alignContent: "center"
  }}
    onPress={() => {
      Appearance.setColorScheme(colorScheme)
    }}>
    <ThemedText style={{ textAlign: "center" }}>{title}</ThemedText>
  </Pressable>
}

function LoginButtons() {
  const theme = useColorScheme() ?? 'light';

  return <View>
    <AuthButton
      label={"Sign In via Google"}
      icon={
        <Ionicons
          name={'logo-google'}
          size={24}
          color={theme === "light" ? Colors.light.text : Colors.dark.text}
        />}
    />
    <AuthButton
      label={"Sign In via Apple"}
      icon={
        <Ionicons
          name={'logo-apple'}
          size={24}
          color={theme === "light" ? Colors.light.text : Colors.dark.text}
        />}
    />
  </View>
}

function Header() {
  return <View style={styles.topBar}>
    <ThemedText style={styles.textBig}>Panels</ThemedText>
    <ThemedText>Sign in to save your data</ThemedText>
  </View>
}

function AuthButton({ label, icon }: {
  label: string,
  icon: any,
}) {

  const theme = useColorScheme() ?? 'light';

  return <Pressable style={{
    backgroundColor: theme,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme === 'light' ? Colors.light.text : Colors.dark.text,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  }}>
    {icon}
    < Text style={{
      fontSize: 20,
      fontWeight: "400",
      color: theme === 'light' ? Colors.light.text : Colors.dark.text
    }}
    > {label}</Text >
  </Pressable >
}

const styles = StyleSheet.create({
  textBig: {
    fontSize: 30,
    fontWeight: "600"
  },
  topBar: {
    padding: 40,
  },
  themeSelectorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  themeSelectorChild: {
  },
  margin: {
    padding: 20,
  },
});
