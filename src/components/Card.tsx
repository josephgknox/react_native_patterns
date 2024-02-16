// Card.tsx

import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <StyledView className="bg-gray-200 w-64 mr-4 p-4 rounded-lg">
        <StyledText className="text-lg font-bold mb-2">{title}</StyledText>
        <StyledText className="text-gray-700">{description}</StyledText>
        </StyledView>
  );
};

export default Card;
