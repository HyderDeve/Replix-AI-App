import ButtonHeading from "@/components/ButtonHeading"
import { View } from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"
export default function Upload() {
    return (
        <SafeAreaView>
            <View className="mb-5">

                <ButtonHeading title="Upload"/>
            </View>
        </SafeAreaView>
    )
}