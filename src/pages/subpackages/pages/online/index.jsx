import React, { useState } from 'react';
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui';
import Taro from '@tarojs/taro';
import './index.less'

export default function Online(){
  const [advantageList] = useState([
    '适应潜力强。一般来说，我对生活和环境的适应潜力比较强，不怎么挑剔适应潜力强。'
  ]);
  const clickPersonInfo = () => {
    Taro.navigateTo({
      url: '/pages/subOnline/pages/personInfo/index'
    })
  };
  const clickPersonAdvantage = () => {
    Taro.navigateTo({
      url: '/pages/subOnline/pages/personAdvantage/index'
    })
  };
  const clickJobStatus = () => {
    Taro.navigateTo({
      url: '/pages/subOnline/pages/jobStatus/index'
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
      <View className='person-advantage' onClick={clickPersonAdvantage}>
        <View className='head flex-between'>
          <Text className='advantage'>个人优势</Text>
          <AtIcon value='edit' size='16' color='#000' />
        </View>
        {
          advantageList.map((item, index) => <View className='advantage-list'>{index + 1}. {item.slice(0, 30)}...</View>)
        }
      </View>
      <View className='job-status flex-between' onClick={clickJobStatus}>
        <Text className='job-head'>求职状态</Text>
        <View className='status-want'>
          <Text className='status-want-txt'>在职-暂不考虑</Text>
          <AtIcon value='chevron-right' size='16' color='#787878' />
        </View>
      </View>
    </View>
  )
}
