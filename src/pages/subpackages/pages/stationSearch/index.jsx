import React, { useState } from 'react';
import { View } from '@tarojs/components'
import { AtSearchBar, AtTag } from 'taro-ui';
import Taro, { useDidShow } from '@tarojs/taro'
import StationList from '../../components/StationList';
import './index.less'
export default function stationSearch() {
  const [val, setVal] = useState('');
  const [city, setCity] = useState('贵阳');
  const [list] = useState([1, 2, 3, 4, 5]);
  const [historyList] = useState(
    ['前端开发', 'web前端', '汽车销售', '中电金信', '销售']);
  useDidShow(() => {
    const pages = Taro.getCurrentPages();
    const currPage = pages[pages.length - 1]; // 获取当前页面
    if (currPage.data.selectedCity) {
      setCity(currPage.data.selectedCity);
    }
  });
  const valChange = data => {
    setVal(data);
  };
  const clickSearch = () => {
    console.log(val);
  };
  const clickHistory = data => {
    setVal(data);
  };
  const chooseCity = () => {
    Taro.navigateTo({
      url: '/pages/subpackages/pages/chooseCity/index'
    })
  };
  return (
    <View className='station-search-container'>
      <View className='search-input'>
        <View className='current-place' onClick={chooseCity}>
          <View className='txt-box text-over'>
            {city} <View className='caret caret-bottom' />
          </View>
        </View>
        <AtSearchBar
          showActionButton
          placeholder='搜索职位、公司'
          value={val}
          fixed={true}
          onChange={valChange}
          onActionClick={clickSearch}
        />
      </View>
      {
        val ? <View className='station-list-box'>
          {
            list.map((item, index) => <View className="box">
              <StationList />
              {
                list.length - 1 === index ? '' : <View className='line' />
              }
            </View>)
          }
          </View>
          :
          <View className='search-history'>
            <View className='title'>搜索历史</View>
            <View className='tag-list'>
              {
                historyList.map(item => <AtTag onClick={e => clickHistory(item)}>{item}</AtTag>)
              }
            </View>
          </View>
      }
    </View>
  )
}
