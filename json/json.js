const infoPerson = {
        id:11,
        name:"kadir",
        info:{
            phone: 1111
        }

}
const jsonUser = JSON.stringify(infoPerson);
console.log(jsonUser, typeof(jsonUser))
const jsonArray =JSON.parse(jsonUser)
console.log(jsonArray, typeof(jsonArray))