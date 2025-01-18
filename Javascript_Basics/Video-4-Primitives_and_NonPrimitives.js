// What all values we can store in JS ?? 


// Offical document of Ecamscript -  https://262.ecma-international.org/10.0/index.html#sec-ecmascript-data-types-and-values

// The ECMAScript language types are Undefined, Null, Boolean, String, Symbol, Number, and Object.


// Number - 10 , -3 , 2.6 , 3.44 , 100 , 1000 , etc 

var x = 10;

// String - "Sanket" or 'Aditya' or `Some text` 

var name = "sanket";


// Boolean - true , false            // Generally means 0 / 1  

var cond = true;

// undefined - Something not defined yet but maybe defined later 
// for ex : 

var status = undefined;


// objects 

// if we have to somehow store key value pairs then we can use objects 



/* <key , value>

{

    name : Sanket,
    company :google,
    position:"Software Engineer",
    

} */

/*
    {
        name:"Iphone",
        cost:130000,
        color:"purple",
        discount:5,
        description:"the new apple iphone"
    } */


// So wherever there is a situation where we have to store key value pair where we can show complex entities that's going to be done using a JS 
// object 

// When you say that an object is formed by combining  multiple simple properties for example: 

// if you want to create an object then this key value pairs are somehow somewhat going to be of numbers, strings ,or maybe some boolean 
// but to define a boolean you don't need anything else right boolean doesn;t depend on number and number doesn;t depend on boolean or string and 



// This simple properties are defined by types called primitive datatype 
// So there are two types of datatypes 

// Primitive Datatype - Types which are atomic in nature i.e They doesn't depend on anyone else They can exist themselves
// Ex: number, 

// Non-Primitive Datatype - Types which are composition of other types 
//Ex: Object 

// To create an object we have to depend on other primitive data types 