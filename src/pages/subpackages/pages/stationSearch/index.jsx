import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components'
import { AtSearchBar, AtTag } from 'taro-ui';
import StationList from '../../components/StationList';
import './index.less'
export default function User() {
  const [val, setVal] = useState('');
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const [historyList, setHistoryList] = useState(
    ['前端开发', 'web前端', '汽车销售', '中电金信', '销售']);
  const valChange = data => {
    setVal(data);
  };
  const clickSearch = () => {
    console.log(val);
  };
  const clickHistory = data => {
    setVal(data);
  };
  return (
    <View className='station-search-container'>
      <View className='search-input'>
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
