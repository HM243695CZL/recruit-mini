import React, { useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtAccordion, AtIcon } from 'taro-ui';
import Taro, { useRouter, useDidShow } from '@tarojs/taro';
import cx from 'classnames';
import './index.less'

export default function IndustryType(){
  const router = useRouter();
  const [type, setType] = useState('');
  const [industryList, setIndustryList] = useState([
    {
      id: 1,
      title: '互联网/IT/电子/通信',
      opened: false,
      selectedItem: [],
      list: [
        { text: '电子商务', value: 'electrons-commerce' },
        { text: '游戏', value: 'game' },
        { text: '媒体', value: 'media' },
        { text: '广告营销', value: 'advertising-market' },
        { text: '数据服务', value: 'data-server' },
        { text: '医疗健康', value: 'medical-health' },
        { text: '互联网', value: 'network' },
      ]
    },
    {
      id: 2,
      title: '广告/传媒/文化/体育',
      opened: false,
      selectedItem: [],
      list: [
        { text: '广告/公关/会展', value: 'ad' },
        { text: '新闻/出版', value: 'news' },
        { text: '广播/影视', value: 'radio-broadcast' },
        { text: '文化/体育/娱乐', value: 'culture' },
      ]
    },
    {
      id: 3,
      title: '金融',
      opened: false,
      selectedItem: [],
      list: [
        { text: '银行', value: 'bank' },
        { text: '保险', value: 'insurance' },
        { text: '证券/期货', value: 'bond' },
        { text: '基金', value: 'fund' },
        { text: '信托', value: 'trust' },
      ]
    },
    {
      id: 4,
      title: '教育培训',
      opened: false,
      selectedItem: [],
      list: [
        { text: '学前教育', value: 'preschool-edu' },
        { text: '院校', value: 'university-and-colleges' },
        { text: '培训机构', value: 'training-organization' },
        { text: '学术/科研', value: 'learning' },
      ]
    }
  ]);
  const [selectedIndustry, setSelectedIndustry] = useState([]);
  const clickAccordion = data => {
    industryList.map(item => {
      if (item.id === data.id) {
        item.opened = !item.opened;
      }
    });
    setIndustryList([...industryList]);
  };
  const clickAccordionItem = (data, ele) => {
    if (type === 'except') {
      let selectedTextArr = [];
      selectedIndustry.map(e => {
        selectedTextArr.push((e.value));
      });
      if (selectedTextArr.includes(ele.value)) {
        // 删除选中
        setSelectedIndustry([...selectedIndustry.filter(e => e.value !== ele.value)]);
        industryList.map(item => {
          if (item.id === data.id) {
            item.selectedItem.map((e, index) => {
              if (e.value === ele.value) {
                item.selectedItem.splice(index, 1);
              }
            })
          }
        });
        setIndustryList([...industryList]);
      } else {
        // 添加选中
        if (selectedIndustry.length === 3) {
          Taro.showToast({
            title: '最多选择三个',
            icon: 'none',
            duration: 2000
          });
          return false;
        }
        setSelectedIndustry([...selectedIndustry, {...ele, parentId: data.id}]);
        industryList.map(item => {
          if (item.id === data.id) {
            item.selectedItem.push(ele);
          }
        });
        setIndustryList([...industryList]);
      }
    } else if (type === 'experience') {
      setSelectedIndustry([ele]);
      const pages = Taro.getCurrentPages();
      const prevPage = pages[pages.length - 2];
      prevPage.setData({
        selectedIndustry: [ele]
      });
      Taro.navigateBack({
        delta: 1
      });
    }
  };
  const deleteSelectedIndustry = data => {
    selectedIndustry.map((item, index) => {
      if (item.value === data.value) {
        selectedIndustry.splice(index, 1);
      }
    });
    setSelectedIndustry([...selectedIndustry]);
    industryList.map(item => {
      if (item.id === data.parentId) {
        item.selectedItem.map((ele, index) => {
          if (ele.value === data.value) {
            item.selectedItem.splice(index, 1);
          }
        })
      }
    });
    setIndustryList([...industryList]);
  };
  const clearSelectedIndustry = () => {
    setSelectedIndustry([]);
    industryList.map(item => {
      item.selectedItem = [];
    });
    setIndustryList([...industryList]);
  };
  const clickSaveIndustry = () => {
    const pages = Taro.getCurrentPages();
    const prevPage = pages[pages.length - 2];
    prevPage.setData({
      selectedIndustry
    });
    Taro.navigateBack({
      delta: 1
    });
  };
  useDidShow(() => {
    let arr = JSON.parse(router.params.industry);
    setType(router.params.type);
    industryList.map(item => {
      item.list.map(ele => {
        if (arr.includes(ele.text)){
          selectedIndustry.push({...ele, parentId: item.id});
          item.selectedItem.push(ele);
        }
      })
    });
    setIndustryList([...industryList]);
    setSelectedIndustry([...selectedIndustry]);
  });
  return (
    <View className='industry-type-container'>
      <View className={
        cx({
          'industry-box': true,
          'selected-box': selectedIndustry.length > 0,
          'except-box': type === 'experience'
        })
      }>
        <View className='head'>
          <View className='title'>{type === 'except' ? '期望' : '所在'}行业</View>
          <View className='tip'>请选择行业，最多{type === 'except' ? '三' : '一'}个</View>
        </View>
        <View className='accordion-box'>
          {
            industryList.map(item => {
              return (
                <AtAccordion
                  open={item.opened}
                  isAnimation={false}
                  hasBorder={item.opened}
                  title={<View className='accordion-head flex-between'>
                    {item.title}
                    {
                      item.selectedItem.length > 0 && <View className='selected-item-count'>{item.selectedItem.length}</View>
                    }
                  </View>}
                  onClick={e => clickAccordion(item)}
                >
                  <View className='content'>
                    <View className='list-type'>
                      {
                        item.list.map(ele => {
                          let arr = [];
                          selectedIndustry.map(e => {
                            arr.push(e.value);
                          });
                          return (
                            <View className='type' onClick={e => clickAccordionItem(item, ele)}>
                              <View className={
                                cx({
                                  'item': true,
                                  'active': arr.includes(ele.value)
                                })
                              }>{ele.text}</View>
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
      {
        type === 'except' && <View className='btn-box'>
          {
            selectedIndustry.length > 0 && <View className='selected-item flex-start'>
              <Text className='tip'>已选</Text>
              {
                selectedIndustry.map(item => {
                  return (
                    <View className='item-list'>
                      {item.text}
                      <AtIcon
                        onClick={e => deleteSelectedIndustry(item)}
                        className='close-icon' value='close'
                        size='10' color='#36c1ba' />
                    </View>
                  )
                })
              }
            </View>
          }
          <View className='flex-between'>
            <View className='clear-btn' onClick={e => clearSelectedIndustry()}>清除</View>
            <View className='save-btn' onClick={e => clickSaveIndustry()}>保存</View>
          </View>
        </View>
      }
    </View>
  )
}
