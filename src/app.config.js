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
        'pages/chooseCity/index'
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
        iconPath: 'static/img/category.png',
        selectedIconPath: 'static/img/category-select.png',
        pagePath: 'pages/recruit/index',
        text: '我要招聘'
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
