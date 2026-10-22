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
    
    interface UploadBoxProps {
    image: ImageSourcePropType; // picture shown in the tilted frame
    icon: ImageSourcePropType; // icon shown to the LEFT of the button text
    title?: string;
    subtitle?: string;
    buttonLabel?: string;
    onPress: () => void;
    };

    interface UrlBoxProps {
    image: ImageSourcePropType; // picture shown in the tilted frame
    value: string;
    onChangeText: (text: string) => void;
    onPaste: () => void;
    onAnalyze: () => void;
    title?: string;
    placeholder?: string;
    buttonLabel?: string;
    };

}

export {};