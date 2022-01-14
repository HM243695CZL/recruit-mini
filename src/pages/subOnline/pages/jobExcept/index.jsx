import React from 'react';
import { View, Text } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro';
import './index.less'

export default function JobExcept(){
  const router = useRouter();
  Taro.setNavigationBarTitle({
    title: (router.params.type === 'add' ? '添加' : '编辑') + '求职期望'
  });
  return (
    <View className='job-except-container'>
      {router.params.type === 'add' ? '添加' : '编辑'}求职期望
    </View>
  )
}
