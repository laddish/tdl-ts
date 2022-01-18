// // Tuple to Object easy
// // by sinoon @sinoon

// // Take the Challenge    简体中文 日本語 한국어

// // Give an array, transform into an object type and the key/value must in the given array.

// // For example

// /**
//  * as const 转为常量 readonly 无法被修改
//  */
// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}


// /**
//  * js 世界如何去实现
//  * 
//  */

// type r = typeof tuple

// //type r = readonly ["tesla", "model 3", "model X", "model Y"]

// /**
//  * 1. 字面量类型
//  *    为const去服务
//  */
// let str = "123"
// type s = typeof str //type s = string

// const strConst = "234" // const 是一个常量  不可以改变
// type sc = typeof strConst //说明sc 是不可以被修改的 
// //type sc = "234"

