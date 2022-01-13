import React, { useState } from 'react';
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui';
import EnclosureList from '../../components/EnclosureList';
import './index.less'
export default function Enclosure(){
  const [list] = useState([1, 2, 3]);
  return (
    <View className='enclosure-container'>
      <View className='tip flex-between'>
        <Text>最多可以上传3份简历</Text>
        <AtIcon value='close' size='20' color='#e2a34e' />
      </View>
      <View className='enclosure-box'>
        {
          list.map(item => <EnclosureList />)
        }
      </View>
      <View className='upload-new-file'>
        <View className='upload-enclosure'>上传新附件</View>
      </View>
    </View>
  )
}
