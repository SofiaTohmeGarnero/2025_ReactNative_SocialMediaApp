import React from 'react';

import style from './style';
import {Image, View, ScrollView} from 'react-native';

const ProfileTabContent = () => {
  const images = Array(10).fill(
    require('../../assets/images/default_post.png'),
  );
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profileTabContentContainer}>
      <View style={style.profileTabContent}>
        {images.map((imageSource, index) => (
          <Image
            key={index}
            resizeMode={'contain'}
            style={style.image}
            source={imageSource}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
