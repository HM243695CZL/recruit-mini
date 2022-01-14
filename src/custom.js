const navList = [
  {
    type: 'normal',
    iconPath: 'static/img/home.png',
    selectedIconPath: 'static/img/home-select.png',
    pagePath: 'pages/index/index',
    text: '找工作'
  },
  {
    type: 'admin',
    iconPath: 'static/img/category.png',
    selectedIconPath: 'static/img/category-select.png',
    pagePath: 'pages/recruit/index',
    text: '我要招聘'
  },
  {
    type: 'normal',
    iconPath: 'static/img/user.png',
    selectedIconPath: 'static/img/user-select.png',
    pagePath: 'pages/user/index',
    text: '个人信息'
  }
];
module.exports = {
  navList
};
