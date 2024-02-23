// Card.tsx

import React from 'react';
import { Text, View } from 'react-native';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <View className="bg-gray-200 w-64 mr-5 p-4 rounded-md">
      <Text className="text-black text-lg font-bold mb-2">{title}</Text>
      <Text className="text-black">{description}</Text>
    </View>
  );
};

export default Card;
