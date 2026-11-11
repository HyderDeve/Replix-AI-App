import { Text, View, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";



const RecentTile = ({ item }: { item: Recent }) => (
  <Pressable
    accessibilityRole="button"
    accessibilityLabel={`${item.type}: ${item.name}`}
    style={{ width: 120, height: 150, borderRadius: 16, overflow: "hidden" }}
    className="bg-muted dark:bg-[#1b2647]"
  >
    <Image
      source={item.image}
      style={{ width: "100%", height: "100%" }}
      resizeMode="cover"
    />
    <LinearGradient
      colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.7)"]}
      locations={[0.45, 1]}
      style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
    />
    <View className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.75">
      <Text className="font-sans-bold text-[10px] text-foreground">
        {item.type}
      </Text>
    </View>
    <Text
      numberOfLines={1}
      className="absolute bottom-2.25 left-2.5 right-2.5 font-sans-semibold text-[11px] text-on-dark"
    >
      {item.name}
    </Text>
  </Pressable>
);

export default RecentTile;