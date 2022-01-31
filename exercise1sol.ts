// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 1 – Basic Types
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • Annotate primitive types, arrays, and 'any' types
// • Identify when type checking happens
// • Afterwards we will analyze transpiler output

 
  {
   
   
    let pi = 3.14159;//remove string type
    let tau = pi * 2;
    
    console.log('[Exercise 1.1]', `${tau} is ${pi} times two.`);
  

  
    let pie:string;//assign a type
    pie = 'blueberry';
  
    console.log('[Exercise 1.2]', `I like to eat ${pie}-flavored pie.`);

    let isMark: boolean=true;//assign a value
  
    console.log('[Exercise 1.3]', `${isMark ? 'Oh, hi Mark' : 'Who are you?'}`);
  
    const integer:number = 6;//assign type 
    const float:number = 6.66;//assign a type 
    const hex:number = 0xf00d;//assign a type 
    const binary:number= 0b1010011010;//assign a type 
    const octal:number = 0o744;//assign a type 
    const negZero:number = -0;//assign a type 
    const actuallyNumber:number = NaN;//assign a type 
    const largestNumber:number = Number.MAX_VALUE;//assign a type 
    const mostBiglyNumber:number = Infinity;//assign a type 
  
    const members: number[] = [
      integer,
      float,
      hex,
      binary,
      octal,
      negZero,
      actuallyNumber,
      largestNumber,
      mostBiglyNumber
    ];
  
    members[0] = 12345;
  
    console.log('[Exercise 1.4]', members);
  
  
   /* const sequence:number[]= Array.from(Array(10).keys());//assign a type 
    const animals:string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];//assign a type 
    const stringsAndNumbers:(string|number)[] = [1, 'one', 2, 'two', 3, 'three'];//assign a type and different type also there
    const allMyArrays:(string|number)[][] = [sequence, animals, stringsAndNumbers];//assign a type and 2D array
  
    console.log('Exercise 1.5', allMyArrays);*/

  
    const inventoryItem :[string,number]= ['fidget wibbit', 11];//assign a type 
    const [name, qty] = inventoryItem;
  
    
    function addInventory(name: string, quantity: number): string {
      return `Added ${quantity} ${name}s to inventory.`;
    }
    const msg = addInventory(name, qty);//change the place after declaration
  
    console.log('[Exercise 1.6]', msg);
  
  }
