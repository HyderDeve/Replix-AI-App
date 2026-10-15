import type { ImageSourcePropType } from "react-native";

declare global {
    interface AppTab {
        name: string;
        title: string;
        icon: ImageSourcePropType;
    }

    interface TabIconProps {
        focused: boolean;
        icon: ImageSourcePropType;
    }
    interface ButtonHeadingProps {
        title: string;
    }

    
    interface Plan {
    id: string;
    name: string;
    tagline: string;
    price: string;
    popular: boolean;
    features: string[];
    };
}

export {};