const MongoClient = require('mongodb').MongoClient;


const url = "mongodb://localhost:27017";
const dbName = "myblog";


MongoClient.connect(
  url,
  {
    // 配置
    useUnifiedTopology: true

  },
  (err, client) => {
    if (err) {
      console.log('mongodb connect err', err)
      return
    }

    // 没有报错 说明连接成功
    console.log('mongodb connect success')

    // 切换到数据库  （use myblog）
    const db = client.db(dbName);
    // 使用集合
    const usersCollection = db.collection('users')

    // 新增
    // const a = {
    //   username: 'xiaoming',
    //   password: '123456',
    //   realname: '小明'
    // }
    // usersCollection.insertOne(a, (err, result) => {
    //   if (err) {
    //     console.log('users insert err', err)
    //     return
    //   }
    //   console.log(result)
    //   client.close()
    // })


    // 修改
    // const b = { username: 'lisi' };
    // const c = { $set: { realname: '李四1' } };
    // usersCollection.updateOne(b, c, (err, result) => {
    //   if (err) {
    //     console.log('users updateOne err', err)
    //     return
    //   }
    //   console.log(result)
    //   client.close()
    // })

    // 删除
    // usersCollection.deleteOne({ username: 'xiaoming' }, (err, result) => {
    //   if (err) {
    //     console.log('users deleteOne err', err)
    //     return
    //   }
    //   console.log(result)
    //   client.close()
    // })

    // 查询
    const sel = {}
    // const sel = { "username": "lisi" }
    usersCollection.find(sel).toArray((err, result) => {
      if (err) {
        console.log('users find err', err)
        return
      }
      console.log(result)
      // 关闭连接
      client.close();
    })

    // 关闭连接
    // client.close();
  }
)
