import React, { useState } from 'react';
import { View, Text } from '@tarojs/components'
import AppointList from '../../components/AppointList';
import './index.less'

export default function Appointment(){
  const [list] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <View className='appointment-container'>
      {
        list.map(item => <AppointList />)
      }
    </View>
  )
}
