import { navList } from './custom';
const flag = 'admin'; // admin normal
export default {
  pages: [
    'pages/index/index',
    'pages/recruit/index',
    'pages/user/index',
  ],
  subpackages: [
    {
      'root': 'pages/subpackages',
      'pages': [
        'pages/stationInfo/index',
        'pages/stationSearch/index',
        'pages/chooseCity/index',
        'pages/online/index',
        'pages/enclosure/index',
        'pages/appointment/index',
        'pages/appointInfo/index',
        'pages/collection/index',
        'pages/advise/index',
        'pages/previewEnclosure/index',
        'pages/communicateRecord/index',
      ]
    },
    {
      'root': 'pages/subOnline',
      'pages': [
        'pages/personInfo/index',
        'pages/personAdvantage/index',
        'pages/jobExcept/index',
        'pages/workExperience/index',
        'pages/projectExperience/index',
        'pages/eduExperience/index',
        'pages/onlineResume/index',
        'pages/stationType/index',
        'pages/industryType/index',
        'pages/workContent/index',
        'pages/skillList/index',
      ]
    }
  ],
  tabBar: {
    color: '#000',
    selectedColor: '#ff6146',
    list: flag === 'admin' ? navList : navList.filter(ele => ele.type !== 'admin')
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#36c1ba',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  }
}
