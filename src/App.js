import axios from "axios";

//1 idli sine gore bilgilerini ve postlarini getirir
async function getUser(number){
  const {data} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)

  const {data: post} = await axios( "https://jsonplaceholder.typicode.com/post/" + number)

  try {
    console.log(data, post)
  } catch (error) {
    console.log(error)
  }

}
//export ederek fonksiyonumuzu disari acariz

export default getUser;

