import {test} from "@playwright/test"

test("basic api",async({request})=>{
    //let apiContext=await request.newContext()

    let r1=await request.post('https://petstore.swagger.io/v2/pet',{
        data:{
            id:51,
            name:"dog",
            status:"available"
        }
    })

    console.log(r1);
    //console.log((await r1.json()).name);
    
    let r2=await request.get('https://petstore.swagger.io/v2/pet/51')
    const body=await r2.json()
    console.log(body);

    let r3=await request.put('https://petstore.swagger.io/v2/pet/51',{
        data:{
            "id": 51,
            "name": "doggie",
            "photoUrls": []
        }
    })

    console.log(r3.json);
    
    
})