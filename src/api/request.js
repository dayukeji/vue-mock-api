// axios版本最新版V1.1.3有问题，header报错, V0.26.1无问题

import axios from 'axios'
const mockMap = require('../api/mock')

const instance = axios.create({
  adapter: config => {
    if(mockMap[config.url] && IS_MOCK){
      return Promise.resolve({
        data: mockMap[config.url],
        status: 200
        }
      )
    }
    delete config.adapter
    console.log('11111 config',config)
    return axios(config)
  }
})
instance.defaults.baseURL = "/api"

export default instance
