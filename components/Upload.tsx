import { Image, type ImageSourcePropType, Text, TextInput, TouchableOpacity, View } from "react-native";
import useAppTheme from "@/hooks/useAppTheme";
/* ---------- Shared pieces ---------- */

const cardShadow = {
  shadowColor: "#0f172a",
  shadowOpacity: 0.06,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: 4 },
  elevation: 3,
};

/** Tilted rounded frame that holds the picture placeholder */
function TiltedImage({ image, rotate = "-8deg"}: { image: ImageSourcePropType; rotate?: string;}) {
  
  return (
    <View
      className="h-28 w-28 items-center justify-center rounded-3xl bg-white p-1.5 dark:bg-[#1b2647]"
      style={{ transform: [{ rotate }], ...cardShadow }}
    >
      <Image source={image} className="h-full w-full rounded-2xl" resizeMode="cover" />
    </View>
  );
}

/* ---------- Upload card ---------- */

export function UploadBox({ image, icon, title = "Upload Product Image", subtitle = "Use JPG, PNG, or WEBP (max 10 MB).", buttonLabel = "Upload Image", onPress }: UploadBoxProps) {
  
  const { iconColor } = useAppTheme();
    return (
    <View 
      className="items-center rounded-3xl border border-background bg-white px-6 pb-7 pt-8 dark:border-white/10 dark:bg-[#131c36]"
      style={cardShadow}
    >
      <TiltedImage image={image} rotate="-8deg" />

      <Text className="mt-6 text-xl font-medium text-primary-dark dark:text-[#f3f5fb]">{title}</Text>
      <Text className="mt-2 text-center text-xs text-[#6b7a99] dark:text-[#a9b3cc]">{subtitle}</Text>

      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        className="mt-6 flex-row items-center justify-center gap-2 rounded-full border border-background bg-white px-6 py-3 dark:border-white/10 dark:bg-[#1b2647]"
      >
        <Image source={icon} className="h-4 w-4" resizeMode="contain" tintColor={iconColor} />
        <Text className="text-sm font-medium text-primary-dark dark:text-[#f3f5fb]">{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

/* ---------- URL card ---------- */



export function UrlBox({ image, value, onChangeText, onPaste, onAnalyze, title = "Enter Your Product URL", placeholder = "https://yourstore.com/products/redflag", buttonLabel = "Analyze This Product" }: UrlBoxProps) {
  
  const { isDark } = useAppTheme();

  return (
    <View
      className="items-center gap-2 rounded-3xl border border-background bg-white px-6 pb-7 pt-8 dark:border-white/10 dark:bg-[#131c36]"
      style={cardShadow}
    >
      <TiltedImage image={image} rotate="10deg" />

      <Text className="mt-6 text-xl font-medium text-primary-dark dark:text-[#f3f5fb]">{title}</Text>

      {/* Input row with Paste button inside */}
      <View className="mt-5 w-full flex-row items-center rounded-full border border-background bg-white py-1.5 pl-4 pr-1.5 dark:border-white/10 dark:bg-[#1b2647]">
        <Text className="mr-2 text-xs text-[#6b7a99] dark:text-[#a9b3cc]">e.g.</Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={isDark ? "#6f7ba0" : "#9aa5bd"}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="url"
          className="flex-1 py-1.5 text-xs text-primary-dark dark:text-[#f3f5fb]"
        />
        <TouchableOpacity
          onPress={onPaste}
          activeOpacity={0.8}
          className="rounded-full bg-primary-dark px-4 py-2 dark:bg-[#8fb4ff]"
        >
          <Text className="text-xs font-semibold text-white dark:text-primary-dark">Paste</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={onAnalyze}
        activeOpacity={0.8}
        className="mt-5 items-center rounded-full border border-background bg-white px-6 py-3 dark:border-white/10 dark:bg-[#1b2647]"
      >
        <Text className="text-sm font-medium text-primary-dark dark:text-[#f3f5fb]">{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}