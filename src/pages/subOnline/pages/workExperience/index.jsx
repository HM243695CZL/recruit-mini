import React, { useState } from 'react';
import { View, Text, Picker } from '@tarojs/components'
import Taro, { useRouter, useDidShow } from '@tarojs/taro';
import {AtIcon, AtInput} from 'taro-ui';
import './index.less'

export default function WorkExperience(){
  const router = useRouter();
  const [companyName, setCompanyName] = useState('某某某科技股份有限公司');
  const [industry, setIndustry] = useState(['互联网']);
  const [startTime, setStartTime] = useState('2019-07');
  const [startTimeVal, setStartTimeVal] = useState([0, 0]);
  const [endTimeVal, setEndTimeVal] = useState([0, 0]);
  const [endTime, setEndTime] = useState('至今');
  const [timeList, setTimeList] = useState([
    [], []
  ]);
  const changeCompanyName = companyNameValue => {
    setCompanyName(companyNameValue);
  };
  const chooseIndustry = () => {
    Taro.navigateTo({
      url: '/pages/subOnline/pages/industryType/index?industry=' +
        JSON.stringify(industry) + '&type=experience'
    })
  };
  const changeTime = (timeValue, type) => {
    const showValue = parseInt(timeList[0][timeValue.detail.value[0]]) + '-' +
      timeList[1][timeValue.detail.value[1]].substr(0, 2);
    const trueValue = [timeValue.detail.value[0], timeValue.detail.value[1]];
    if (type === 'start') {
      setStartTimeVal(trueValue);
      setStartTime(showValue)
    } else {
      setEndTimeVal(trueValue);
      setEndTime(showValue)
    }
  };
  const changeTimeColumn = (columnValue, type) => {
    if (columnValue.detail.column === 0) {
      let selectableArr = [];
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;
      let selectedStartNumber = parseInt(timeList[0][columnValue.detail.value]);
      if (selectedStartNumber === year) {
        for (let i = month; i > 0; i --) {
          selectableArr.push((i >= 10 ? i : '0' + i) + '月')
        }
      }
      if (selectedStartNumber < year) {
        for (let i = 12; i > 0; i --) {
          selectableArr.push((i >= 10 ? i : '0' + i) + '月');
        }
      }
      if (type === 'start') {
        setStartTimeVal([columnValue.detail.value, 0]);
      } else {
        setEndTimeVal([columnValue.detail.value, 0]);
      }
      timeList[1] = selectableArr;
      setTimeList([...timeList]);
    }
  };
  useDidShow(() => {
    Taro.setNavigationBarTitle({
      title: (router.params.type === 'add' ? '添加' : '编辑') + '工作经历'
    });
    const pages = Taro.getCurrentPages();
    const currPage = pages[pages.length - 1];
    if (currPage.data.selectedIndustry) {
      let arr = [];
      currPage.data.selectedIndustry.map(item => {
        arr.push(item.text);
      });
      setIndustry(arr);
    }
    let startYearArr = [];
    let startMonthArr = [];
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    for (let i = year; i >= 1990; i -- ) {
      startYearArr.push(i + '年');
    }
    startYearArr.push('1990以前');
    for (let i = month; i > 0; i --) {
      startMonthArr.push((i >= 10 ? i : '0' + i) + '月')
    }
    setTimeList([startYearArr, startMonthArr]);
  });
  return (
    <View className='work-experience-container'>
      <View className='work-box'>
        <View className='property flex-between'>
          <Text className='txt'>公司名称</Text>
          <AtInput
            name='companyName'
            type='text'
            placeholder='请输入'
            value={companyName}
            onChange={changeCompanyName}
          />
        </View>
        <View className='property flex-between' onClick={e => chooseIndustry()}>
          <Text className='txt'>所在行业</Text>
          <View className='right'>
            {industry.length === 0 ? <Text className='null-tip'>请选择</Text> : industry}
            <AtIcon className='right-icon' value='chevron-right' size='20' color='#787878'/>
          </View>
        </View>
        <View className='property flex-between'>
          <Text className='txt'>在职时间</Text>
          <View className='time-box'>
            <Picker
              mode='multiSelector'
              range={timeList}
              value={startTimeVal}
              onChange={e => changeTime(e, 'start')}
              onColumnChange = {e => changeTimeColumn(e, 'start')}
            >
              <View className='item'>
                {startTime}
              </View>
            </Picker>
            <Text className='item'>-</Text>
            <Picker
              mode='multiSelector'
              range={timeList}
              value={endTimeVal}
              onChange={e => changeTime(e, 'end')}
              onColumnChange = {e => changeTimeColumn(e, 'end')}
            >
              <View className='item'>
                {endTime}
              </View>
            </Picker>
          </View>
        </View>
      </View>
      <View className='btn-box flex-between'>
        {router.params.type !== 'add' && <View className='delete-btn'>删除</View>}
        <View className='save-btn'>完成</View>
      </View>
    </View>
  )
}
