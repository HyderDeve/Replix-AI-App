import {icons} from "./icons";

export const tabs: AppTab[] = [
    { name: "index", title: "Home", icon: icons.home },
    { name: "pricing", title: "Pricing", icon: icons.wallet },
    { name: "upload", title: "Upload", icon: icons.upload },
    { name: "dashboard", title: "Dashboard", icon: icons.dashboard },
    { name: "settings", title: "Settings", icon: icons.setting },
];


/* ---------- Placeholder data ---------- */


export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For small Shopify brands",
    price: "$9.99",
    popular: false,
    features: [
      "30 AI generations/month",
      "All creative styles",
      "Edit captions & hooks",
      "Basic Brand DNA",
      "High-quality downloads",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For growing Shopify brands",
    price: "$29",
    popular: true,
    features: [
      "100 AI generations/month",
      "Advanced Brand DNA",
      "Multiple creative concepts",
      "Premium creative styles",
      "Full creative library",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "For brands creating ads at scale",
    price: "$59",
    popular: false,
    features: [
      "300 AI generations/month",
      "Advanced Brand DNA",
      "Multiple products",
      "Unlimited creative styles",
      "Priority support",
    ],
  },
]
