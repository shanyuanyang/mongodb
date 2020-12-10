const Blog = require('../modules/blog')


// 自执行异步函数

!(async () => {
  // 创建博客
  const a = await Blog.create({
    title: '新建111',
    content: '内容11',
    author: '新名11'
  })

  // 查询
  // const list = await Blog.find(
  //   {
  //     // title: /2/ //正则表达式  模糊查询
  //     author: '张三'
  //   }
  // ).sort({ _id: -1 });
  // console.log(list);

  // 根据id查询
  // const a = await Blog.findById('5fd1e10a75c25b4bdc2207a3');
  // console.log(a)

  // 修改
  // const res = await Blog.findByIdAndUpdate(
  //   { _id: '5fd1e10a75c25b4bdc2207a3' }, //条件
  //   { content: '修改1修改1修改1修改1' },
  //   { new: true }
  // )
  // console.log(res);

  // // 删除
  // const res = await Blog.findByIdAndDelete(
  //   {
  //     _id: '5fd1e10a75c25b4bdc2207a3',
  //     author: '111' //验证一下
  //   }
  // )
  // console.log(res)
})()