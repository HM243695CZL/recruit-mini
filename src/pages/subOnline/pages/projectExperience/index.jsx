import React, { useState } from 'react';
import { View, Text, Picker } from '@tarojs/components'
import Taro, { useRouter, useDidShow } from '@tarojs/taro';
import {AtIcon, AtInput} from 'taro-ui';
import './index.less'

export default function ProjectExperience(){
  const router = useRouter();
  const [projectName, setProjectName] = useState('某某某管理系统');
  const [roleName, setRoleName] = useState('前端开发工程师');
  const [startTime, setStartTime] = useState('2019-07');
  const [startTimeVal, setStartTimeVal] = useState([0, 0]);
  const [endTimeVal, setEndTimeVal] = useState([0, 0]);
  const [endTime, setEndTime] = useState('2022-01');
  const [projectDesc] = useState('讲一讲项目的基本概况，讲一讲项目的名称，开发的时间、地点，完成的时限，投入多少钱等等');
  const [timeList, setTimeList] = useState([
    [], []
  ]);
  const changeProjectName = projectNameValue => {
    setProjectName(projectNameValue);
  };
  const changeRoleName = roleNameValue => {
    setRoleName(roleNameValue);
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
  const clickProjectDesc = () => {
    Taro.navigateTo({
      url: '/pages/subOnline/pages/projectDescription/index'
    })
  };
  useDidShow(() => {
    Taro.setNavigationBarTitle({
      title: (router.params.type === 'add' ? '添加' : '编辑') + '项目经验'
    });
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
    <View className='project-experience-container'>
      <View className='project-box'>
        <View className='property flex-between'>
          <Text className='txt'>项目名称</Text>
          <AtInput
            name='projectName'
            type='text'
            placeholder='请输入'
            value={projectName}
            onChange={changeProjectName}
          />
        </View>
        <View className='property flex-between'>
          <Text className='txt'>担任角色</Text>
          <AtInput
            name='roleName'
            type='text'
            placeholder='请输入'
            value={roleName}
            onChange={changeRoleName}
          />
        </View>
        <View className='property flex-between'>
          <Text className='txt'>项目时间</Text>
          <View className='time-box'>
            <Picker
              mode='multiSelector'
              range={timeList}
              value={startTimeVal}
              onChange={e => changeTime(e, 'start')}
              onColumnChange={e => changeTimeColumn(e, 'start')}
            >
              <View className='item'>{startTime}</View>
            </Picker>
            <View className='item'>-</View>
            <Picker
              mode='multiSelector'
              range={timeList}
              value={endTimeVal}
              onChange={e => changeTime(e, 'end')}
              onColumnChange={e => changeTimeColumn(e, 'start')}
            >
              <View className='item'>{endTime}</View>
            </Picker>
          </View>
        </View>
        <View className='property flex-between' onClick={e => clickProjectDesc()}>
          <Text className='txt'>项目描述</Text>
          <View className='right text-over'>
            <View className='text-over'>{projectDesc}</View>
            <AtIcon className='right-icon' value='chevron-right' size='20' color='#787878'/>
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
