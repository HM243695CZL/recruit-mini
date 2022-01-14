import React, { useState } from 'react';
import { View, Text, Image } from '@tarojs/components'
import { AtGrid, AtInput, AtButton } from 'taro-ui';
import Taro from '@tarojs/taro';
import './index.less'

export default function communicateRecord(){
  const [val, setVal] = useState('');
  const [gridList] = useState([
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      value: '打电话'
    },
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      value: '换微信'
    },
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      value: '发简历'
    },
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      value: '不感兴趣'
    }
  ]);
  const [messageList, setMessageList] = useState([
    {
      time: '13:35',
      type: 'send',
      text: '你好，我对前端开发工程师的岗位感兴趣，希望和你了解一下！',
      isRead: true
    },
    {
      type: 'receive',
      text: '好的，我们这边巴拉巴拉。。。',
    },
    {
      type: 'send',
      text: '我熟悉巴拉巴拉。。。，曾经做过某某项目，使用的技术是。。。',
      isRead: true
    },
    {
      time: '13:50',
      type: 'receive',
      text: '你的简历挺合适的，你明天下午可以来公司面试吗？'
    },
    {
      type: 'send',
      text: '当然可以，请问我需要准备哪些东西呢',
      isRead: false
    }
  ]);
  const changeInput = value => {
    setVal(value);
  };
  const sendMessage = () => {
    const hours = new Date().getHours() >= 10 ? new Date().getHours() :
      '0' + new Date().getHours();
    const minute = new Date().getMinutes() >= 10 ? new Date().getMinutes() :
      '0' + new Date().getMinutes();
    let now =`${hours}:${minute}`;
    let time;
    if (messageList[messageList.length - 1].sendTime) {
      // 超过两分钟没有消息传输，则下一条显示发送时间
      const lastHour = parseInt(messageList[messageList.length - 1].sendTime.split(':')[0]);
      const lastMinute = parseInt(messageList[messageList.length - 1].sendTime.split(':')[1]);
      if (lastHour >= hours) {
        time = minute - 2 > lastMinute ? now : ''
      }
    } else {
      time = now;
    }
    setMessageList([...messageList, {
      sendTime: now,
      time: time,
      type: 'send',
      text: val,
      isRead: false
    }]);
    const boxRef = Taro.createSelectorQuery().select('#communicateBoxRef').boundingClientRect();
    boxRef.exec(function (res) {
      Taro.pageScrollTo({
        duration: 300,
        scrollTop: res[0].height
      })
    });
    setVal('');
  };
  return (
    <View className='communicate-record-container' id='communicateBoxRef'>
      <View className='grid-box'>
        <AtGrid
          hasBorder={false}
          columnNum={4}
          data={gridList}
        />
      </View>
      <View className='message-list-box'>
        {
          messageList.map(item => {
            if (item.type === 'send') {
              return (
                <View className='list-item'>
                  {
                    item.time && <View className='time'>{item.time}</View>
                  }
                  <View className='send-box'>
                    <View className='send-message'>
                      <View className='message'>{item.text}</View>
                      <Image className='img-avatar' src='https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
                    </View>
                    <Text className='status'>{item.isRead ? '已' : '未'}读</Text>
                  </View>
                </View>
              )
            } else {
              return (
                <View className='list-item'>
                  {
                    item.time && <View className='time'>{item.time}</View>
                  }
                  <View className='receive-box'>
                    <View className='receive-message'>
                      <Image className='img-avatar' src='https://img1.baidu.com/it/u=1925715390,133119052&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
                      <View className='message'>{item.text}</View>
                    </View>
                  </View>
                </View>
              )
            }
          })
        }
      </View>
      <View className='send-message-input flex-between'>
        <AtInput
          name='sendMessage'
          type='text'
          placeholder='新信息'
          value={val}
          onChange={changeInput}
         />
        <AtButton type='primary' size='small' onClick={sendMessage}>发送</AtButton>
      </View>
    </View>
  )
}
