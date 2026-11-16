import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UploadBox, UrlBox } from "@/components/Upload";
import { icons } from "@/constants/icons";
import { useBottomTabBarHeight } from "expo-router/tabs";
import ScreenHeader from "@/components/ScreenHeader";
import  useAppTheme  from "@/hooks/useAppTheme";

const Upload = () => {
  
  const [url, setUrl] = useState("");
  const { background } = useAppTheme();
  const tabBarHeight = useBottomTabBarHeight();

  

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: background }} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 24,                      // space between the two cards
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: tabBarHeight + 60, // space under the last card
        }}
      >
        <ScreenHeader />
        <UploadBox
          image={require("@/assets/images/product.png")}
          icon={icons.upload}
          onPress={() => console.log("pick image")}
        />
        <UrlBox
          image={require("@/assets/images/link.png")}
          value={url}
          onChangeText={setUrl}
          onPaste={() => console.log("paste")}
          onAnalyze={() => console.log("analyze", url)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Upload;