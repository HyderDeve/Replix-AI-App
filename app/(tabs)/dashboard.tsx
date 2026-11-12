import { colors } from "@/constants/theme";
import { Appearance, Pressable, ScrollView, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { USER_NAME, BRAND, CREDITS, STUDIOS, RECENTS } from '@/constants/data';

import Card from '@/components/Card';
import StudioCard from '@/components/StudioCard';
import RecentTile from "@/components/RecentTile";
import ThemeToggle from "@/components/ThemeToggle";



const Dashboard = () => {

  const isDark = useColorScheme() === "dark";
  const toggleTheme = () => Appearance.setColorScheme(isDark ? "light" : "dark");
  const DARK_BG = "#0a1020";

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
        {/* Header */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <View className="size-7.5 items-center justify-center rounded-[9px] bg-primary-dark">
              <Text className="font-sans-extrabold text-base text-on-dark">R</Text>
            </View>
            <Text className="font-sans-bold text-[19px] text-primary-dark dark:text-[#f3f5fb]">
              Replix AI
            </Text>
          </View>
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </View>

        {/* Greeting */}
        <View>
          <Text className="font-sans-extrabold text-[28px] tracking-tight text-primary-dark dark:text-[#f3f5fb]">
            Dashboard
          </Text>
          <Text className="mt-1 font-sans text-[13px] text-muted-foreground dark:text-[#a9b3cc]">
            Good morning, {USER_NAME} — what are we making today?
          </Text>
        </View>

        {/* Brand kit + credits */}
        <View className="flex-row gap-2.5">
          <Card className="flex-1 flex-row items-center gap-2.5 px-3.5 py-3">
            <View className="size-8 items-center justify-center rounded-full bg-muted dark:bg-[#1b2647]">
              <Text className="font-sans-bold text-[11px] text-foreground dark:text-[#f3f5fb]">
                {BRAND.initials}
              </Text>
            </View>
            <View>
              <Text className="font-sans text-[11px] text-muted-foreground dark:text-[#a9b3cc]">
                Brand kit
              </Text>
              <Text className="font-sans-bold text-[13px] text-foreground dark:text-[#f3f5fb]">
                {BRAND.name}
              </Text>
            </View>
          </Card>
          <Card className="flex-row items-center gap-2 px-3.5 py-3">
            <View className="size-4.5 rounded-full bg-accent" />
            <Text className="font-sans-bold text-[13px] text-foreground dark:text-[#f3f5fb]">
              {CREDITS.used}/{CREDITS.limit}
            </Text>
            <View className="rounded-full bg-success/15 px-2 py-0.75">
              <Text className="font-sans-bold text-[10px] text-success">
                {CREDITS.plan}
              </Text>
            </View>
          </Card>
        </View>

        {/* Create */}
        <View className="gap-2.5">
          <Text className="font-sans-bold text-xl text-primary dark:text-[#8fb4ff]">
            Create
          </Text>
          {STUDIOS.map((studio) => (
            <StudioCard key={studio.id} studio={studio} />
          ))}
        </View>

        {/* Recent generations */}
        <View className="gap-2.5">
          <View className="flex-row items-center justify-between">
            <Text className="font-sans-bold text-xl text-primary dark:text-[#8fb4ff]">
              Recent generations
            </Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="View all recent generations"
              className="rounded-full border border-border px-3.5 py-1.5 dark:border-white/10"
            >
              <Text className="font-sans-semibold text-[13px] text-primary dark:text-[#8fb4ff]">
                View all
              </Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="gap-2.5"
            style={{ marginHorizontal: -20 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {RECENTS.map((item) => (
              <RecentTile key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Dashboard;