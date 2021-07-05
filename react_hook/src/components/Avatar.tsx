import React from 'react';
import { Image } from 'react-native';
import type { StyleProp, ImageStyle } from 'react-native';
import TouchableView from './TouchableView';
import type { TouchableViewProps } from './TouchableView';

export type AvatarProps = TouchableViewProps & {
  uri: string;
  size: number;
  imageStyle?: StyleProp<ImageStyle>;
};

const Avatar = ({ uri, size, imageStyle, ...touchableViewProps }: AvatarProps) => {
  return (
    <TouchableView {...touchableViewProps}>
      <Image
        source={{ uri }}
        style={[imageStyle, { width: size, height: size, borderRadius: size / 2 }]}
      />
    </TouchableView>
  );
};

export default Avatar;
