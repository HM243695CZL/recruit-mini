import React, { useState } from 'react';
import {View, Text, Image} from '@tarojs/components'
import cx from 'classnames';
import {AtIcon, AtTag} from 'taro-ui';
import './index.less'

export default function OnlineResume(){
  const [personEvaluate] = useState(`1.性格开朗，工作认真负责，细心，有很强的职责心和进取心，头脑零花，不怕吃苦，理解潜力强，能够很好的处理同事关系，具有强烈的团队合作精神，并能够承担必须的工作压力
2.做事踏实认真，能吃苦耐闹；学习潜力强，能够很快的理解新事物；性格开朗，诚实正直，谦和自信，乐于进取乐于奉献，勤奋好学，用心上进，有较强的社会适应潜力。
3.工作踏实，认真细致，具有强烈的事业心和工作职责心，善于处理人际关系，具有极佳的团队合作精神。`);
  const [isShow, setIsShow] = useState(false);
  const [isShowAllProject, isSetShowAllProject] = useState(false);
  const [workList] = useState([1, 2]);
  const [projectList, setProjectList] = useState([1, 2, 3]);
  const showAll = () => {
    setIsShow(true);
  };
  const showAllProject = () => {
    isSetShowAllProject(true);
    setProjectList([...projectList, 4, 5]);
  };
  const personIntroClass = cx('person-intro', isShow ? '' : 'truncation');
  return (
    <View className='online-resume-container'>
      <View className='user-info flex-between'>
        <View className='left'>
          <View className='head'>
            <Text className='user-name'>张三</Text>
          </View>
          <Text className='station'>web前端 · 腾讯</Text>
        </View>
        <Image className='img-avatar' src='https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
      </View>
      <View className={personIntroClass}>
        <View className='job-status'>在职-暂不考虑</View>
        <View className='person-info flex-start'>
          <AtIcon className='icon' value='calendar' size='20' color='#787878' /> 3年经验
          <AtIcon className='icon' value='bell' size='20' color='#787878' /> 本科
          <AtIcon className='icon' value='credit-card' size='20' color='#787878' /> 25岁
        </View>
        <View className='person-evaluate'>
          <View className='evaluate-list'>{personEvaluate}</View>
        </View>
        {
          !isShow && <View className='show-all' onClick={e => showAll()}>显示全部</View>
        }
      </View>
      <View className='job-except person-item'>
        <View className='head'>求职期望</View>
        <View className='station-info flex-between'>
          <View className='station-name'>前端开发工程师 · 贵阳</View>
          <View className='salary'>22-25K</View>
        </View>
        <View className='station-type'>互联网</View>
      </View>
      <View className='work-experience person-item'>
        <View className='head'>工作经历</View>
        {
          workList.map(item => {
            return (
              <View className='experience-list'>
                <View className='title flex-between'>
                  <Text className='company-name'>某某某股份有限公司-{item}</Text>
                  <Text className='duration'>2019.07-至今</Text>
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
            )
          })
        }
      </View>
      <View className='project-experience person-item'>
        <View className='head'>项目经历</View>
        {
          projectList.map(item => {
            return (
              <View className='experience-list'>
                <View className='title flex-between'>
                  <Text className='company-name'>某某某分析系统-{item}</Text>
                  <Text className='duration'>2019.07-至今</Text>
                </View>
                <View className='station-name'>web前端</View>
                <View className='content'>
                  内容：通过看你的简历或者你的介绍来了解你所做的项目，那么面试官肯定想更
                  详细的了解你的项目，看是不是与你的简历写的项目经验一直。也就是考核你是否具有
                  真实的项目经验。
                </View>
              </View>
            )
          })
        }
        {
          !isShowAllProject &&  <View className='show-all-project flex-between' onClick={e => showAllProject()}>
            <Text className='txt'>展开全部项目经历</Text>
            <AtIcon value='chevron-down' size='20' color='#787878' />
          </View>
        }
      </View>
      <View className='edu-experience person-item'>
        <View className='head'>教育经历</View>
        <View className='station-info'>
          <View className='flex-between'>
            <View className='station-name'>
              某某某大学
            </View>
            <View className='time'>
              2014-2018
            </View>
          </View>
          <View className='major'>
            本科 · 某某某专业
          </View>
        </View>
      </View>
    </View>
  )
}
