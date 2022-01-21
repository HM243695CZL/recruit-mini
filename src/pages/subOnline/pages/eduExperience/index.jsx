import React, {useState} from 'react';
import {Picker, Text, View} from '@tarojs/components'
import Taro, {useDidShow, useRouter} from '@tarojs/taro';
import {AtInput} from 'taro-ui';
import './index.less'

export default function EduExperience(){
  const router = useRouter();
  const [schoolName, setSchoolName] = useState('某某大学');
  const [education, setEducation] = useState('本科');
  const [majorName, setMajorName] = useState('某某专业');
  const [eduTime, setEduTime] = useState('2014-2018');
  const [eduTimeVal, setEduTimeVal] = useState([0, 0]);
  const [educationVal, setEducationVal] = useState([0, 0]);
  const [eduList, setEduList] = useState([
    [], []
  ]);
  const [timeList, setTimeList] = useState([
    [], []
  ]);
  const changeSchoolName = schoolNameValue => {
    setSchoolName(schoolNameValue);
  };
  const changeEdu = eduVal => {
    let showValue = eduList[0][eduVal.detail.value[0]];
    if (eduList[1][eduVal.detail.value[1]] !== undefined) {
      showValue = showValue + ' · ' + eduList[1][eduVal.detail.value[1]];
    }
    const trueValue = [eduVal.detail.value[0], eduVal.detail.value[1]];
    setEducationVal(trueValue);
    setEducation(showValue);
  };
  const changeEduColumn = columnValue => {
    if (columnValue.detail.column === 0) {
      let arr = [];
      if (columnValue.detail.value >= 3) {
        arr = ['全日制', '非全日制'];
      }
      eduList[1] = arr;
      setEducationVal([columnValue.detail.value, 0]);
      setEduList([...eduList]);
    }
  };
  const changeMajorName = majorNameValue => {
    setMajorName(majorNameValue);
  };
  const changeTime = timeValue => {
    setEduTimeVal([timeValue.detail.value[0], timeValue.detail.value[1]]);
    setEduTime(timeList[0][timeValue.detail.value[0]] + '-' + timeList[1][timeValue.detail.value[1]]);
  };
  const changeTimeColumn = columnValue => {
    if (columnValue.detail.column === 0) {
      let arr = [];
      let number = parseInt(timeList[0][columnValue.detail.value]);
      for (let i = 0; i < 8; i ++) {
        number += 1;
        arr.push(number);
      }
      setEduTimeVal([columnValue.detail.value, 0]);
      timeList[1] = arr;
      setTimeList([...timeList])
    }
  };
  useDidShow(() => {
    Taro.setNavigationBarTitle({
      title: (router.params.type === 'add' ? '添加' : '编辑') + '教育经历'
    });
    eduList[0] = ['初中及以下', '中专/中技', '高中', '大专', '本科', '硕士', '博士'];
    setEduList([...eduList]);
    let startTimeArr = [];
    let endTimeArr = [];
    const year = new Date().getFullYear();
    for (let i = year; i >= 1990; i--) {
      startTimeArr.push(i);
    }
    for (let i = year + 8; i > year; i--) {
      endTimeArr.push(i);
    }
    startTimeArr.push('1990以前');
    setTimeList([startTimeArr, endTimeArr]);
  });
  return (
    <View className='edu-experience-container'>
      <View className='edu-box'>
        <View className='head'>
          <View className='title'>教育经历</View>
          <View className='tip'>请从最高学历写起</View>
        </View>
        <View className='property flex-between'>
          <Text>学校名称</Text>
          <AtInput
            name='schoolName'
            type='text'
            placeholder='请输入'
            value={schoolName}
            onChange={changeSchoolName}
          />
        </View>
        <Picker
          mode='multiSelector'
          range={eduList}
          value={educationVal}
          onChange={e => changeEdu(e)}
          onColumnChange={e => changeEduColumn(e)}
        >
          <View className='property flex-between'>
            <Text>学历</Text>
            {education}
          </View>
        </Picker>
        <View className='property flex-between'>
          <Text>专业</Text>
          <AtInput
            name='majorName'
            type='text'
            placeholder='请输入'
            value={majorName}
            onChange={changeMajorName}
          />
        </View>
        <Picker
          mode='multiSelector'
          range={timeList}
          value={eduTimeVal}
          onChange={e => changeTime(e)}
          onColumnChange={e => changeTimeColumn(e)}
        >
          <View className='property flex-between'>
            <Text>时间段</Text>
            {eduTime}
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
