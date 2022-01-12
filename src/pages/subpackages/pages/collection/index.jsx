import React, { useState } from 'react';
import { View, Text } from '@tarojs/components'
import CollectionList from '../../components/CollectionList';
import './index.less'

export default function Collection(){
  const [list] = useState([1, 2, 3, 4]);
  return (
    <View className='collection-container'>
      {
        list.map(item => <CollectionList />)
      }
    </View>
  )
}
