import React, { useState } from "react";
import {Image, View, Text} from '@tarojs/components'
import {AtIcon} from 'taro-ui';
import './index.less'

export default function User() {
  const [tabList] = useState([
    { text: '在线简历' },
    { text: '附件简历' },
    { text: '我的预约' },
  ]);
  const [iconList] = useState([
    { icon: 'star', text: '我的收藏' },
    { icon: 'star', text: '意见反馈' },
  ]);
  return (
    <View className='user-container'>
      <View className="head-card flex-between">
        <View className="left">
          <View className="name">张三</View>
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
      <View className='icon-list'>
        {
          iconList.map(item => {
            return (
              <View className='item-box flex-between'>
                <View className='left flex-start'>
                  <AtIcon value={item.icon} size='20' color='#787878' />
                  <Text className='txt'>{item.text}</Text>
                </View>
                <AtIcon value='chevron-right' size='20' color='#787878' />
              </View>
            )
          })
        }
      </View>
      <View className='logout-btn'>
        <View className='logout'>退出登录</View>
      </View>
      <View className='technical-support'>
        HM243695CZL提供技术支持
      </View>
    </View>
  )
}
