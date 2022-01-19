import React, { useState } from 'react';
import { View, Text, Picker } from '@tarojs/components'
import cx from 'classnames';
import {AtIcon } from 'taro-ui';
import Taro, { useRouter, useDidShow } from '@tarojs/taro';
import './index.less'

export default function JobExcept(){
  const router = useRouter();
  const [type, setType] = useState(1);
  const [workCity, setWorkCity] = useState('贵阳');
  const [exceptStation, setExceptStation] = useState(router.params.type === 'add' ? '' : 'web前端');
  const [industry, setIndustry] = useState(router.params.type === 'add' ? ['不限'] : ['互联网']);
  const [salary, setSalary] = useState(router.params.type === 'add' ? '' : '22-25K');
  const [salaryVal, setSalaryVal] = useState(router.params.type === 'add' ? [0, 0] : [21, 3]);
  const [typeList] = useState([
    { value: 1, text: '全职' },
    { value: 0, text: '兼职' },
  ]);
  const [salaryList, setSalaryList] = useState([
    [], []
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
  const chooseIndustry = () => {
    Taro.navigateTo({
      url: '/pages/subOnline/pages/industryType/index?industry=' + JSON.stringify(industry)
    })
  };
  const changeSalary = salaryValue => {
    setSalaryVal([salaryValue.detail.value[0], salaryValue.detail.value[1]]);
    setSalary(parseInt(salaryList[0][salaryValue.detail.value[0]]) + '-' + salaryList[1][salaryValue.detail.value[1]]);
  };
  const changeSalaryColumn = columnValue => {
    if (columnValue.detail.column === 0) {
      let selectableArr = [];
      let selectedStartNumber = parseInt(salaryList[0][columnValue.detail.value]);
      if (selectedStartNumber < 30) {
        for (let i = 0; i < 8; i ++) {
          selectedStartNumber ++;
          selectableArr.push(selectedStartNumber + 'K');
        }
      } else if (selectedStartNumber => 30 && selectedStartNumber < 100) {
        for (let i = 0; i < 5; i ++) {
          selectedStartNumber += 5;
          selectableArr.push(selectedStartNumber + 'K');
        }
      } else {
        for (let i = 0; i < 5; i ++) {
          selectedStartNumber += 10;
          selectableArr.push(selectedStartNumber + 'K');
        }
      }
      setSalaryVal([columnValue.detail.value, 0]);
      salaryList[1] = selectableArr;
      setSalaryList([...salaryList]);
    }
  };
  useDidShow(() => {
    Taro.setNavigationBarTitle({
      title: (router.params.type === 'add' ? '添加' : '编辑') + '求职期望'
    });
    let startSalaryArr = [];
    let endSalaryArr = [];
    for (let i = 1; i < 30; i ++) {
      startSalaryArr.push(i + 'K');
    }
    for (let i = 0; i < 14; i ++) {
      startSalaryArr.push(30 + i * 5 + 'K');
    }
    for (let i = 0; i < 21; i ++) {
      startSalaryArr.push(100 + i * 10 + 'K');
    }
    if (router.params.type === 'add') {
      for (let i = 2; i < 8; i ++) {
        endSalaryArr.push(i + 'K');
      }
    } else {
      for (let i = 22; i < 28; i ++) {
        endSalaryArr.push(i + 'K');
      }
    }
    setSalaryList([startSalaryArr, endSalaryArr]);
    const pages = Taro.getCurrentPages();
    const currPage = pages[pages.length - 1]; // 获取当前页面
    if (currPage.data.selectedCity) {
      setWorkCity(currPage.data.selectedCity);
    }
    if (currPage.data.selectedStation) {
      setExceptStation(currPage.data.selectedStation);
    }
    if (currPage.data.selectedIndustry) {
      let arr = [];
      currPage.data.selectedIndustry.map(item => {
        arr.push(item.text);
      });
      setIndustry(arr);
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
        <View className='property flex-between' onClick={e => chooseWorkCity()}>
          <Text>工作城市</Text>
          <View className='right'>
            {workCity}
            <AtIcon className='right-icon' value='chevron-right' size='20' color='#787878'/>
          </View>
        </View>
        <View className='property flex-between' onClick={e => chooseExceptStation()}>
          <Text>期望职位</Text>
          <View className='right'>
            {exceptStation === '' ? <Text className='null-tip'>请选择期望职位</Text> : exceptStation}
            <AtIcon className='right-icon' value='chevron-right' size='20' color='#787878'/>
          </View>
        </View>
        <View className='property flex-between' onClick={e => chooseIndustry()}>
          <Text>期望行业</Text>
          <View className='right'>
            {industry.join(' · ')}
            <AtIcon className='right-icon' value='chevron-right' size='20' color='#787878'/>
          </View>
        </View>
        <Picker
          mode='multiSelector'
          range={salaryList}
          value={salaryVal}
          onChange={e => changeSalary(e)}
          onColumnChange={e => changeSalaryColumn(e)}
        >
          <View className='property flex-between'>
            <Text>薪资要求</Text>
            <View className='right'>
              {salary === '' ? <Text className='null-tip'>请选择薪资要求</Text> : salary}
              <AtIcon className='right-icon' value='chevron-right' size='20' color='#787878'/>
            </View>
          </View>
        </Picker>
      </View>
      <View className='btn-box flex-between'>
        {router.params.type !== 'add' && <View className='delete-btn'>删除</View>}
        <View className='save-btn'>保存</View>
      </View>
    </View>
  )
}
