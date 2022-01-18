import React, { useState } from 'react';
import { View, Text, Image } from '@tarojs/components'
import { AtIcon, AtTag, AtFloatLayout } from 'taro-ui';
import Taro from '@tarojs/taro';
import './index.less'

export default function Online(){
  const [advantageList] = useState([
    '适应潜力强。一般来说，我对生活和环境的适应潜力比较强，不怎么挑剔适应潜力强。'
  ]);
  const [isOpened, setIsOpened] = useState(false);
  const [statusList] = useState([
    { text: '离职-随时到岗', value: 1 },
    { text: '在职-月内到岗', value: 2 },
    { text: '在职-考虑机会', value: 3 },
    { text: '在职-暂不考虑', value: 4 },
  ]);
  const [currentStatus, setCurrentStatus] = useState(1);
  const clickPersonInfo = () => {
    Taro.navigateTo({
      url: '/pages/subOnline/pages/personInfo/index'
    })
  };
  const clickPersonAdvantage = () => {
    Taro.navigateTo({
      url: '/pages/subOnline/pages/personAdvantage/index'
    })
  };
  const clickJobStatus = () => {
    setIsOpened(true);
  };
  const changeStatus = item => {
    setCurrentStatus(item.value);
    closeLayout();
  };
  const closeLayout = () => {
    setIsOpened(false);
  };
  const clickJobExcept = type => {
    Taro.navigateTo({
      url: '/pages/subOnline/pages/jobExcept/index?type=' + type
    })
  };
  const clickJobExperience = type => {
    Taro.navigateTo({
      url: '/pages/subOnline/pages/workExperience/index?type=' + type
    })
  };
  const clickProjectExperience = type => {
    Taro.navigateTo({
      url: '/pages/subOnline/pages/projectExperience/index?type=' + type
    })
  };
  const clickEduExcept = type => {
    Taro.navigateTo({
      url: '/pages/subOnline/pages/eduExperience/index?type=' + type
    })
  };
  const clickPreviewResume = () => {
    Taro.navigateTo({
      url: '/pages/subOnline/pages/onlineResume/index'
    })
  };
  return (
    <View className='online-container'>
      <View className='box'>
        <View className='user-info flex-between' onClick={clickPersonInfo}>
          <View className='left'>
            <View className='head'>
              <Text className='user-name'>张三</Text>
              <AtIcon value='edit' size='16' color='#000' />
            </View>
            <Text className='exp'>3年经验 · 25岁 · 本科</Text>
          </View>
          <Image className='img-avatar' src='https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
        </View>
        <View className='person-advantage' onClick={clickPersonAdvantage}>
          <View className='head flex-between'>
            <Text className='advantage'>个人优势</Text>
            <AtIcon value='edit' size='16' color='#000' />
          </View>
          {
            advantageList.map((item, index) => <View className='advantage-list'>{index + 1}. {item.slice(0, 30)}...</View>)
          }
        </View>
        <View className='job-status flex-between' onClick={clickJobStatus}>
          <Text className='job-head'>求职状态</Text>
          <View className='status-want'>
            <Text className='status-want-txt'>
              {
                statusList.filter(item => item.value === currentStatus)[0].text
              }
            </Text>
            <AtIcon value='chevron-right' size='16' color='#787878' />
          </View>
        </View>
        <View className='job-except'>
          <View className='head flex-between'>
            <View className='left'>
              <Text className='except'>求职期望</Text>
              <AtIcon value='help' size='16' color='#000' />
            </View>
            <AtIcon value='add-circle' size='16' color='#000' onClick={e => clickJobExcept('add')} />
          </View>
          <View className='station-info' onClick={e => clickJobExcept('edit')}>
            <View className='flex-between'>
              <View className='salary'>
                web前端 <Text className='text'>22-25K</Text>
              </View>
              <AtIcon value='chevron-right' size='16' color='#787878' />
            </View>
            <View className='place'>
              贵阳
              <Text className='type'>互联网</Text>
            </View>
          </View>
        </View>
        <View className='work-experience'>
          <View className='head flex-between'>
            <Text className='experience'>工作经历</Text>
            <AtIcon value='add-circle' size='16' color='#000' onClick={e => clickJobExperience('add')}/>
          </View>
          <View className='experience-list' onClick={e => clickJobExperience('edit')}>
            <View className='title flex-between'>
              <Text className='company-name'>某某某股份有限公司</Text>
              <View className='duration'>
                <Text className='duration-txt'>2019.07-至今</Text>
                <AtIcon value='chevron-right' size='16' color='#787878' />
              </View>
            </View>
            <View className='station-name'>web前端</View>
            <View className='content'>
              内容：1.首先要写清楚题目，工作方案的题目要言简意赅。要写清楚一个印文，主要写了什么，
              要做什么工作。2.指导思想， 就是在什么精神的统领下开展工作，工作任务有哪些工作小组，
              每个小组的负责人是谁，要完成哪些工作
            </View>
            <View className='skill-tag'>
              <AtTag>JavaScript</AtTag>
              <AtTag>Vue.js</AtTag>
              <AtTag>React</AtTag>
            </View>
          </View>
        </View>
        <View className='project-experience'>
          <View className='head flex-between'>
            <Text className='experience'>项目经历</Text>
            <AtIcon value='add-circle' size='16' color='#000' onClick={e => clickProjectExperience('add')} />
          </View>
          <View className='experience-list' onClick={e => clickProjectExperience('edit')}>
            <View className='title flex-between'>
              <Text className='company-name'>某某某分析系统</Text>
              <View className='duration'>
                <Text className='duration-txt'>2019.07-至今</Text>
                <AtIcon value='chevron-right' size='16' color='#787878' />
              </View>
            </View>
            <View className='station-name'>前端开发工程师</View>
            <View className='content'>
              内容：通过看你的简历或者你的介绍来了解你所做的项目，那么面试官肯定想更
              详细的了解你的项目，看是不是与你的简历写的项目经验一直。也就是考核你是否具有
              真实的项目经验。
            </View>
          </View>
        </View>
        <View className='edu-experience'>
          <View className='head flex-between'>
            <View className='left'>
              <Text className='except'>教育经历</Text>
            </View>
            <AtIcon value='add-circle' size='16' color='#000' onClick={e => clickEduExcept('add')} />
          </View>
          <View className='station-info' onClick={e => clickEduExcept('edit')}>
            <View className='flex-between'>
              <View className='salary'>
                某某某大学
              </View>
              <View className='time'>
                2014-2018
                <AtIcon value='chevron-right' size='16' color='#787878' />
              </View>
            </View>
            <View className='place'>
              某某某专业
              <Text className='type'>本科</Text>
            </View>
          </View>
        </View>
        <View className='preview-resume-btn' onClick={e => clickPreviewResume()}>预览我的简历</View>
      </View>
      <View className='generator-btn'>
        <View className='btn-text'>生成简历</View>
      </View>
      <AtFloatLayout
        isOpened={isOpened}
        onClose={e => closeLayout()}
      >
        <View className='layout-container'>
          <View className='title'>求职状态</View>
          {
            statusList.map(item => <View className='status-list' onClick={e => changeStatus(item)}>{item.text}</View>)
          }
          <View className='cancel' onClick={e => closeLayout()}>取消</View>
        </View>
      </AtFloatLayout>
    </View>
  )
}
