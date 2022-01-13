import React from 'react';
import {View, Text, Image} from '@tarojs/components'
import './index.less'

export default function previewEnclosure(){
  return (
    <View className='preview-enclosure-container'>
      <Image className='img-avatar'
             src='https://img2.baidu.com/it/u=3350760125,2435447797&fm=253&fmt=auto&app=138&f=JPEG?w=353&h=499'
             mode='widthFix' />
    </View>
  )
}
