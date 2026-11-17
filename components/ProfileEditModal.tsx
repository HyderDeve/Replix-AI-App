import { colors } from "@/constants/theme";
import useAppTheme from "@/hooks/useAppTheme";
import clsx from "clsx";
import { X } from "lucide-react-native";
import { type ComponentRef, useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import { Avatar } from "@/components/Profile";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "min-h-12 rounded-2xl border border-border bg-card px-4 font-sans text-[15px] text-foreground dark:border-white/10 dark:bg-[#1b2647] dark:text-[#f3f5fb]";

/**
 * Bottom-sheet profile editor. Same keyboard strategy as recurrly's
 * SubscriptionModal: Modal > KeyboardAvoidingView > sheet > ScrollView with
 * keyboardShouldPersistTaps="handled", so the fields and the Save button
 * stay reachable while the keyboard is open.
 */
const ProfileEditModal = ({ visible, profile, onClose, onSave }: ProfileEditModalProps) => {
  const { isDark } = useAppTheme();
  const emailRef = useRef<ComponentRef<typeof TextInput>>(null);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [touched, setTouched] = useState({ name: false, email: false });

  // Re-seed the form with the saved profile every time the sheet opens, so
  // abandoned edits never leak into the next session.
  useEffect(() => {
    if (visible) {
      setName(profile.name);
      setEmail(profile.email);
      setTouched({ name: false, email: false });
    }
  }, [visible, profile.name, profile.email]);

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const isNameValid = trimmedName.length > 0;
  const isEmailValid = EMAIL_PATTERN.test(trimmedEmail);
  const isDirty = trimmedName !== profile.name || trimmedEmail !== profile.email;
  const canSave = isNameValid && isEmailValid && isDirty;

  const handleSave = () => {
    if (!canSave) {
      setTouched({ name: true, email: true });
      return;
    }
    onSave({ ...profile, name: trimmedName, email: trimmedEmail });
    onClose();
  };

  const placeholderColor = isDark ? "#a9b3cc" : "rgba(0, 0, 0, 0.4)";

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView behavior="padding" className="flex-1">
        {/* Tap the dimmed area to dismiss */}
        <Pressable className="flex-1 justify-end bg-black/40" onPress={onClose}>
          {/* Swallow taps so touching the sheet doesn't close it */}
          <Pressable
            onPress={() => {}}
            className="max-h-[90%] rounded-t-[28px] bg-background pb-8 dark:bg-[#0a1020]"
          >
            <View className="flex-row items-center justify-between px-5 pb-2 pt-5">
              <Text className="font-sans-extrabold text-xl text-primary-dark dark:text-[#f3f5fb]">
                Edit profile
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Close"
                onPress={onClose}
                className="size-9 items-center justify-center rounded-full bg-muted active:opacity-70 dark:bg-[#1b2647]"
              >
                <X size={16} color={isDark ? "#f3f5fb" : colors.primaryDark} />
              </Pressable>
            </View>

            <ScrollView
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode={Platform.OS === "ios" ? "interactive" : "on-drag"}
              showsVerticalScrollIndicator={false}
              contentContainerClassName="gap-4 px-5 pb-2 pt-3"
            >
              <View className="items-center pb-1">
                <Avatar name={trimmedName || profile.name} imageUri={profile.imageUri} size={84} />
              </View>

              <View className="gap-1.5">
                <Text className="font-sans-semibold text-[13px] text-primary-dark dark:text-[#f3f5fb]">
                  Name
                </Text>
                <TextInput
                  className={clsx(inputClass, touched.name && !isNameValid && "border-destructive")}
                  placeholder="Your name"
                  placeholderTextColor={placeholderColor}
                  value={name}
                  onChangeText={setName}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  autoCapitalize="words"
                  autoComplete="name"
                  textContentType="name"
                  returnKeyType="next"
                  submitBehavior="submit"
                  onSubmitEditing={() => emailRef.current?.focus()}
                />
                {touched.name && !isNameValid ? (
                  <Text className="font-sans text-xs text-destructive">Please enter your name.</Text>
                ) : null}
              </View>

              <View className="gap-1.5">
                <Text className="font-sans-semibold text-[13px] text-primary-dark dark:text-[#f3f5fb]">
                  Email
                </Text>
                <TextInput
                  ref={emailRef}
                  className={clsx(inputClass, touched.email && !isEmailValid && "border-destructive")}
                  placeholder="you@example.com"
                  placeholderTextColor={placeholderColor}
                  value={email}
                  onChangeText={setEmail}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="email"
                  textContentType="emailAddress"
                  returnKeyType="done"
                  onSubmitEditing={handleSave}
                />
                {touched.email && !isEmailValid ? (
                  <Text className="font-sans text-xs text-destructive">
                    Enter a valid email address.
                  </Text>
                ) : null}
              </View>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Save changes"
                accessibilityState={{ disabled: !canSave }}
                disabled={!canSave}
                onPress={handleSave}
                className={clsx(
                  "mt-2 min-h-12 items-center justify-center rounded-full bg-accent active:opacity-80",
                  !canSave && "opacity-40",
                )}
              >
                <Text className="font-sans-bold text-sm text-primary-dark">Save changes</Text>
              </Pressable>
            </ScrollView>
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ProfileEditModal;
