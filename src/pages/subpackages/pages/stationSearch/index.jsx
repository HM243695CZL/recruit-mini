import React, { useState } from 'react';
import { View } from '@tarojs/components'
import { AtSearchBar, AtTag } from 'taro-ui';
import './index.less'
export default function User() {
  const [val, setVal] = useState('');
  const valChange = data => {
    setVal(data);
  };
  const clickSearch = () => {
    console.log(val);
  };
  return (
    <View className='station-search-container'>
      <View className='search-input'>
        <AtSearchBar
          showActionButton
          placeholder='搜索职位、公司'
          value={val}
          onChange={valChange}
          onActionClick={clickSearch}
        />
        <View className='search-history'>
          <View className='title'>搜索历史</View>
          <View className='tag-list'>
            <AtTag>前端开发</AtTag>
            <AtTag>web前端</AtTag>
            <AtTag>汽车销售</AtTag>
            <AtTag>中电金信</AtTag>
            <AtTag>销售</AtTag>
          </View>
        </View>
      </View>
    </View>
  )
}
