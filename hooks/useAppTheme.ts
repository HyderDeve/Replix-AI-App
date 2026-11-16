import { Appearance, useColorScheme } from "react-native";
import { colors } from "@/constants/theme";

export const DARK_BG = "#0a1020";
export const DARK_TEXT = "#f3f5fb";
export const DARK_MUTED_TEXT = "#a9b3cc";
export const DARK_ACCENT_TEXT = "#8fb4ff";
export const DARK_CARD = "#131c36";
export const DARK_SURFACE = "#1b2647";

/** Single source of truth for light/dark state, shared by every screen. */
const useAppTheme = () => {
  const isDark = useColorScheme() === "dark";

  // react-native-web has no Appearance.setColorScheme, so guard the call.
  const toggleTheme = () => Appearance.setColorScheme?.(isDark ? "light" : "dark");

  return {
    isDark,
    toggleTheme,
    background: isDark ? DARK_BG : colors.background,
    iconColor: isDark ? DARK_TEXT : colors.primaryDark,
  };
}
export default useAppTheme;