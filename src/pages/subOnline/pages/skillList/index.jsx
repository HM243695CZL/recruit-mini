import React, {useState} from 'react';
import { View, Text, Button } from '@tarojs/components'
import { AtIcon, AtModal, AtModalContent, AtModalAction, AtInput } from 'taro-ui';
import Taro from '@tarojs/taro';
import cx from 'classnames';
import './index.less'

export default function SkillList(){
  const [selectedSkill, setSelectedSkill] = useState([
    { text: 'JavaScript', value: 'JavaScript'},
    { text: 'Vue', value: 'Vue'},
    { text: 'React', value: 'React'},
  ]);
  const [selectableList] = useState([
    {
      title: '计算机语言方向',
      list: [
        { text: 'CSS', value: 'CSS'},
        { text: 'SQL', value: 'SQL'},
        { text: 'JavaScript', value: 'JavaScript'},
        { text: 'CSS3', value: 'CS3S'},
        { text: 'HTML', value: 'HTML'},
        { text: 'HTML5', value: 'HTML5'},
      ]
    },
    {
      title: '前端框架',
      list: [
        { text: 'JQuery', value: 'JQuery'},
        { text: 'Vue', value: 'Vue'},
        { text: 'React', value: 'React'},
        { text: 'Angular', value: 'Angular'},
        { text: 'Bootstrap', value: 'Bootstrap'},
      ]
    }
  ]);
  const [isOpened, setIsOpened] = useState(false);
  const [tagName, setTagName] = useState('');
  const [customTag, setCustomTag] = useState([]);
  const deleteSkill = data => {
    selectedSkill.map((item, index) => {
      if (item.value === data.value) {
        selectedSkill.splice(index, 1);
      }
    });
    setSelectedSkill([...selectedSkill]);
  };
  const clickTag = data => {
    let arr = [];
    selectedSkill.map(item => {
      arr.push(item.value);
    });
    if (arr.includes(data.value)) {
      selectedSkill.map((item, index) => {
        if (item.value === data.value) {
          selectedSkill.splice(index, 1);
        }
      });
      setSelectedSkill([...selectedSkill]);
    } else {
      setSelectedSkill([...selectedSkill, {...data}])
    }
  };
  const showModal = () => {
    setIsOpened(true);
  };
  const closeModal = () => {
    setIsOpened(false);
    setTagName('');
  };
  const clickConfirm = () => {
    let arr = [];
    customTag.map(item => {
      arr.push(item.value);
    });
    selectedSkill.map(item => {
      arr.push(item.value);
    });
    if (arr.includes(tagName)) {
      Taro.showToast({
        title: '标签已存在',
        icon: 'none',
        duration: 2000
      });
      return false;
    }
    setCustomTag([...customTag, {
      text: tagName,
      value: tagName
    }]);
    setSelectedSkill([...selectedSkill, {
      text: tagName,
      value: tagName
    }]);
    closeModal();
  };
  const changeTagName = tagNameValue => {
    setTagName(tagNameValue);
  };
  return (
    <View className='skill-list-container'>
      <View className='skill-box'>
        <View className='head'>
          <View className='title'>拥有技能</View>
          <View className='tip'>最多选择5个</View>
        </View>
        <View className='selected-item-box'>
          <Text className='tip'>已选</Text>
          <View className='selected-item'>
            {
              selectedSkill.map(item => {
                return (
                  <View className='item-list'>
                    {item.text}
                    <AtIcon
                      onClick={e => deleteSkill(item)}
                      value='close' className='close-icon'
                      size='10' color='#36c1ba'
                    />
                  </View>
                )
              })
            }
          </View>
        </View>
        <View className='selectable-box'>
          {
            selectableList.map(item => {
              return (
                <View className='selectable-list'>
                  <View className='list-title'>{item.title}</View>
                  <View className='type-list'>
                    {
                      item.list.map(ele => {
                        let arr = [];
                        selectedSkill.map(e => {
                          arr.push(e.value);
                        });
                        return (
                          <View className='type' onClick={e => clickTag(ele)}>
                            <View className={cx({
                              'item': true,
                              'active': arr.includes(ele.value)
                            })}>{ele.text}</View>
                          </View>
                        )
                      })
                    }
                  </View>
                </View>
              )
            })
          }
        </View>
        <View className='custom-tag-box flex-start'>
          {
            customTag.map(item => {
              let arr = [];
              selectedSkill.map(e => {
                arr.push(e.value);
              });
              return (
                <View className='type' onClick={e => clickTag(item)}>
                  <View className={cx({
                    'item': true,
                    'active': arr.includes(item.value)
                  })}>{item.text}</View>
                </View>
              )
            })
          }
          <Text className='custom-btn' onClick={e => showModal()}>
            <AtIcon className='add-icon' value='add' size='10' color='#36c1ba' />
            自定义
          </Text>
        </View>
      </View>
      <View className='btn-box'>
        <View className='save-btn'>保存</View>
      </View>
      <AtModal
        isOpened={isOpened}
        closeOnClickOverlay={false}
      >
        <AtModalContent>
          <View className='tag-modal-box'>
            <View className='modal-title'>标签名称，不超过6个字</View>
            <AtInput
              name='tagName'
              value={tagName}
              type='text'
              placeholder='输入标签名称'
              maxLength='6'
              onChange={changeTagName}
            />
          </View>
        </AtModalContent>
        <AtModalAction>
          <Button onClick={e => closeModal()}>取消</Button>
          <Button onClick={e => clickConfirm()}>保存</Button>
        </AtModalAction>
      </AtModal>
    </View>
  )
}
