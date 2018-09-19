不能从父亲还是代理（如果代理儿子时会将代理后的结果挂在父级上，那此时会触发伏击的set方法）
/倒着克隆，从最底层开始代理，吧大力后结果挂载父亲
gunction deepProxy(obj){
    for(let key in obj){
        let val =obj[key];
        if(typeof val === 'object'){
            obj[key]=deepProxy(val)
        }
    }
    //setProxy 深度代理
}
let proxy=deepProxy(obj)
//Reflect对象与Proxy对象一样，也是Es6为了操作对象二提供的新的API，Reflect对象的设计目的有这样几个
//变量提升
//函数关键字声明
let q=(1,2,3,4)//4 会把括号的最后一个值赋给这个变量

//arrowFn 语法糖
//箭头函数 this 指向 arguments
//去掉fucntion关键字
//去掉return 和{}
let a=function（a,b）{
    return a+b;
}
//arguments 类数组函数自带 箭头函数没有
let a（...arguments）=》{

}
//私有属性放在构造函数内，，共有方法放在prototype中
//es5中的构造函数，我们就叫类
function Animal(type){
    this.type
={t:type}
}
Animal.prototype.eat=function(type){
    this.type
={t:type}
}
function Cat(Type){
    Animal.call(this,type)
}
//3、继承实例上和原型上的方法
Ca

//让父类在子类中执行，并且this指向子类

class Animal{
    a=1;//es7 this.a=1
    constructor(type){
        this.type=type;
    }
    //原型上的
    eat(){
        console.log("吃")
    }
}
//super中的this指向的就是
//let t= new Animal('类型');
//t.__proto__.eat();

let Cat=function(Parent){
    _in
}

//装饰器 mobx react库
//装饰器模式 包装
//装饰器能使用在哪里 类上使用包装类 包装原型上的方法 包装类中的属性
//不能包装函数 @es7
//babel-preset-env 解析es6定案，能够编译的模块更少，
//babel-peset-stage-0  babel-peset-stage-1 数字越大能编译的范围越广
//babel-cli babel转化的一个插件 scrips 通过babel 15.decor.js -o test.js -w(监控、边写边生成)
//babel-plugin-transform-decorator-legacy 编译装饰器
//类的属性
class Circle{
    @readonly PI=3.14
}
function readonly(target,pro[erty,descriptor]){
    //除了类 其他的装饰器第一个参数永远lei类的原型
}
//原型上的方法
class Person{
    @add
    eat(){

    }
}
let obj={};
Object.setProperty(obj,"aaa",{
    value:
})
function add(target,key,description){
    let oldEat=description.value;
    description.value=function(){
        console.log("start");
        oleEat();
        console.log("end");
    }
}
let p=new Person();
p.eat();

let set =new Set([1,2,3,4,3,2,1]);
console.log([...set])
console.log(set.has(1))

let arr=[1,2,4];
let arr2=[4,5,3];
//求并集
function union(){
    return new Set([...arr1,arr2]);

}
union(arr1,arr2);

//交集
function insection(arr1,arr2){
    let set1=new Set(arr1);
    let set2=new Set(arr2);
    return [...set1].filter(item=>set.has(item));
}
insection(arr1,arr2)
//差集
function defference(arr1,arr2){
    let set1=new Set(arr1);
    let set2=new Set(arr2);
    return [...set1].filter(item =>!set.has(item))

}
//Map
let map=new Map();
map.set('js',"123");
map.set("node","123")
map.forEach(item=>{
    console.log(item)
})
//filter 过滤 forEach 循环 map 映射 reduce 收敛 some every
let arr=[1,2,3,4,'5'];
arr.reduce((prev,next,currentIndex,arr)=>{
    return prev+next
})
let keys=[""]
//Nest ts基于后端的框架
function

//for in 取值
//for of 取object的key值
//symbol 数据的第7类型
number、string、boolean、null、undefined、object
let s=Sysmbol();
s.for("zhpx")
/
eventLoop
//前端 浏览器eventLoop
//node 部分 事件环
//浏览器eventLoop js 单线程
//计算机分配任务和调度任务的基本单位
//进程里可以包含线程
//js中 他是主线程时单线程的(setTimeout 异步)
//浏览器是多进程，进程包含线程
//ajax、onclick、setTimeOut 为一部时间

//栈先进后出
//异步的方法也会进行再度分类
//宏任务（大setTimeout、） 微任务(Prmise.then)
//setTimeout 先把微任务执行完 浏览器事件换的机制，会先清空微任务
//取出一个宏任务执行，执行哇后，会再次清空微任务，之后再执行宏任务。

<script>
    let worker=new Worker('./web.js')
    worker.sendMessage(2000);
    console.log('hellow');

</script>
worker.onmessage=function(){

}
MessageChannel
webwork

onmessage=function(e){
    let sum=0;
    worker.message=function(e){
        console.log()
    }    
}
@flag
class Animal{

}
function flag(target){
    target.flag="动物"
}
console.log(target.flag)

function coffee(){
    //创造coofee
}
function sweetCoofee(){
    console.log("sweet")
}

//Animal();
//只能new 这个类才能实现
l
