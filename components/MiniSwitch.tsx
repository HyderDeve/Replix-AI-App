import { Pressable, View } from "react-native";


const MiniSwitch = ({ value, onValueChange, label }: MiniSwitchProps) => (
  <Pressable
    accessibilityRole="switch"
    accessibilityLabel={label}
    accessibilityState={{ checked: value }}
    onPress={() => onValueChange(!value)}
    hitSlop={8}
    className={`h-6.5 w-11 justify-center rounded-full px-0.75 ${
      value ? "bg-accent" : "bg-muted dark:bg-[#1b2647]"
    }`}
  >
    <View
      className={`size-5 rounded-full bg-white ${value ? "self-end" : "self-start"}`}
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
        elevation: 2,
      }}
    />
  </Pressable>
);

export default MiniSwitch;