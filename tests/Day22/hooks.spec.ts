import {test} from "@playwright/test"

test.beforeAll("",async()=>{
    console.log("before all");
    
})

test.beforeEach("",async()=>{
    console.log("before each");
    
})

test("test 1",async()=>{
    console.log("test 1");
    
})

test("test 2",async()=>{
    console.log("test 2");
    
})

// test("test 3",async()=>{
//     console.log("test 3");
    
// })

test.afterAll("",async()=>{
    console.log("After all");
    
})

test.afterEach("",async()=>{
    console.log("After Each");
    
})