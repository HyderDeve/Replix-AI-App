import "@/global.css"
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 



const App = () => {
  
  
  return (
    <SafeAreaView className="flex-1 justify-center bg-background">
      <Text className="text-xl font-bold items-center text-center text-success">
        Welcome to Nativewind!
      </Text>
    </SafeAreaView>
  );
}

export default App;