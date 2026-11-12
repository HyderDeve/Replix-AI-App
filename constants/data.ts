import {icons} from "./icons";
import adScene1 from "@/assets/ad-scene-1.jpg";
import adScene2 from "@/assets/ad-scene-2.jpg";
import adScene3 from "@/assets/ad-scene-3.jpg";
import chocolateRaspberry from "@/assets/product-chocolate-raspberry.jpg";
import cookieDough from "@/assets/product-cookie-dough.jpg";
import whiteMocha from "@/assets/product-white-mocha.jpg";


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


export const USER_NAME = "Sufyan";
export const BRAND = { initials: "KL", name: "Krow Labs" };
export const CREDITS = { used: 1818, limit: 100, plan: "Pro" };

export const STUDIOS: Studio[] = [
  {
    id: "photo",
    title: "Photo Studio",
    description: "Product photoshoots from templates or your own scene.",
    image: chocolateRaspberry,
  },
  {
    id: "ad",
    title: "Ad Studio",
    description: "Static ad creatives from one product.",
    image: adScene1,
  },
  {
    id: "video",
    title: "Video Studio",
    description: "UGC ads, product shorts and story ads.",
  },
];


export const RECENTS: Recent[] = [
  { id: "1", type: "Ad", name: "Ad scene 1", image: adScene1 },
  { id: "2", type: "Photo", name: "White mocha", image: whiteMocha },
  { id: "3", type: "Ad", name: "Ad scene 2", image: adScene2 },
  { id: "4", type: "Photo", name: "Choc raspberry", image: chocolateRaspberry },
  { id: "5", type: "Photo", name: "Cookie dough", image: cookieDough },
  { id: "6", type: "Ad", name: "Ad scene 3", image: adScene3 },
];
