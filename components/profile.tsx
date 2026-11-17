import { colors } from "@/constants/theme";
import useAppTheme from "@/hooks/useAppTheme";
import { ChevronRight } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

import Card from "@/components/Card";

/** "Sufyan Farooq" -> "SF", "sufyan" -> "S" */
export const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("") || "?";

/** Round profile picture; falls back to initials when there is no image. */
export const Avatar = ({
  name,
  imageUri,
  size = 52,
}: {
  name: string;
  imageUri?: string;
  size?: number;
}) => (
  <View
    className="items-center justify-center overflow-hidden rounded-full bg-primary-dark"
    style={{ width: size, height: size }}
  >
    {imageUri ? (
      <Image
        source={{ uri: imageUri }}
        accessibilityLabel={`${name} profile picture`}
        style={{ width: size, height: size }}
        resizeMode="cover"
      />
    ) : (
      <Text
        className="font-sans-bold text-on-dark"
        style={{ fontSize: Math.round(size * 0.31) }}
      >
        {getInitials(name)}
      </Text>
    )}
  </View>
);

const Profile = ({ name, email, plan, imageUri, onPress }: ProfileProps) => {
  const { isDark } = useAppTheme();

  const content = (
    <Card className="flex-row items-center gap-3 p-3.5">
      <Avatar name={name} imageUri={imageUri} />

      <View className="flex-1">
        <View className="flex-row items-center gap-2">
          <Text
            numberOfLines={1}
            className="shrink font-sans-bold text-base text-foreground dark:text-[#f3f5fb]"
          >
            {name}
          </Text>
          <View className="rounded-full bg-success/15 px-2 py-0.75">
            <Text className="font-sans-bold text-[10px] text-success">{plan}</Text>
          </View>
        </View>
        <Text
          numberOfLines={1}
          className="mt-0.5 font-sans text-xs text-muted-foreground dark:text-[#a9b3cc]"
        >
          {email}
        </Text>
      </View>

      {onPress ? (
        <ChevronRight size={18} color={isDark ? "#a9b3cc" : colors.mutedForeground} />
      ) : null}
    </Card>
  );

  if (!onPress) return content;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Edit profile"
      onPress={onPress}
      className="active:opacity-80"
    >
      {content}
    </Pressable>
  );
};

export default Profile;
