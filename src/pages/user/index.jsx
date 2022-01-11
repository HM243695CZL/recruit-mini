import React, { useState } from "react";
import {Image, View} from '@tarojs/components'
import {AtIcon} from 'taro-ui';
import './index.less'

export default function User() {
  const [tabList] = useState([
    { text: '在线简历' },
    { text: '附件简历' },
    { text: '我的面试' },
  ]);
  return (
    <View className='user-container'>
      <View className="head-card flex-between">
        <View className="left">
          <View className="name">黄初舟</View>
          <View className="online-resume">
            <AtIcon className='edit-icon' value='edit' size='20' color='#fff' />
            我的在线简历
          </View>
        </View>
        <Image className='img-avatar' src='https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
      </View>
      <View className="tab-list flex-between">
        {
          tabList.map(item => {
            return (
              <View className="box">
                <AtIcon className='tab-icon' value='file-jpg' size='32' color='#fdb63a' />
                {item.text}
              </View>
            )
          })
        }
      </View>
    </View>
  )
}
