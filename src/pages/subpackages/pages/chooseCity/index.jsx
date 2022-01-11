import React, { useState } from 'react';
import { View, Text } from '@tarojs/components'
import { AtIndexes, AtTag } from 'taro-ui'
import Taro from '@tarojs/taro'
import './index.less'

export default function User() {

  const [list] = useState([
    {
      title: 'A',
      key: 'A',
      items: [
        {name: '阿坝'},
        {name: '阿拉善'},
        {name: '安达市'},
        {name: '鞍山'},
        {name: '阿尔山市'},
        {name: '阿拉善盟'},
        {name: '安国市'},
        {name: '安康'},
        {name: '安丘市'},
        {name: '阿拉山口市'},
        {name: '阿克苏地区'},
        {name: '阿克苏市'},
        {name: '阿图什市'},
      ]
    },
    {
      title: 'B',
      key: 'B',
      items: [
        {name: '北京'},
        {name: '保定'},
        {name: '北安市'},
        {name: '白城'},
        {name: '白山'},
        {name: '本溪'},
        {name: '北镇市'},
        {name: '北票市'},
        {name: '包头'},
        {name: '霸州市'},
      ]
    },
    {
      title: 'C',
      key: 'C',
      items: [
        { name: '重庆'},
        { name: '长春'},
        { name: '朝阳'},
        { name: '赤峰'},
        { name: '承德'},
        { name: '沧州'},
        { name: '长治'},
      ]
    },
    {
      title: 'D',
      key: 'D',
      items: [
        { name: '东宁市'},
        { name: '大庆'},
        { name: '大兴安岭地区'},
        { name: '德惠市'},
        { name: '大安市'},
        { name: '敦化市'},
        { name: '大连'},
      ]
    }
  ]);
  const clickIndex = data => {
    const pages = Taro.getCurrentPages(); // 获取当前页面栈
    const prevPage = pages[pages.length - 2]; // 获取上一个页面
    prevPage.setData({
      // 设置上一个页面的值
      selectedCity: data.name
    });
    Taro.navigateBack({
      delta: 1,
    })
  };
  return (
    <View className='choose-city-container'>
      <AtIndexes
        list={list}
        isVibrate={false}
        animation={true}
        onClick={clickIndex}
      >
        <View className='position-city'>
          <View className='txt'>定位城市</View>
          <AtTag>贵阳</AtTag>
        </View>
      </AtIndexes>
    </View>
  )
}
