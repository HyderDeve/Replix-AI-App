import { colors } from "@/constants/theme";
import { ChevronRight, type LucideIcon } from "lucide-react-native";
import { Pressable, Text, useColorScheme, View } from "react-native";

const SettingsRow = ({ icon: Icon, label, value, right, onPress }: SettingsRowProps) => {
  const isDark = useColorScheme() === "dark";
  const muted = isDark ? "#a9b3cc" : colors.mutedForeground;

  const content = (
    <>
      <View className="size-9 items-center justify-center rounded-full bg-muted dark:bg-[#1b2647]">
        <Icon size={20} color={isDark ? "#8fb4ff" : colors.primary} />
      </View>

      <Text className="flex-1 font-sans-semibold text-sm text-foreground dark:text-[#f3f5fb]">
        {label}
      </Text>

      {value ? (
        <Text className="font-sans text-xs text-muted-foreground dark:text-[#a9b3cc]">
          {value}
        </Text>
      ) : null}

      {right ?? <ChevronRight size={18} color={muted} />}
    </>
  );

  // Rows that hold their own control (switch/toggle) are not tappable as a whole.
  if (right) {
    return <View className="min-h-14 flex-row items-center gap-3 px-3.5 py-2.5">{content}</View>;
  }

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      className="min-h-14 flex-row items-center gap-3 px-3.5 py-2.5 active:opacity-70"
    >
      {content}
    </Pressable>
  );
};

export default SettingsRow;