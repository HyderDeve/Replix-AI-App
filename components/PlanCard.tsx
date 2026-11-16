import { View, Text } from "react-native";
import {Pressable} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Check } from "lucide-react-native";
import  useAppTheme  from "@/hooks/useAppTheme";

export function PlanCard({ plan, onPress }: { plan: Plan; onPress: () => void }) {
  
  const { isDark, iconColor } = useAppTheme();

  return (
    <View
      className={`rounded-3xl bg-white px-6 pb-7 pt-8 dark:bg-[#131c36] ${
    plan.popular ? "border border-primary dark:border-[#8fb4ff]" : "border border-background dark:border-white/10"
    }`}
      style={{
        shadowColor: "#0f172a",
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
      }}
    >
      {/* "Most Popular" pill overlapping the top border */}
      {plan.popular ? (
        <View className="absolute -top-3 left-0 right-0 items-center">
          <View className="rounded-full bg-primary-dark px-3 py-1">
            <Text className="text-xs font-bold text-white">Most Popular</Text>
          </View>
        </View>
      ) : null}

      {/* Header */}
      <View className="items-center">
        <Text className="text-2xl font-medium text-primary-dark dark:text-[#f3f5fb]">{plan.name}</Text>
        <Text className="mt-2 text-xs text-[#6b7a99] dark:text-[#a9b3cc]">{plan.tagline}</Text>

        <Text className="mt-6 text-3xl font-bold text-primary-dark dark:text-[#f3f5fb]">
          {plan.price}{" "}
          <Text className="text-sm font-normal text-[#6b7a99] dark:text-[#a9b3cc]">/month</Text>
        </Text>

        {/* CTA */}
        {plan.popular ?  (
          <Pressable onPress={onPress} className="mt-6 w-full overflow-hidden rounded-full active:opacity-80">
            <LinearGradient
              colors={["#3b5ba8", "#1a2550"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ paddingVertical: 14, alignItems: "center" }}
            >
              <Text className="text-sm font-semibold text-white">Start {plan.name} →</Text>
            </LinearGradient>
          </Pressable>
         ) : (
          <Pressable
            onPress={onPress}
            className="mt-6 w-full items-center rounded-full border border-background bg-white py-3.5 active:opacity-80 dark:border-white/10 dark:bg-[#1b2647]"
          >
            <Text className="text-sm font-medium text-primary-dark dark:text-[#f3f5fb]">Start {plan.name} →</Text>
          </Pressable>
         )}
      </View>

      {/* Divider */}
      <View className="my-6 h-px bg-background dark:bg-white/10" />

      {/* Features */}
      <View className="gap-4">
        {plan.features.map((feature) => (
          <View key={feature} className="flex-row items-center gap-3">
            <Check size={16} color={iconColor} />
            <Text className="flex-1 text-xs text-primary-dark dark:text-[#f3f5fb]">{feature}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}