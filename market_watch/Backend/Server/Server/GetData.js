const router = require('express').Router();
const dt  = require('../ApiEnum');
const axios = require('axios');
const redis = require('redis');
const client = redis.createClient('redis:http://127.0.0.1:6379/')

const  data = dt.FundamentalEnum();
const items = Object.keys(data);

//console.log(items[0])

const me = []

async  function SetRedis(element,data) 
 {


  client.on('error', (err) => console.log('Redis Client Error', err));

  //await client.connect();

   client.setEx(`${element}`,600, JSON.stringify(data));
  //const value = await client.get('key');
}
async function GetData (){  

  await client.connect()
  /* for (let index = 0; index < items.length; index++) {
    //const element = array[index];
    
   */
  items.forEach((element,val) => {
    let test =  data[element];
    test.forEach((el)=>{

     // console.log(el[1]) 
      axios.get(`${el[1]}`).then(function (response) {
        console.log(response.data)
         SetRedis(element,response.data)
         //client.setex(`${element}`, 600, JSON.stringify(response.data));
  
        
     
      }).catch(error=>{
          console.error(error)
      });

    })
    
    
   
    /*
 */
    })
  //}

  //client.setex('USD', 600, JSON.stringify(users));
          
  console.log('Users retrieved from the API');
 
}

async function  getData_Redis (){
  client.connect()

try {
  client.get('USA', (err, data) => {

    if (err) {
      console.error(err);
      throw err;
    }

    if (data) {
      console.log('Users retrieved from Redis');
      console.log(JSON.parse(data));
    } 
  });
} catch (err) {
  console.error(err.message) 
}
  /*   console.log(client.exists('USA'))
    try {
        
   //const value =client.get('key');
   await client.get('USA', (err, data) => {

        if (err) {
            console.error(err);
            throw err;
          }
          if (data) {
            console.log(JSON.parse(data))
          }
     
       

    })

} catch (err) {
    console.log('my error'+{ error: err.message });
  } */
}
GetData()
getData_Redis()


