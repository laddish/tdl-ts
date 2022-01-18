// Tuple to Object easy
// by sinoon @sinoon

// Take the Challenge    简体中文 日本語 한국어

// Give an array, transform into an object type and the key/value must in the given array.

// For example

/**
 * as const 转为常量 readonly 无法被修改
 */
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple>
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

//keyof array => 索引
//我们转换的时候，如果遇到数组中的值不能做对象的键，期望报错。
type TupleToObject<T extends readonly (string | symbol | number)[]> = {
  [P in T[number]]: P
}

type error = TupleToObject<[[1, 2], {}]>
//js
/**
 * 1.返回一个对象
 * 2.遍历数组 T[number]
 * @param array 
 * @returns 
 */

function TupleToObject(array) {
  const obj = {}

  array.forEach(val => {
    obj[val] = val
  });

  return obj
}



