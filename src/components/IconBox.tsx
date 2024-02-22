// IconBox.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee'; // Import your desired FontAwesome icon

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
      <StyledIcon icon={faCoffee} size={ 32 } color={ 'indigo' } className="" />
      <StyledView className="">
        <StyledText className="text-lg">{title}</StyledText>
        <StyledText className="">{description}</StyledText>
      </StyledView>
    </StyledView>
  );
};

export default IconBox;