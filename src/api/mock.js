module.exports = {

  // 出参mock
  '/products':{
    code:0,
    data:[{
      id:1,
      name:'商品1'
    }],
    message:'success',

    // 入参mock
    config:{
      method:'GET',
      delay: 1000,
      validator:(request)=>{
        const error = {
          status:400,
          msg:'请检查参数是否合法!'
        }
        const success = {
          status:200,
          msg:'success'
        }
        // 假设该请求需要一个必传参数 timestamp
        return !request.query.timestamp ? success : error
      },
    }
  },
}
