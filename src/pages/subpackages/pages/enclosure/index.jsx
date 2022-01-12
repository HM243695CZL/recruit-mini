import React from 'react';
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui';
import './index.less'

export default function Enclosure(){
  return (
    <View className='enclosure-container'>
      <View className='tip flex-between'>
        <Text>最多可以上传3份简历</Text>
        <AtIcon value='close' size='20' color='#e2a34e' />
      </View>
    </View>
  )
}
