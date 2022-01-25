export default {
  pages: [
    'pages/index/index',
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
        'pages/projectDescription/index',
      ]
    }
  ],
  tabBar: {
    color: '#000',
    selectedColor: '#ff6146',
    list: [
      {
        iconPath: 'static/img/home.png',
        selectedIconPath: 'static/img/home-select.png',
        pagePath: 'pages/index/index',
        text: '找工作'
      },
      {
        iconPath: 'static/img/user.png',
        selectedIconPath: 'static/img/user-select.png',
        pagePath: 'pages/user/index',
        text: '个人信息'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#36c1ba',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  }
}
