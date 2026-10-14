import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function Dashboard() {
    return (
        <SafeAreaView className="flex-1">
            <Text className="text-xl bg-yellow-300">Dashboard</Text>
        </SafeAreaView>
    );
}