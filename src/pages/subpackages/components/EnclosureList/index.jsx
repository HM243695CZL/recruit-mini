import React, { useState } from 'react';
import {View, Text} from '@tarojs/components';
import { AtIcon, AtActionSheet, AtActionSheetItem } from 'taro-ui';
import Taro from '@tarojs/taro';
import './index.less'
export default function EnclosureList(props) {
  const [isOpened, setIsOpened] = useState(false);
  const showSheet = () => {
    setIsOpened(true);
  };
  const hideSheet = () => {
    setIsOpened(false);
  };
  const clickEnclosure = () => {
    Taro.navigateTo({
      url: '/pages/subpackages/pages/previewEnclosure/index'
    })
  };
  return (
    <>
      <View className='enclosure-list flex-between'>
        <View className='left flex-start' onClick={clickEnclosure}>
          <AtIcon value='file-jpg' size='40' color='#787878' />
          <View className='info'>
            <Text className='enclosure-name'>我的简历.jpg</Text>
            <Text className='detail'>
              649.9KB 2021.04.08 08:50 上传
            </Text>
          </View>
        </View>
        <AtIcon onClick={showSheet} value='settings' size='20' color='#787878' />
      </View>
      <AtActionSheet
        isOpened={isOpened}
        cancelText='取消'
        onClose={hideSheet}>
        <AtActionSheetItem onClick={hideSheet}>
          删除附件
        </AtActionSheetItem>
      </AtActionSheet>
    </>
  )
}
