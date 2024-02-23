// IconBox.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee'; // Import specific FontAwesome icon

interface IconBoxProps {
  title: string;
  description: string;
}

const IconBox: React.FC<IconBoxProps> = ({ title, description }) => {
  return (
    <View className="mb-5 mr-2">
      <FontAwesomeIcon icon={faCoffee} size={ 32 } color={ 'indigo' } />
        <Text className="text-black text-lg font-bold mb-2">{title}</Text>
        <Text className="text-black">{description}</Text>
    </View>
  );
};

export default IconBox;