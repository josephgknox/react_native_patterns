import "./src/styles/global.css";

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Card from './src/components/Card';
import IconBox from './src/components/IconBox';

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
      <ScrollView horizontal={true} className="mt-5 px-4">
      <Card 
        title="Example Card"
        description="This is an example Card component."
      />
      <Card
        title="Example Card"
        description="This is an example Card component."
      />
      <Card 
        title="Example Card"
        description="This is an example Card component."
      />
      </ScrollView>
      {/* Icon Box */}
      <View className="mt-5 px-4">
        <IconBox 
          title="Example Icon Box"
          description="This is an example Icon Box component."
        />
      </View>

    </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
