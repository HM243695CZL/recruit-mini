import React, {useState} from 'react';
import { View, Text } from '@tarojs/components'
import {AtTextarea} from 'taro-ui';
import Taro, { useReady} from '@tarojs/taro';
import './index.less'

export default function ProjectDescription(){
  const [projectDesc, setProjectDesc] = useState('讲一讲项目的基本概况，讲一讲项目的名称，项目的目的，开发的时间、地点，完成的时限，投入多少钱等等');
  const [textareaHeight, setTextareaHeight] = useState(100);
  const changeProjectDesc = projectDescValue => {
    setProjectDesc(projectDescValue);
  };
  useReady(() => {
    const container = Taro.createSelectorQuery().select('#projectDescBox').boundingClientRect();
    const btnRef = Taro.createSelectorQuery().select('#btnRefProject').boundingClientRect();
    container.exec(function (res) {
      btnRef.exec(function (btnRes) {
        const height = res[0].height - btnRes[0].height - 30 * 2;
        setTextareaHeight(height * 2);
      })
    })
  });
  return (
    <View className='project-description-container' id='projectDescBox'>
      <View className='project-desc-box'>
        <AtTextarea
          value={projectDesc}
          onChange={changeProjectDesc}
          maxLength={200}
          placeholder='介绍工作内容'
          autoFocus={true}
          focus={true}
          height={textareaHeight}
        />
      </View>
      <View className='btn-box' id='btnRefProject'>
        <View className='save-btn'>保存</View>
      </View>
    </View>
  )
}
