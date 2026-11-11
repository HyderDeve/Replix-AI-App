import { Play } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";
import { colors } from "@/constants/theme";
import Card  from '@/components/Card';

const StudioCard = ({ studio }: { studio: Studio }) => (
  <Pressable accessibilityRole="button" accessibilityLabel={studio.title}>
    <Card className="flex-row items-center gap-3 p-2.5">
      {studio.image ? (
        <Image
          source={studio.image}
          style={{ width: 84, height: 72, borderRadius: 12 }}
          resizeMode="cover"
        />
      ) : (
        <View
          style={{ width: 84, height: 72, borderRadius: 12 }}
          className="items-center justify-center bg-primary-dark"
        >
          <View className="size-8.5 items-center justify-center rounded-full bg-accent">
            <Play size={14} color={colors.primaryDark} fill={colors.primaryDark} />
          </View>
        </View>
      )}
      <View className="flex-1">
        <Text className="font-sans-bold text-[15px] text-foreground dark:text-[#f3f5fb]">
          {studio.title}
        </Text>
        <Text className="mt-0.5 font-sans text-xs leading-4.25 text-muted-foreground dark:text-[#a9b3cc]">
          {studio.description}
        </Text>
      </View>
    </Card>
  </Pressable>
);

export default StudioCard;