import React from 'react';
import {View, Text, Image} from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.less';
export default function CollectionList(props) {
  const clickCollection = () => {
    Taro.navigateTo({
      url: '/pages/subpackages/pages/stationInfo/index'
    })
  };
  return (
    <View className='collection-list' onClick={clickCollection}>
      <View className='title flex-between'>
        <Text className='name'>web前端开发工程师</Text>
        <Text className='salary'>22-25K</Text>
      </View>
      <View className='company-name'>六人传媒</View>
      <View className='img-box flex-start'>
        <Image className='img-avatar' src='https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
        孔女士 · 人事
      </View>
    </View>
  )
}
