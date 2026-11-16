import { Text, View } from "react-native";
import ThemeToggle from "@/components/ThemeToggle";
import useAppTheme from "@/hooks/useAppTheme";

/** Top bar used on every screen: optional left content/title + theme toggle pinned top-right. */
export default function ScreenHeader({ title, left }: { title?: string; left?: React.ReactNode }) {
  const { isDark, toggleTheme } = useAppTheme();

  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-1 flex-row items-center gap-2">
        {left}
        {title ? (
          <Text className="font-sans-bold text-[19px] text-primary-dark dark:text-[#f3f5fb]">{title}</Text>
        ) : null}
      </View>
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
    </View>
  );
}