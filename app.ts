const n1=document.getElementById('num1') as HTMLInputElement; 
const n2=document.getElementById('num2')as HTMLInputElement;
const buttonElement=document.querySelector('button')!;

//creating arrays using generics
const numResults:Array<number>=[];
const textResults:string[]=[];


//using type for alias//union
type NumOrString=number|string;
type Result={
    val:number;
    timeStamp:Date
};


//creating interfaces
interface ResultObj{
    val:number,
    timeStamp:Date
}


function add(num1:NumOrString,num2:NumOrString){
if(typeof num1==='number' && num2==='number')
return num1+num2;
else{
    if(typeof num1==='string' && num2==='string')
    return num1+''+num2;
}
return +num1 + +num2;
}

// //usage of Objects can define it is object and also the keys and there types
// function result(resultObj: Result) {
//     console.log(`result ${resultObj.val} at ${resultObj.timeStamp}`);
//   }


function printResult(resultObj:{
    val:number,
    timeStamp:Date;
}){
    console.log(resultObj.val);
}
buttonElement?.addEventListener('click',()=>{
    const num1=n1.value;
    const num2=n2.value;
    const result=add(+num1,+num2);
     numResults.push(result as number);
     const stringResults=add(num1,num2);
     textResults.push(stringResults as string);
     printResult({
        val:result as number,
        timeStamp:new Date()
     })
     console.log(numResults,textResults);
})


//cresting promises
const promise=new Promise<string>((resolve,reject)=>{
setTimeout(()=>{
    resolve('it worked')
}),1000
})
promise.then(result=>{
    console.log(result.split('w'))
}).catch(err=>{
    console.log(err);
})


