import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tint,
      // headerTitleAlign: "center",
      headerShown: false,
      tabBarButton: HapticTab,
      tabBarBackground: TabBarBackground,
      tabBarStyle: Platform.select({
        ios: {
        // Use a transparent background on iOS to show the blur effect
        position: 'absolute',
        },
        default: {},
      }),
      }}>
      <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => <Ionicons size={28} name={focused ? 'home' : 'home-outline'} color={color} />,
      }}
      />
      <Tabs.Screen
      name="contact"
      options={{
        title: 'Contact Us',
        tabBarIcon: ({ focused, color }) => (
        <Ionicons
          name={focused ? "people-circle" : "people-circle-outline"}
          size={24}
          color={color}
        />
        ),
      }}
      />
    </Tabs>
  );
}
