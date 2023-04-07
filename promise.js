const posts=[
    { title:'Post One', body:'This is Post One'},
    { title:'Post Two', body:'This is Post Two'},
    { title:'Post Three', body:'This is Post Three'},
    { title:'Post Four', body:'This is Post Four'}
];
function getPost(){
    console.log(posts)
    setTimeout(() =>{
        let output='';
        posts.forEach((post,index)=> {
            output +=`<li key='${index}'>${post.title}</li>`;
       });
       
        document.body.innerHTML=output;

    },1000);
}
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error=false;
            if(!error){
                resolve();
            }else{
                reject('Error:Something went wrong');
            }
        },2000);
    });
}
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.values !==0){
                resolve(posts.pop());
               
                getPost()
            }else{
                    reject('Array is empty now');
                }
        },1000);
    });
}
function updateLastUserActivityTime(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastActivityTime = new Date().getTime();
           
            resolve();

        },1000);
    });
}

const user={lastActivityTime : new Date().getTime() };
const promis1=[createPost({title:'Post Five',body:'This is Post Five'}),
                updateLastUserActivityTime(user)];
Promise.all(promis1)
    .then(()=>{
        getPost()
        console.log("Last activity time:", user.lastActivityTime);
        deletePost()
        
    })
    .catch((error)=>{
        console.log(error)
    })
    


   
