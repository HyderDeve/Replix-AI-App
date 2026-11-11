import { View } from "react-native";


const Card = ({className = "", children}: {className?: string; children: React.ReactNode;}) => (
  
  <View
    className={`rounded-[20px] border border-border bg-card dark:border-white/10 dark:bg-[#131c36] ${className}`}
  >
    {children}
  </View>
);

export default Card;