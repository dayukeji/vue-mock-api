const express = require('express')
const app = express();
app.use(express.json());
const mockMap = require('./src/api/mock')


const requestFilter = (req, res, next) => {
  const { path,method } = req;
  // 设置相应头 处理中文乱码
  res.set('Content-Type', 'text/plain')
  // 404 提前过滤
  if (!mockMap[path]) {
    res.status(404).end();
  }
  // 请求方法不匹配提前过滤
  if(method !== mockMap[path].config?.method ?? 'GET'){
    res.status(405).end('请检查请求方法是否正确!')
  }


  if(mockMap[path].config && mockMap[path].config.validator){
    const data = mockMap[path].config.validator(req)
    if(data.status !== 200){
      res.status(data.status).end(data.msg);
    }
  }

  setTimeout(() => {next()}, mockMap[path].config.delay ?? 0)
}

app.all("*", requestFilter, async (req, res, next) => {
  const { path } = req;
  const { code,data,message } = mockMap[path]
  res.send({ code,data,message });
});

app.listen('3306', () => {
  console.log("serve is running at port 3306");
})
