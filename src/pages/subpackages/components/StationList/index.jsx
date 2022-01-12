import React from 'react';
import {Image, Text, View} from '@tarojs/components';
import {AtTag} from 'taro-ui';
import Taro from '@tarojs/taro'
import './index.less';
export default function StationList(props){
  const showInfo = () => {
    Taro.navigateTo({
      url: '/pages/subpackages/pages/stationInfo/index'
    })
  };
  return (
    <View className='list-item' onClick={showInfo}>
      <View className='title flex-between'>
        <Text className='name'>web前端开发工程师</Text>
        <Text className='salary'>22-25K</Text>
      </View>
      <View className='company'>
        贵州深医科技 <Text className='number-scope'>20-99人</Text>
      </View>
      <View className='tag-list'>
        <AtTag>3-5年</AtTag>
        <AtTag>本科</AtTag>
        <AtTag >Vue</AtTag>
        <AtTag>JavaScript</AtTag>
      </View>
      <View className='publish-info flex-between'>
        <View className='publish-user flex-start'>
          <Image className='img-avatar' src='https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
          <Text className='publish-username'>
            孔女士
            <Text className='publish-station'>人事</Text>
          </Text>
        </View>
        <Text className='place'>天河区 棠东</Text>
      </View>
    </View>
  )
}
