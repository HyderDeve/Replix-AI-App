import Card from "@/components/Card";
import { Children, type ReactNode } from "react";
import { Text, View } from "react-native";

const SettingsGroup = ({ title, children }: { title: string; children: ReactNode }) => {
  const rows = Children.toArray(children);

  return (
    <View className="gap-2.5">
      <Text className="font-sans-bold text-xl text-primary dark:text-[#8fb4ff]">{title}</Text>
      <Card className="overflow-hidden">
        {rows.map((row, index) => (
          <View key={index}>
            {index > 0 ? <View className="h-px bg-border dark:bg-white/10" /> : null}
            {row}
          </View>
        ))}
      </Card>
    </View>
  );
};

export default SettingsGroup;