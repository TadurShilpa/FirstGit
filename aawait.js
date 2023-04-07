console.log('person1 : shows ticket');
console.log('person2 : shows ticket');

const preMovie=async()=>{
    const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000);
    });
const getPopcorn=new Promise((resolve,reject)=>{
    setTimeout(() =>resolve(`popcorn`) , 3000);
});

const addButter=new Promise((resolve,reject)=> {
    setTimeout(() =>resolve(`butter`) , 3000);
});

const getColdDrinks=new Promise((resolve,reject)=> {
    setTimeout(() =>resolve(`colddrinks`) , 3000);
});
let ticket = await promiseWifeBringingTicks;
    console.log(`wife: i have the ${ticket}`);
    console.log(`husband: we should go in`);
    console.log(`wife : no i m hungry`);

let popcorn = await getPopcorn;
    console.log(`husband : i got some ${popcorn}`);
    console.log(`husband : we should go in`);
    console.log(`wife : i need butter on my popcorn`);

let butter = await addButter;
    console.log(`husband : i got some ${butter} on popcorn`);
    console.log(`husband : anything else darling ?`);
    console.log(`wife : let go we are getting late`);
    console.log(`husband : thankyou for the reminder *grins*`)

let colddrinks = await getColdDrinks;
    console.log(`wife : get some ${colddrinks} for me`);
    console.log(`husband : we should go in we will be late `);
    console.log(`wife : i need cold drinks`);
    
    let ticket1 = await promiseWifeBringingTicks;
    let [ popcorn1, butter1, coldrinks1 ] =
    await Promise.all([ getPopcorn, addButter, getColdDrinks  ]);

    console.log(`got ${popcorn}, ${butter}, ${colddrinks}`);

    
    
    return ticket1;
}
preMovie().then((t) => console.log(`person4 shows ${t}`));
    
    
    
    
 