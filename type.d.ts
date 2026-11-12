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
   
    interface Studio {
        id: string;
        title: string;
        description: string;
        image?: ImageSourcePropType;
    }

    interface Recent {
        id: string;
        type: "Ad" | "Photo";
        name: string;
        image: ImageSourcePropType;
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

    interface MiniSwitchProps {
      value: boolean;
      onValueChange: (next: boolean) => void;
      label: string;
    };
    
    type SettingsRowProps = {
      icon: LucideIcon;
      label: string;
      value?: string; // small muted text shown before the chevron
      right?: ReactNode; // custom control (switch, toggle) instead of a chevron
      onPress?: () => void;
    };


}

export {};