import React, { useState } from "react";
import {Image, View, Text, Button} from '@tarojs/components'
import {AtIcon, AtModal, AtModalContent, AtModalAction } from 'taro-ui';
import Taro from '@tarojs/taro';
import './index.less'

export default function User() {
  const [tabList] = useState([
    { text: '在线简历', value: 'online' },
    { text: '附件简历', value: 'enclosure' },
    { text: '我的预约', value: 'appointment' },
  ]);
  const [iconList] = useState([
    { icon: 'star', text: '我的收藏', value: 'collection' },
    { icon: 'alert-circle', text: '意见反馈', value: 'advise' },
    { icon: 'user', text: '切换为招聘者', value: ''}
  ]);
  const [isOpened, setIsOpened] = useState(false);
  const clickHeadCard = () => {
    Taro.navigateTo({
      url: '/pages/subpackages/pages/online/index'
    })
  };
  const clickTab = data => {
    if (data.value === '') {
      setIsOpened(true);
    } else {
      Taro.navigateTo({
        url: `/pages/subpackages/pages/${data.value}/index`
      })
    }
  };
  const closeModal = () => {
    setIsOpened(false);
  };
  const clickConfirm = () => {
    setIsOpened(false);
  };
  return (
    <View className='user-container'>
      <View className="head-card flex-between" onClick={e => clickHeadCard()}>
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
              <View className="box" onClick={e => clickTab(item)}>
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
              <View className='item-box flex-between' onClick={e => clickTab(item)}>
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
      <AtModal
        isOpened={isOpened}
        closeOnClickOverlay={false}
      >
        <AtModalContent>
          <View className='modal-box'>
            即将打开“招聘者”小程序
          </View>
        </AtModalContent>
        <AtModalAction>
          <Button onClick={e => closeModal()}>取消</Button>
          <Button onClick={e => clickConfirm()}>允许</Button>
        </AtModalAction>
      </AtModal>
    </View>
  )
}
