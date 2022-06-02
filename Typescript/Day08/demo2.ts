
//Functions that return multiple values (JS interview Question)

function Airthmathic(a:number,b:number){
  return [ a+b,a-b,a*b];
}

let [add,sub,mul]=Airthmathic(5,3);

console.log(`
      Addition      ${add}
      Substraction  ${sub}
      Multiplication ${mul}
`)
