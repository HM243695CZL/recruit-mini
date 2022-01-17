import React, { useState } from 'react';
import {View, Text, Image, Picker} from '@tarojs/components'
import cx from 'classnames';
import {AtInput, AtIcon} from 'taro-ui';
import './index.less'

export default function PersonInfo(){
  const [username, setUsername] = useState('张三');
  const [sex, setSex] = useState(1); // 1 男 0 女
  const [identity, setIdentity] = useState(1); // 1 职场人 2 学生
  const [joinTime, setJoinTime] = useState('2018-11');
  const [birthday, setBirthday] = useState('1996-05');
  const [wxNumber, setWxNumber] = useState('hm******zl');
  const [email, setEmail] = useState('');
  const [lawTip] = useState('根据《劳动法》《未成年人保护法》等相关法律规定，申请注册，请选择与你身份证一致的真实年龄并确保你已满16周岁。');
  const [sexList] = useState([
    { value: 1, text: '男' },
    { value: 0, text: '女' },
  ]);
  const [identityList] = useState([
    { value: 1, text: '职场人' },
    { value: 0, text: '学生' },
  ]);
  const changeUsername = usernameValue => {
    setUsername(usernameValue);
  };
  const changeSex = sexValue => {
    setSex(sexValue);
  };
  const changeIdentity = identityValue => {
    setIdentity(identityValue);
  };
  const changeWorkTime = joinTimeValue => {
    setJoinTime(joinTimeValue.detail.value);
  };
  const changeBirthday = birthdayValue => {
    setBirthday(birthdayValue.detail.value);
  };
  const changeWxNumber = wxNumberValue => {
    setWxNumber(wxNumberValue);
  };
  const changeEmail = emailValue => {
    setEmail(emailValue);
  };
  return (
    <View className='person-info-container'>
      <View className='info-box'>
        <View className='avatar flex-between'>
          <Text>头像</Text>
          <Image className='img-avatar' src='https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
        </View>
        <View className='property flex-between'>
          <Text>姓名</Text>
          <AtInput
            name='username'
            type='text'
            placeholder='姓名'
            value={username}
            onChange={changeUsername}
          />
        </View>
        <View className='property flex-between'>
          <Text>性别</Text>
          <View className='radio-box flex-start'>
            {
              sexList.map(item => <View
                className={cx({
                  'radio': true,
                  'active': sex === item.value
                })}
                onClick={e => changeSex(item.value)}
              >{item.text}</View>)
            }
          </View>
        </View>
        <View className='property flex-between'>
          <Text>我的身份</Text>
          <View className='radio-box flex-between'>
            {
              identityList.map(item => <View
                className={cx({
                  'radio': true,
                  'active': identity === item.value
                })}
                onClick={e => changeIdentity(item.value)}
              >
                {item.text}
              </View>)
            }
          </View>
        </View>
        <View className='property flex-between'>
          <Text>参加工作时间</Text>
          <Picker mode='date'
                  fields='month'
                  value={joinTime}
                  onChange={e => changeWorkTime(e)}>
            {joinTime}
          </Picker>
        </View>
        <View className='property flex-between'>
          <Text>出生年月</Text>
          <Picker mode='date'
                  fields='month'
                  value={birthday}
                  onChange={e => changeBirthday(e)}
          >
            {birthday}
          </Picker>
        </View>
        <View className='law-tip'>
          <AtIcon value='alert-circle' size='14' color='#787878' />
          {lawTip}
        </View>
        <View className='property flex-between'>
          <Text>微信号</Text>
          <AtInput
            name='wxNumber'
            type='text'
            placeholder='微信号'
            value={wxNumber}
            onChange={changeWxNumber}
          />
        </View>
        <View className='property flex-between'>
          <Text>邮箱</Text>
          <AtInput
            name='email'
            type='text'
            placeholder='选填邮箱(选填)'
            value={email}
            onChange={changeEmail}
          />
        </View>
      </View>
      <View className='btn-box'>
        <View className='save-btn'>保存</View>
      </View>
    </View>
  )
}
