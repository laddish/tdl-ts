// Pick：从类型定义的属性中，选取指定一组属性，返回一个新的类型定义。

// 源码：

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 例子：

interface User {
  name: string;
  age?: number;
  class?: string;
  sex: string;
}

type OnlyName = MyPick<User, "name">;

let a: OnlyName = { name: "a" };
