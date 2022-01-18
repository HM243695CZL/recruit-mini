import React, { useState } from 'react';
import { View, Text } from '@tarojs/components'
import cx from 'classnames';
import {AtIcon } from 'taro-ui';
import Taro, { useRouter, useDidShow } from '@tarojs/taro';
import './index.less'

export default function JobExcept(){
  const router = useRouter();
  Taro.setNavigationBarTitle({
    title: (router.params.type === 'add' ? '添加' : '编辑') + '求职期望'
  });
  const [type, setType] = useState(1);
  const [workCity, setWorkCity] = useState('贵阳');
  const [exceptStation, setExceptStation] = useState('web前端');
  const [typeList] = useState([
    { value: 1, text: '全职' },
    { value: 0, text: '兼职' },
  ]);
  const changeType = typeValue => {
    setType(typeValue);
  };
  const chooseWorkCity = () => {
    Taro.navigateTo({
      url: '/pages/subpackages/pages/chooseCity/index'
    })
  };
  const chooseExceptStation = () => {
    Taro.navigateTo({
      url: '/pages/subOnline/pages/stationType/index'
    })
  };
  useDidShow(() => {
    const pages = Taro.getCurrentPages();
    const currPage = pages[pages.length - 1]; // 获取当前页面
    if (currPage.data.selectedCity) {
      setWorkCity(currPage.data.selectedCity);
    }
    if (currPage.data.selectedStation) {
      setExceptStation(currPage.data.selectedStation);
    }
  });
  return (
    <View className='job-except-container'>
      <View className='except-box'>
        <View className='head'>
          <View className='title'>{router.params.type === 'add' ? '添加' : '编辑'}求职期望</View>
          <View className='tip'>求职期望不同，推荐的职位也会不同</View>
        </View>
        <View className='property flex-between'>
          <Text>求职类型</Text>
          <View className='radio-box flex-start'>
            {
              typeList.map(item => <View
                className={cx({
                  'radio': true,
                  'active': item.value === type
                })}
                onClick={e => changeType(item.value)}
              >{item.text}</View>)
            }
          </View>
        </View>
        <View className='property flex-between'>
          <Text>工作城市</Text>
          <View className='right' onClick={e => chooseWorkCity()}>
            {workCity}
            <AtIcon className='right-icon' value='chevron-right' size='20' color='#787878'/>
          </View>
        </View>
        <View className='property flex-between'>
          <Text>期望职位</Text>
          <View className='right' onClick={e => chooseExceptStation()}>
            {exceptStation}
            <AtIcon className='right-icon' value='chevron-right' size='20' color='#787878'/>
          </View>
        </View>
      </View>
      <View className='btn-box flex-between'>
        {router.params.type !== 'add' && <View className='delete-btn'>删除</View>}
        <View className='save-btn'>保存</View>
      </View>
    </View>
  )
}
