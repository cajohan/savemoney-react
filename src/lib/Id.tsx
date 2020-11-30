let id = 0;

class Id {
  value: number;

  frank(){
    return this.value + 10000; //(new Id).frank()
  }

  constructor() {
    id += 1;
    this.value = id;
  } //使用方法：(new Id).value替换createId()
}

export {Id};