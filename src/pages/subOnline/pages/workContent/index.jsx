import React, { useState } from 'react';
import { View, Text } from '@tarojs/components'
import { AtTextarea } from 'taro-ui';
import Taro, { useReady} from '@tarojs/taro';
import './index.less'

export default function WorkContent(){
  const [content, setContent] = useState('工作内容是指劳动者具体从事什么种类或劳动的内容，是劳动合同确定劳动者应当履行劳动义务的主要内容');
  const [textareaHeight, setTextareaHeight] = useState(100);
  const changeContent = contentValue => {
    setContent(contentValue);
  };
  useReady(() => {
    const container = Taro.createSelectorQuery().select('#workContentBox').boundingClientRect();
    const btnRef = Taro.createSelectorQuery().select('#btnRef').boundingClientRect();
    container.exec(function (res) {
      btnRef.exec(function (btnRes) {
        const height = res[0].height - btnRes[0].height - 30 * 2;
        setTextareaHeight(height * 2);
      })
    })
  });
  return (
    <View className='work-content-container' id='workContentBox'>
      <View className='work-content-box'>
        <AtTextarea
          value={content}
          onChange={changeContent}
          maxLength={200}
          placeholder='介绍工作内容'
          autoFocus={true}
          focus={true}
          height={textareaHeight}
        />
      </View>
      <View className='btn-box' id='btnRef'>
        <View className='save-btn'>保存</View>
      </View>
    </View>
  )
}
