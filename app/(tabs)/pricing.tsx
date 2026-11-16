import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PLANS } from "@/constants/data";
import { PlanCard } from "@/components/PlanCard";
import ScreenHeader from "@/components/ScreenHeader";
import useAppTheme from "@/hooks/useAppTheme";


const Pricing = () => {

  const { background } = useAppTheme();

  const handleSelectPlan = (id: string) => {
    // TODO: placeholder: wire this to checkout later
    console.log("Selected plan:", id);
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: background }} edges={["top"]}>
      <ScrollView contentContainerClassName="px-5 pb-40 pt-4" showsVerticalScrollIndicator={false}>
        <ScreenHeader />
        <Text className="mb-6 mt-4 text-2xl font-medium text-primary-dark dark:text-[#f3f5fb]">Pricing Plans</Text>

        <View className="gap-8">
          {PLANS.map((plan) => (
            <PlanCard 
            key={plan.id} 
            plan={plan} 
            onPress={() => handleSelectPlan(plan.id)} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pricing;