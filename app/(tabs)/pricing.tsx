import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PLANS } from "@/constants/data";
import { PlanCard } from "@/components/PlanCard";

/* ---------- Plan card ---------- */




const Pricing = () => {
  const handleSelectPlan = (id: string) => {
    // TODO: placeholder: wire this to checkout later
    console.log("Selected plan:", id);
  };

  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
      <ScrollView contentContainerClassName="px-5 pb-40 pt-4" showsVerticalScrollIndicator={false}>
        <Text className="mb-6 text-2xl font-medium text-primary-dark">Pricing Plans</Text>

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