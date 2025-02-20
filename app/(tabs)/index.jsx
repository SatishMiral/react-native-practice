import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Platform , View, Text} from 'react-native';
import HomeScreen from "./screens/HomeScreen"

export default function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <HomeScreen />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
});
