import React, { useState } from 'react';
import { View, Text, Image } from '@tarojs/components'
import {AtIcon, AtTag } from 'taro-ui';
import './index.less'
export default function StationInfo(){
  const [dutyList, setDutyList] = useState([1, 2, 3]);
  const [list, setList] = useState([1, 2, 3]);
  const AppointBox = () => {
    return (
      <View className='appoint-box flex-start'>
        <View className='collection'>
          <AtIcon value='star-2' size='20' color='#787878' />
          收藏
        </View>
        <View className='appoint-btn'>立即预约</View>
      </View>
    )
  };
  return (
    <View className='station-info-container'>
      <View className='content-box-info'>
        <View className='head-info'>
          <View className='head flex-between'>
            <Text className='name'>Java开发工程师</Text>
            <Text className='salary'>4-8K</Text>
          </View>
          <View className='demand flex-between'>
            <View className='box text-over flex-start'>
              <View className='icon-box text-over'>
                <AtIcon className='icon' value='map-pin' size='20' color='#787878' />
                贵阳·观山湖去·诚信南路
              </View>
              <View className='icon-box text-over'>
                <AtIcon className='icon' value='calendar' size='20' color='#787878' />
                1年以内
              </View>
            </View>
            <View className='education'>
              <AtIcon className='icon' value='tag' size='20' color='#787878' />
              本科
            </View>
          </View>
        </View>
        <View className='publish-info flex-start'>
          <Image className='avatar-img' src='https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
          <View className='object'>
            <Text className='name'>柳先生</Text>
            <Text className='station'>
              顺云数据 · 技术总监
            </Text>
          </View>
        </View>
        <View className='title'>职位详情：</View>
        <View className='requirement'>岗位职责：</View>
        <View className='list'>
          {
            dutyList.map((item, index) => {
              return (
                <View className='item'>
                  {index + 1}、参与新技术学习验证工作
                </View>
              )
            })
          }
        </View>
        <View className='requirement'>任职要求：</View>
        <View className='list'>
          {
            list.map((item, index) => {
              return (
                <View className='item'>
                  {index + 1}、熟练掌握Java、JavaScript、css、HTML、vue、react等前端技术
                </View>
              )
            })
          }
        </View>
        <View className='tag-list'>
          <AtTag size='small'>3-5年</AtTag>
          <AtTag size='small'>本科</AtTag>
          <AtTag size='small'>Vue</AtTag>
          <AtTag size='small'>JavaScript</AtTag>
        </View>
        <View className='company-info flex-start'>
          <Image className='avatar-img' src='https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
          <View className='object'>
            <Text className='name'>贵州深医科技</Text>
            <Text className='station'>
              电子商务 · 未融资 · 20-99人
            </Text>
          </View>
        </View>
        <View className='map-box'>
          地图
        </View>
      </View>
      <AppointBox />
    </View>
  )
}
