import {test} from "@playwright/test"

test.beforeAll("before all",()=>{
    console.log("data base connection");
    
})


test.afterAll("After all",()=>{
    console.log("disconnect data base");
    
})


test.beforeEach("before each",()=>{
    console.log("log-in");
    
})


test.afterEach("after each",()=>{
    console.log("log-out");
    
})

test("test1",()=>{
    console.log("test -1");
    
})

test("test2",()=>{
    console.log("test -2");
    
})