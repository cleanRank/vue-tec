class commonFun{
  constructor(){
    this.name="zhushaoneng";
    this.age=21;
  }
  init(){
    return "name"+this.name+"age"+this.age;
  }
}
export {commonFun}
export function add(x){
  return x+1;
}