import { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>,
    {
      tesla: 'tesla';
      'model 3': 'model 3';
      'model X': 'model X';
      'model Y': 'model Y'
    }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

/**
 * const let js世界
 * type interface type世界
 * 两个平行世界
 * 
 * typeof 
 * 可以帮助我们把js世界的东西转化为ts类型世界
 * 
 */