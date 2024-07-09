const obj1={
    name:"object 1 creation",
    objnum:1,
    action:function(){
        return "object 1 function return value";
    }
};
 console.log("const obj2=Object.create(obj1); create obj 2 inheritance");
const obj2=Object.create(obj1);
console.log("methods creation in obj");
obj2.array=["one",2,true];
console.log(obj2.array[0]);
console.log("calling objnum  and action using obj2");
console.log(obj2.objnum);
console.log(abj2.action())
console.log("changing function value in obj1 using obj2");
obj2.action=function(){
    return "rename function value in obj1 to obj2";
}
