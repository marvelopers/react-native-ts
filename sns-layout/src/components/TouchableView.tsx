import React, { ComponentProps } from 'react';
import type { ReactNode } from 'react';
import { TouchableOpacity, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

type TouchableOpacityProps = ComponentProps<typeof TouchableOpacity>;

export type TouchableViewProps = TouchableOpacityProps & {
  children?: ReactNode;
  viewStyle?: StyleProp<ViewStyle>;
};

const TouchableView = ({ children, viewStyle, ...touchableProps }: TouchableViewProps) => {
  return (
    <TouchableOpacity {...touchableProps}>
      <View style={viewStyle}>{children}</View>
    </TouchableOpacity>
  );
};

export default TouchableView;
