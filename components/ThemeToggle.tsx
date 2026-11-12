import { Moon, Sun } from "lucide-react-native";
import { useEffect } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { Pressable, View } from "react-native";
import { colors } from "@/constants/theme";

/* ---------- Theme toggle ---------- */

const TRACK_TRAVEL = 22;

export default function ThemeToggle({ isDark, onToggle }: { isDark: boolean; onToggle: () => void; }) {

  const x = useSharedValue(isDark ? TRACK_TRAVEL : 0);

  useEffect(() => {
    x.value = withTiming(isDark ? TRACK_TRAVEL : 0, { duration: 200 });
  }, [isDark, x]);

  const knobStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }],
  }));

  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityLabel="Dark mode"
      accessibilityState={{ checked: isDark }}
      onPress={onToggle}
      hitSlop={8}
      className="h-7.5 w-13 justify-center rounded-full border border-border bg-muted dark:border-white/10 dark:bg-[#1b2647]"
    >
      <View className="absolute left-1.75">
        <Sun size={16} color={isDark ? "#a9b3cc" : colors.mutedForeground} />
      </View>
      <View className="absolute right-1.75">
        <Moon size={16} color={isDark ? "#a9b3cc" : colors.mutedForeground} />
      </View>
      <Animated.View
        style={[
          {
            width: 24,
            height: 24,
            marginLeft: 2,
            borderRadius: 12,
            backgroundColor: colors.accent,
            alignItems: "center",
            justifyContent: "center",
          },
          knobStyle,
        ]}
      >
        {isDark ? (
          <Moon size={14} color={colors.primaryDark} />
        ) : (
          <Sun size={14} color={colors.primaryDark} />
        )}
      </Animated.View>
    </Pressable>
  );
}