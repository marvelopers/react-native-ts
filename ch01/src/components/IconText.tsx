import React from 'react';
import type { ComponentProps } from 'react';
import { Text } from 'react-native';
import type { TextStyle, StyleProp } from 'react-native';
import TouchableView from './TouchableView';
import type { TouchableViewProps } from './TouchableView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type IconTextProps = TouchableViewProps &
  ComponentProps<typeof Icon> & {
    text: number | string;
    textStyle: StyleProp<TextStyle>;
  };

const IconText = ({ name, size, color, textStyle, text, ...touchableViewProps }: IconTextProps) => {
  return (
    <TouchableView {...touchableViewProps}>
      <Icon name={name} size={size} color={color} />
      <Text style={textStyle}>{text}</Text>
    </TouchableView>
  );
};

export default IconText;
