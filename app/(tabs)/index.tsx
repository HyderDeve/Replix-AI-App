import "@/global.css"
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "@/components/ScreenHeader";
import  useAppTheme  from "@/hooks/useAppTheme";

const App = () => {
  const { background } = useAppTheme();

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: background }} edges={["top"]}>
      <ScrollView contentContainerClassName="grow px-5 pb-40 pt-4" showsVerticalScrollIndicator={false}>
        <ScreenHeader />
        <View className="flex-1 justify-center">
          <Text className="text-center text-xl font-bold text-success">Welcome to Nativewind!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;