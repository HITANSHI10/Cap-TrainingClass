import {test,expect} from "@playwright/test"

test("Shpopers stack",async({request})=>{

    //SHOPPER LOGIN
    let r1=await request.post('https://www.shoppersstack.com/shopping/users/login',{
        data:{
    "email":"hitanshijain.it26@gmail.com",
    "password":"Hitanshi@123",
    "role":"SHOPPER"
    },ignoreHTTPSErrors:true,
    })
    
    let body=await r1.json()
    console.log(body);
    expect(r1.status()).toBe(200);
  
    let token=body.data.jwtToken
    expect(body.data.jwtToken).toBeTruthy();
    console.log("Token:",token);
    let shopper_id=body.data.userId
    expect(body.data.userId).toBeTruthy();
    console.log(shopper_id);
    
    //PRODUCT
    let r2=await request.get('https://www.shoppersstack.com/shopping/products/alpha',
        {
        headers:{
            Authorization:`Bearer ${token}`
        },ignoreHTTPSErrors: true
        }
    )
    const body1=await r2.json()
    //console.log(body1);
    let product_id=body1.data[0].productId
    console.log(product_id);

    //WISHLIST POST
    let r3=await request.post(`https://www.shoppersstack.com/shopping/shoppers/${shopper_id}/wishlist`,{
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            productId: product_id,
            quantity: 1
        },ignoreHTTPSErrors:true
    }    
)

    const body2=await r3.json()
    console.log(body2);

    //WISHLIST GET
    let r4=await request.get(`https://www.shoppersstack.com/shopping/shoppers/${shopper_id}/wishlist`,{
        headers:{
            Authorization:`Bearer ${token}`
        },ignoreHTTPSErrors:true
    })

    expect(r4.status()).toBe(200);
    const body3=await r4.json()
    console.log(body3);

    //CARTS POST
    let r5=await request.post(`https://www.shoppersstack.com/shopping/shoppers/${shopper_id}/carts`,{
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            productId: product_id,
            quantity: 2
        },ignoreHTTPSErrors:true
    }    
)

    const body4=await r5.json()
    console.log(body4);

    //CARTS GET
    let r6=await request.get(`https://www.shoppersstack.com/shopping/shoppers/${shopper_id}/carts`,{
        headers:{
            Authorization:`Bearer ${token}`
        },ignoreHTTPSErrors:true
    })

    expect(r6.status()).toBe(200);
    const body5=await r6.json()
    console.log(body5);
    const item_id=body5.data[0].itemId
    console.log(item_id);

    //ADDRESS POST
    let r7=await request.post(`https://www.shoppersstack.com/shopping/shoppers/${shopper_id}/address`,{
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            "addressId": 101,
            "buildingInfo": "Flat 302, Sunrise Apartments",
            "city": "Jaipur",
            "country": "India",
            "landmark": "Near City Palace",
            "name": "Rahul Sharma",
            "phone": "+91-9876543210",
            "pincode": "432101",
            "state": "Rajasthan",
            "streetInfo": "MI Road",
            "type": "Home"
        },ignoreHTTPSErrors:true
    }    
)
    const body6=await r7.json()
    console.log(body6);
    const address_id=await body6.data.addressId
    console.log(address_id);
    
    //ADDRESS GET
    let r8=await request.get(`https://www.shoppersstack.com/shopping/shoppers/${shopper_id}/address/${address_id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        },ignoreHTTPSErrors:true
    })

    expect(r8.status()).toBe(200);
    const body7=await r8.json()
    console.log(body7);

    //ORDERS POST
    let r9=await request.post(`https://www.shoppersstack.com/shopping/shoppers/${shopper_id}/orders`,{
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
        "address": {
            "addressId": address_id,
            "buildingInfo": "string",
            "city": "string",
            "country": "string",
            "landmark": "string",
            "name": "string",
            "phone": "string",
            "pincode": 432101,
            "state": "string",
            "streetInfo": "string",
            "type": "string"
    },
    "paymentMode": "COD"

    },ignoreHTTPSErrors:true
    }    
)
    const body8=await r9.json()
    console.log(body8);

    //ORDERS GET
     let r10=await request.get(`https://www.shoppersstack.com/shopping/shoppers/${shopper_id}/orders`,{
        headers:{
            Authorization:`Bearer ${token}`
        },ignoreHTTPSErrors:true,
    })

    expect(r10.status()).toBe(200);
    const body9=await r10.json()
    console.log(body9);
    let order_id=await body9.data[0].orderId
    let transaction_id=await body9.data[0].transactionId
    console.log(order_id);
    console.log(transaction_id);

    //REVIEW POST
    let r11=await request.post(`https://www.shoppersstack.com/shopping/reviews`,{
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            "dateTime": "2026-03-28T06:56:24.724Z",
            "description": "hii",
            "heading": "hii",
            "rating": 4,
            "shopperId": shopper_id,
            "shopperName":"hii"
        },ignoreHTTPSErrors:true,params:{
            productId:product_id
        }
    }    
)
    expect(r11.status()).toBe(200);
    const body10=await r11.json()
    console.log(body10);
    const review_id=await body10.data.reviewId
    console.log(review_id);

    //REVIEW GET
     let r12=await request.get(`https://www.shoppersstack.com/shopping/reviews/${product_id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        },ignoreHTTPSErrors:true,
    })

    expect(r12.status()).toBe(200);
    const body11=await r12.json()
    console.log(body11);
    
})