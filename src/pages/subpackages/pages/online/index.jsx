import React from 'react';
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui';
import Taro from '@tarojs/taro';
import './index.less'

export default function Online(){
  const clickPersonInfo = () => {
    Taro.navigateTo({
      url: '/pages/subOnline/pages/personInfo/index'
    })
  };
  return (
    <View className='online-container'>
      <View className='user-info flex-between' onClick={clickPersonInfo}>
        <View className='left'>
          <View className='head'>
            <Text className='user-name'>张三</Text>
            <AtIcon value='edit' size='16' color='#000' />
          </View>
          <Text className='exp'>3年经验 · 25岁 · 本科</Text>
        </View>
        <Image className='img-avatar' src='https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
      </View>
    </View>
  )
}
