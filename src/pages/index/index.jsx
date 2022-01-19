import React, { useState } from 'react';
import { View, Text, Image } from '@tarojs/components'
import { AtIcon, AtTag } from 'taro-ui'
import Taro from '@tarojs/taro';
import StationList from '../subpackages/components/StationList'
import './index.less'

export default function Index(props) {
  const [list, setList] = useState([1, 2, 3, 4]);
  const showSearchInfo = () => {
    Taro.navigateTo({
      url: '/pages/subpackages/pages/stationSearch/index'
    })
  };
  return (
    <View className='index-container'>
      <View className='search-box' onClick={showSearchInfo}>
        <View className='input-search'>
          <AtIcon value='search' size='20' color='#787878' />
          <Text className='search-placeholder'>搜索职位、公司</Text>
        </View>
      </View>
      <View className='content-box'>
        <View className='station-head flex-between'>
          <View className='station-name'>web前端</View>
          <AtIcon value='edit' size={20} color={'#787878'} />
        </View>
        <View className='station-list'>
          <StationList />
        </View>
      </View>
      <View className='station-card'>
        <View className='station-list'>
          {
            list.map((item, index) => {
              return (
                <View className='list-box'>
                  <StationList data={item} />
                  {
                    list.length - 1 === index ? '' : <View className='line' />
                  }
                </View>
              )
            })
          }
        </View>
      </View>
    </View>
  )
}
