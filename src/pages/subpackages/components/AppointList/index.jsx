import React from 'react';
import {Image, View, Text} from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.less';
export default function AppointList() {
  const clickAppointList = () => {
    Taro.navigateTo({
      url: '/pages/subpackages/pages/appointInfo/index'
    })
  };
  return (
    <View className='appointment-list flex-between' onClick={clickAppointList}>
      <Image className='img-avatar' src='https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
      <View className='info'>
        <View className='company-name'>方图智能</View>
        <View className='detail flex-between'>
          <Text className='station-txt text-over'>
            面试 前端高级工程师 · 22-25K
          </Text>
          <Text className='time'>
            2021 04月12日
          </Text>
        </View>
      </View>
    </View>
  )
}
