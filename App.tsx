import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = "bg-neutral-300 dark:bg-slate-900"

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <View className="flex-1 bg-white">
      {/* Header */}
      <View className="p-4 bg-black">
        <Text className="text-white text-lg font-bold">Joe's App</Text>
      </View>
      
      {/* Horizontal Scroll of Cards */}
      <ScrollView horizontal={true} className="mt-4 px-4">
        {/* Card 1 */}
        <View className="bg-gray-200 w-64 mr-4 p-4 rounded-lg">
          <Text className="text-lg font-bold mb-2">Card 1 Title</Text>
          <Text className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
        
        {/* Card 2 */}
        <View className="bg-gray-200 w-64 mr-4 p-4 rounded-lg">
          <Text className="text-lg font-bold mb-2">Card 2 Title</Text>
          <Text className="text-gray-700">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </View>
        
        {/* Card 3 */}
        <View className="bg-gray-200 w-64 mr-4 p-4 rounded-lg">
          <Text className="text-lg font-bold mb-2">Card 3 Title</Text>
          <Text className="text-gray-700">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </View>
      </ScrollView>
    </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
