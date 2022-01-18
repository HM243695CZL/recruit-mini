import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtAccordion, AtIcon } from 'taro-ui';
import './index.less'

export default function IndustryType(){
  const [industryList, setIndustryList] = useState([
    {
      id: 1,
      title: '互联网/IT/电子/通信',
      opened: false,
      selectedItem: [],
      list: [
        { text: '电子商务', value: 'elec-commerce' },
        { text: '游戏', value: 'elec-commerce' },
        { text: '媒体', value: 'elec-commerce' },
        { text: '广告营销', value: 'elec-commerce' },
        { text: '数据服务', value: 'elec-commerce' },
        { text: '医疗健康', value: 'elec-commerce' },
      ]
    },
    {
      id: 2,
      title: '广告/传媒/文化/体育',
      opened: false,
      selectedItem: [],
      list: [
        { text: '广告/公关/会展', value: 'ad' },
        { text: '新闻/出版', value: 'ad' },
        { text: '广播/影视', value: 'ad' },
        { text: '文化/体育/娱乐', value: 'ad' },
      ]
    },
    {
      id: 3,
      title: '金融',
      opened: false,
      selectedItem: [],
      list: [
        { text: '银行', value: 'bank' },
        { text: '保险', value: 'bank' },
        { text: '证券/期货', value: 'bank' },
        { text: '基金', value: 'bank' },
        { text: '信托', value: 'bank' },
      ]
    },
    {
      id: 4,
      title: '教育培训',
      opened: false,
      selectedItem: [],
      list: [
        { text: '学前教育', value: 'edu' },
        { text: '院校', value: 'edu' },
        { text: '培训机构', value: 'edu' },
        { text: '学术/科研', value: 'edu' },
      ]
    }
  ]);
  const clickAccordion = data => {
    industryList.map(item => {
      if (item.id === data.id) {
        item.opened = !item.opened;
      }
    });
    setIndustryList([...industryList]);
  };
  return (
    <View className='industry-type-container'>
      <View className='industry-box'>
        <View className='head'>
          <View className='title'>期望行业</View>
          <View className='tip'>请选择行业，最多三个</View>
        </View>
        <View className='accordion-box'>
          {
            industryList.map(item => {
              return (
                <AtAccordion
                  open={item.opened}
                  isAnimation={false}
                  hasBorder={item.opened}
                  title={<View>
                    {item.title}
                  </View>}
                  onClick={e => clickAccordion(item)}
                >
                  <View className='content'>
                    <View className='list-type'>
                      {
                        item.list.map(ele => {
                          return (
                            <View className='type'>
                              <View className='item'>{ele.text}</View>
                            </View>
                          )
                        })
                      }
                    </View>
                  </View>
                </AtAccordion>
              )
            })
          }
        </View>
      </View>
      <View className='btn-box'>
        <View className='selected-item flex-start'>
          <Text className='tip'>已选</Text>
          <View className='item-list'>
            互联网
            <AtIcon className='close-icon' value='close' size='10' color='#36c1ba' />
          </View>
        </View>
        <View className='flex-between'>
          <View className='clear-btn'>清除</View>
          <View className='save-btn'>保存</View>
        </View>
      </View>
    </View>
  )
}
