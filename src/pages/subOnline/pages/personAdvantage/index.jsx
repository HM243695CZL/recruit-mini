import React, { useState } from 'react';
import { View, Text } from '@tarojs/components'
import { AtTextarea } from 'taro-ui';
import Taro, { useReady } from '@tarojs/taro';
import './index.less'

export default function PersonAdvantage(){
  const [advantage, setAdvantage] = useState('适应潜力强。一般来说，我对生活和环境的适应潜力比较强，不怎么挑剔适应潜力强。');
  const [textareaHeight, setTextareaHeight] = useState(100);
  const changeAdvantage = advantageValue => {
    setAdvantage(advantageValue);
  };
  useReady(() => {
    const container = Taro.createSelectorQuery().select('#personAdvantageBox').boundingClientRect();
    const advantageHeadRef = Taro.createSelectorQuery().select('#advantageHeadRef').boundingClientRect();
    const btnRef = Taro.createSelectorQuery().select('#btnRef').boundingClientRect();
    let heightObj = {};
    container.exec(function (res) {
      heightObj.containerH = res[0].height;
      advantageHeadRef.exec(function (advRes) {
        heightObj.advantageH = advRes[0].height;
        btnRef.exec(function (btnRes) {
          heightObj.btnH = btnRes[0].height;
          // 30：.content的paddingTop值 30*2：.advantage-box的padding值
          const finalH = heightObj.containerH - heightObj.advantageH - heightObj.btnH - 30 - 30 * 2;
          setTextareaHeight(finalH * 2);
        });
      });
    });
  });
  return (
    <View className='person-advantage-container' id='personAdvantageBox'>
      <View className='advantage-box'>
        <View className='head' id='advantageHeadRef'>
          <View className='title'>我的优势</View>
          <View className='tip'>一句话介绍自己，突出核心优势</View>
        </View>
        <View className='content'>
          <AtTextarea
            value={advantage}
            onChange={changeAdvantage}
            maxLength={200}
            placeholder='介绍自己的优势'
            autoFocus={true}
            focus={true}
            height={textareaHeight}
          />
        </View>
      </View>
      <View className='btn-box' id='btnRef'>
        <View className='save-btn'>保存</View>
      </View>
    </View>
  )
}
