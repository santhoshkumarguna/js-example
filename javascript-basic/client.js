const axios=require ('axios')

const data=async()=>{

    await axios.get ('http://localhost:5000/swapi')
    .then(res=>console.log(res.data))
    .catch(err=>console.log())
}

data()

// https://swapi.dev/api/