import { colors } from "@/constants/theme";
import { BRAND, CREDITS, USER_NAME } from "@/constants/data";
import {
  Bell,
  ChevronRight,
  CirclePlus,
  CircleQuestionMark,
  FileText,
  Globe,
  Image as ImageIcon,
  Lock,
  LogOut,
  Moon,
  Star,
} from "lucide-react-native";
import { router } from "expo-router";
import { useState } from "react";
import { Appearance, Pressable, ScrollView, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "@/components/Card";
import MiniSwitch from "@/components/MiniSwitch";
import SettingsGroup from "@/components/SettingsGroup";
import SettingsRow from "@/components/SettingsRow";
import ThemeToggle from "@/components/ThemeToggle";

// Placeholder profile data (swap for real user data later)
const USER_INITIALS = "SF";
const USER_EMAIL = "sufyan@krowlabs.com";

const Settings = () => {
  const isDark = useColorScheme() === "dark";
  const DARK_BG = "#0a1020";

  const [notifications, setNotifications] = useState(true);

  // react-native-web has no Appearance.setColorScheme, so guard the call.
  const toggleTheme = () => Appearance.setColorScheme?.(isDark ? "light" : "dark");

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: isDark ? DARK_BG : colors.background }}
      edges={["top"]}
    >
      <ScrollView
        contentContainerClassName="gap-[22px] px-5 pb-40 pt-4"
        showsVerticalScrollIndicator={false}
      >
        {/* Heading */}
        <View>
          <Text className="font-sans-extrabold text-[28px] tracking-tight text-primary-dark dark:text-[#f3f5fb]">
            Settings
          </Text>
          <Text className="mt-1 font-sans text-[13px] text-muted-foreground dark:text-[#a9b3cc]">
            Manage your account, brand and preferences.
          </Text>
        </View>

        {/* Profile */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Edit profile"
          onPress={() => console.log("open profile")}
        >
          <Card className="flex-row items-center gap-3 p-3.5">
            <View className="size-13 items-center justify-center rounded-full bg-primary-dark">
              <Text className="font-sans-bold text-base text-on-dark">{USER_INITIALS}</Text>
            </View>
            <View className="flex-1">
              <View className="flex-row items-center gap-2">
                <Text className="font-sans-bold text-base text-foreground dark:text-[#f3f5fb]">
                  {USER_NAME}
                </Text>
                <View className="rounded-full bg-success/15 px-2 py-0.75">
                  <Text className="font-sans-bold text-[10px] text-success">{CREDITS.plan}</Text>
                </View>
              </View>
              <Text className="mt-0.5 font-sans text-xs text-muted-foreground dark:text-[#a9b3cc]">
                {USER_EMAIL}
              </Text>
            </View>
            <ChevronRight size={18} color={isDark ? "#a9b3cc" : colors.mutedForeground} />
          </Card>
        </Pressable>

        {/* Current plan */}
        <View className="flex-row items-center justify-between gap-3 rounded-[20px] border border-transparent bg-primary-dark p-4 dark:border-white/10">
          <View>
            <Text className="font-sans text-xs text-on-dark-muted">Current plan</Text>
            <Text className="mt-0.5 font-sans-bold text-lg text-on-dark">{CREDITS.plan}</Text>
            <View className="mt-1.5 flex-row items-center gap-1.5">
              <View className="size-3.5 rounded-full bg-accent" />
              <Text className="font-sans text-xs text-on-dark-muted">
                {CREDITS.used}/{CREDITS.limit} credits
              </Text>
            </View>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Manage plan"
            onPress={() => router.navigate("/pricing")}
            className="min-h-11 justify-center rounded-full bg-accent px-4.5 active:opacity-80"
          >
            <Text className="font-sans-bold text-[13px] text-primary-dark">Manage plan</Text>
          </Pressable>
        </View>

        {/* Appearance */}
        <SettingsGroup title="Appearance">
          <SettingsRow
            icon={Moon}
            label="Dark mode"
            right={<ThemeToggle isDark={isDark} onToggle={toggleTheme} />}
          />
          <SettingsRow
            icon={ImageIcon}
            label="Default export quality"
            value="High"
            onPress={() => console.log("export quality")}
          />
        </SettingsGroup>

        {/* Brand */}
        <SettingsGroup title="Brand">
          <SettingsRow
            icon={Star}
            label={BRAND.name}
            value="Active"
            onPress={() => console.log("open brand kit")}
          />
          <SettingsRow
            icon={CirclePlus}
            label="Create a new brand kit"
            onPress={() => console.log("new brand kit")}
          />
        </SettingsGroup>

        {/* Preferences */}
        <SettingsGroup title="Preferences">
          <SettingsRow
            icon={Bell}
            label="Notifications"
            right={
              <MiniSwitch
                label="Notifications"
                value={notifications}
                onValueChange={setNotifications}
              />
            }
          />
          <SettingsRow
            icon={Globe}
            label="Language"
            value="English"
            onPress={() => console.log("language")}
          />
          <SettingsRow
            icon={Lock}
            label="Privacy & security"
            onPress={() => console.log("privacy")}
          />
        </SettingsGroup>

        {/* Support */}
        <SettingsGroup title="Support">
          <SettingsRow
            icon={CircleQuestionMark}
            label="Help center"
            onPress={() => console.log("help")}
          />
          <SettingsRow
            icon={FileText}
            label="Terms & privacy policy"
            onPress={() => console.log("terms")}
          />
        </SettingsGroup>

        {/* Log out */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Log out"
          onPress={() => console.log("log out")}
        >
          <Card className="min-h-13 flex-row items-center justify-center gap-2">
            <LogOut size={18} color={colors.destructive} />
            <Text className="font-sans-bold text-sm text-destructive">Log out</Text>
          </Card>
        </Pressable>

        <Text className="text-center font-sans text-[11px] text-muted-foreground dark:text-[#a9b3cc]">
          Replix AI · v1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;