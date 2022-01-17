import React from 'react';
import { View, Text } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro';
import './index.less'

export default function WorkExperience(){
  const router = useRouter();
  Taro.setNavigationBarTitle({
    title: (router.params.type === 'add' ? '添加' : '编辑') + '工作经历'
  });
  return (
    <View className='work-experience-container'>
      {router.params.type === 'add' ? '添加' : '编辑'}工作经历
    </View>
  )
}
