import {test} from "@playwright/test"
import { log } from "node:console"

//!Annotations
//?We are adding some extra label

/**
 * skip
 * only
 * fixme
 * fail
 * describe
 * slow
 */

test.fixme("test1",async()=>{
    console.log("test 1"); 
})

test.skip("test2",async()=>{
    console.log("test 2"); 
})

test("test3",async()=>{
    test.slow()
    console.log("test 3"); 
})

test("test4",async()=>{
    console.log("test 4"); 
})

test("test5",async()=>{
    console.log("test 5");       //in describe we can not use fixtures
})

test.describe.skip("test7",async()=>{
    console.log("test 7");
    test("df",async({page})=>{})
    test("cv",()=>{})
    test("xc",()=>{})
})