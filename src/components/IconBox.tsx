// IconBox.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee'; // Import specific FontAwesome icon

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledIcon = styled(FontAwesomeIcon)


interface IconBoxProps {
  title: string;
  description: string;
}

const IconBox: React.FC<IconBoxProps> = ({ title, description }) => {
  return (
    <StyledView className="mb-5 mr-2">
      <StyledIcon icon={faCoffee} size={ 32 } color={ 'indigo' } />
        <StyledText className="text-black text-lg font-bold mb-2">{title}</StyledText>
        <StyledText className="text-black">{description}</StyledText>
    </StyledView>
  );
};

export default IconBox;