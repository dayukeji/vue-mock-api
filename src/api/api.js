import request from './request'

export const getProducts = ()=>{
  return request.get('products')
}
