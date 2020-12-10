const User = require('../modules/users')


// 自执行异步函数

!(async () => {
  // // 创建用户
  // const a = await User.create({
  //   username: 'xiaoming1',
  //   password: '123456',
  //   realname: '小明1'
  // })

  // 查询
  // const list = await User.find();
  // console.log(list);

  // 模拟登陆
  const data = await User.find(
    {
      username: 'zhangsan',
      password: '123'
    }
  )
  console.log(data)

})()