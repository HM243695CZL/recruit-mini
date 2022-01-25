import React, { useState } from 'react';
import {View, Text, Image, Map, CoverView} from '@tarojs/components'
import { AtIcon, AtSteps  } from 'taro-ui';
import Taro from '@tarojs/taro';
import './index.less'

export default function AppointInfo(){
  const items = [
    { 'title': '接收面试', 'desc': '即将面试，此时不能取消', status: 'success' },
    { 'title': '面试中', 'desc': '正在面试' },
    { 'title': '面试结果', 'desc': '完成面试可询问面试结果' }
  ];
  const [list] = useState(items);
  const [current] = useState(1);
  const customMarkers = [
    {
      id: 2,
      latitude: 23.097994,
      longitude: 113.32352,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      id: 3,
      latitude: 23.096994,
      longitude: 113.32452,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      }
    }
  ];
  const mapMarkers = [
    // ...customMarkers,
    {
      id: 1,
      latitude: 23.096994,
      longitude: 113.324520,
      callout: {
        content: '某某公司',
        color: '#ff0000',
        fontSize: 14,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#000000',
        bgColor: '#fff',
        padding: 5,
        display: 'ALWAYS',
        textAlign: 'center',
      }
    }
  ];
  const clickStation = () => {
    Taro.navigateTo({
      url: '/pages/subpackages/pages/stationInfo/index'
    })
  };
  return (
    <View className='appoint-info-container'>
      <View className='head' />
      <View className='info-box'>
        <View className='content-box'>
          <View className='company-info flex-between'>
            <Image className='company-icon' src='https://img1.baidu.com/it/u=1461158162,3281682659&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
            <View className='name'>
              <View className='title'>方图智能的面试邀请</View>
              <View className='hr-info flex-start'>
                <Image className='hr-avatar' src='https://img1.baidu.com/it/u=1925715390,133119052&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400' mode='aspectFill' />
                孔女士 · 人事
              </View>
            </View>
          </View>
          <View className='info-list'>
            <View className='item flex-start'>
              <View className='key'>时间</View>
              <View className='value'>
                2022-01-15 10:30
              </View>
            </View>
            <View className='item flex-start' onClick={clickStation}>
              <View className='key'>职位</View>
              <View className='value flex-between'>
                <Text>前端高级工程师，22-25K</Text>
                <AtIcon value='chevron-right' size='20' color='#787878' />
              </View>
            </View>
            <View className='item flex-start'>
              <View className='key'>联系人</View>
              <View className='value flex-start'>
                孔女士
                <View className='call'>
                  <AtIcon value='phone' size='20' color='#36c1ba' />
                  呼叫
                </View>
              </View>
            </View>
            <View className='item flex-start'>
              <View className='key'>地址</View>
              <View className='value'>
                中国大陆
              </View>
            </View>
            <View className='map-box'>
              <Map
                setting={{}}
                markers={mapMarkers}
                latitude={23.096994}
                longitude={113.324520}
                style={{ height: '120px', width: '100%' }}
              >
                <CoverView slot='callout'>
                  {
                    customMarkers.map(item => (
                      /** 自定义样式的 callout */
                      <CoverView marker-id={item.id} key={item.id} >
                        <View>导航{item.id}</View>
                      </CoverView>
                    ))
                  }
                </CoverView>
              </Map>
            </View>
            <View className='item flex-start'>
              <View className='key'>备注</View>
              <View className='value'>
                请携带简历
              </View>
            </View>
          </View>
        </View>
        <View className='process'>
          <View className='title'>面试进度</View>
          <AtSteps
            items={list}
            current={current}
          />
        </View>
      </View>
    </View>
  )
}
