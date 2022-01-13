import React, { useState } from 'react';
import { View, Text, Textarea, Image } from '@tarojs/components'
import { AtIcon, AtInput } from 'taro-ui';
import './index.less'

export default function Advise(){
  const [val, setVal] = useState('');
  const [alreadyImg] = useState([1, 2]);
  const [connectVal] = useState('');
  return (
    <View className='advise-container'>
      <Textarea
        className='textarea-box'
        value={val}
        placeholder='请填写10个字以上的问题描述以便我们提供更好的帮助'
        style={{
          height: '140px'
        }}
        maxlength={200}
      />
      <View className='screen-shot'>
        <View className='head'>
          截图({alreadyImg.length}/3)
        </View>
        <View className='file-list'>
          <View className='already-img flex-start'>
            {
              alreadyImg.map(item => {
                return (
                  <View className='img-box'>
                    <Image className='img'
                           src='https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400'
                           mode='aspectFill' />
                  </View>
                )
              })
            }
            {
              alreadyImg.length < 3 && <View className='upload'>
                <AtIcon value='add' size='20' color='#787878'  />
              </View>
            }
          </View>
        </View>
      </View>
      <View className='connect'>
        <AtInput
          name='connect'
          title='联系方式'
          type='text'
          placeholder='邮箱/手机号'
          value={connectVal}
        />
      </View>
      <View className='sub-btn'>
        <View className='sub'>提交</View>
      </View>
    </View>
  )
}
