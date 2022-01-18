import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import cx from 'classnames';
import Taro, { useDidShow } from '@tarojs/taro'
import {AtSearchBar} from 'taro-ui';
import './index.less'

export default function StationType(){
  const [searchVal, setSearchVal] = useState('');
  const [trueValue, setTrueValue] = useState('');
  const [currentType, setCurrentType] = useState('technology');
  const [infoList, setInfoList] = useState([]);
  const [typeList] = useState([
    {
      text: '技术',
      value: 'technology',
      children: [
        {
          stationName: '后端开发',
          list: [
            { text: 'Java', value: 'Java'},
            { text: 'C++', value: 'C++'},
            { text: 'PHP', value: 'PHP'},
          ]
        },
        {
          stationName: '移动开发',
          list: [
            { text: 'HTML5', value: 'HTML5'},
            { text: 'Android', value: 'Android'},
            { text: 'IOS', value: 'IOS'},
          ]
        }
      ]
    },
    {
      text: '产品',
      value: 'product',
      children: [
        {
          stationName: '产品经理',
          list: [
            { text: '产品经理', value: 'product-manager'},
            { text: '网页产品经理', value: 'web-product-manager'},
            { text: '移动产品经理', value: 'mobile-product-manager'},
          ]
        },
        {
          stationName: '高端产品职位',
          list: [
            { text: '产品总监', value: 'product-director'},
            { text: '游戏制作人', value: 'game-producer'},
            { text: '产品VP', value: 'product-vp'},
          ]
        }
      ]
    }
  ]);
  const [searchList] = useState([
    { text: '移动端测试(移动端测试)', value: 'mobile-test', type: '技术-测试' },
    { text: 'Java(服务端开发工程师)', value: 'server-dev', type: '技术-后端开发' },
    { text: 'Android(移动端开发工程师)', value: 'mobile-test', type: '技术-移动开发' },
    { text: 'U3D(客户端开发工程师)', value: 'mobile-test', type: '技术-移动开发' },
    { text: '产品经理(C端产品经理)', value: 'mobile-test', type: '产品-产品经理' },
    { text: '移动产品经理(移动端产品经理)', value: 'mobile-test', type: '技术-产品经理' },
  ]);
  const searchValChange = data => {
    setSearchVal(data);
    if (data === '') {
      setTrueValue('');
    }
  };
  const clickSearch = () => {
    setTrueValue(searchVal);
  };
  const changeType = currentTypeValue => {
    setCurrentType(currentTypeValue);
    typeList.map(item => {
      if (item.value === currentTypeValue) {
        setInfoList(item.children);
      }
    })
  };
  const clickInfoText = data => {
    backPrevPage(data.text);
  };
  const clickSearchList = data => {
    const value = data.text.split('(')[0];
    backPrevPage(value);
  };
  const backPrevPage = value => {
    const pages = Taro.getCurrentPages();
    const prevPage = pages[pages.length - 2];
    prevPage.setData({
      selectedStation: value
    });
    Taro.navigateBack({
      delta: 1
    });
  };
  useDidShow(() => {
    typeList.map(item => {
      if (item.value === currentType) {
        setInfoList(item.children);
      }
    })
  });
  return (
    <View className='station-type-container'>
      <AtSearchBar
        showActionButton
        placeholder='搜索岗位'
        value={searchVal}
        fixed={true}
        onChange={searchValChange}
        onActionClick={clickSearch}
      />
      {
        trueValue === '' ? <View className='type-list-box flex-between'>
          <View className='type-left'>
            {
              typeList.map(item => <View
                className={
                  cx({
                    'item-name': true,
                    'active': item.value === currentType
                  })
                }
                onClick={e => changeType(item.value)}
              >{item.text}</View>)
            }
          </View>
          <View className='type-right'>
            {
              infoList.map(item => {
                return (
                  <View className='right-box'>
                    <View className='station-name'>{item.stationName}</View>
                    <View className='station-list'>
                      {
                        item.list.map(ele => {
                          return (
                            <View className='station-list-item'>
                              <View className='item-txt text-over' onClick={e => clickInfoText(ele)}>{ele.text}</View>
                            </View>
                          )
                        })
                      }
                    </View>
                  </View>
                )
              })
            }
          </View>
        </View> : <View className='type-item-box'>
          {
            searchList.map(item => {
              return (
                <View className='list-item' onClick={e => clickSearchList(item)}>
                  <View className='name'>{item.text}</View>
                  <View className='type'>{item.type}</View>
                </View>
              )
            })
          }
        </View>
      }
    </View>
  )
}
