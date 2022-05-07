"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[4200],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=i,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61106:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={title:"Chapter 7 - Functions",sidebar_position:7},s=void 0,u={unversionedId:"intro-to-C/c07-functions",id:"intro-to-C/c07-functions",title:"Chapter 7 - Functions",description:"Learning Goals",source:"@site/docs/intro-to-C/c07-functions.md",sourceDirName:"intro-to-C",slug:"/intro-to-C/c07-functions",permalink:"/intro-to-C/c07-functions",editUrl:"https://github.com/carobot/carobot.github.io/tree/main/docs/intro-to-C/c07-functions.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Chapter 7 - Functions",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Chapter 6 - Arrays",permalink:"/intro-to-C/c06-arrays"},next:{title:"Chapter 8 - Data Conversion",permalink:"/intro-to-C/c08-data-conversions"}},c=[{value:"Learning Goals",id:"learning-goals",children:[],level:2},{value:"What is a Function?",id:"what-is-a-function",children:[],level:2},{value:"Application Of A Function/Why A Function Is Useful",id:"application-of-a-functionwhy-a-function-is-useful",children:[],level:2},{value:"Initialize A Function:",id:"initialize-a-function",children:[],level:2},{value:"Functions With Parameter",id:"functions-with-parameter",children:[],level:2},{value:"Example Activity",id:"example-activity",children:[],level:2},{value:"Your Turn!",id:"your-turn",children:[],level:2}],p={toc:c};function h(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"learning-goals"},"Learning Goals"),(0,r.kt)("p",null,"By the end of this tutorial, you should be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understand what a function is "),(0,r.kt)("li",{parentName:"ul"},"Initialize a function "),(0,r.kt)("li",{parentName:"ul"},"Create a reusable and modular function"),(0,r.kt)("li",{parentName:"ul"},"Send values to a function through a parameter ")),(0,r.kt)("h2",{id:"what-is-a-function"},"What is a Function?"),(0,r.kt)("p",null,"A function is a piece of code that you can name, which then can be called multiple times throughout your program without having to re-write the code stated in the function. Functions are also used to allow access to other objects of a class to access and set data. In Arduino\u2019s case we can use functions to save time and prevent repetition of code. "),(0,r.kt)("h2",{id:"application-of-a-functionwhy-a-function-is-useful"},"Application Of A Function/Why A Function Is Useful"),(0,r.kt)("p",null,"Functions are useful overall as they make your code look clean, are more efficient in terms of saving time programming redundant code, and are very powerful!"),(0,r.kt)("h2",{id:"initialize-a-function"},"Initialize A Function:"),(0,r.kt)("p",null,"Functions have a ",(0,r.kt)("strong",{parentName:"p"},"return type")," such as int, String, boolean, char, Integer, or can have no return type which is just void. A return type indicates that the result of the function will be with the same type as the return type."),(0,r.kt)("p",null,"Functions are indicated a ",(0,r.kt)("strong",{parentName:"p"},"return type"),", a ",(0,r.kt)("strong",{parentName:"p"},"name")," (your choice in camel case), round brackets for the ",(0,r.kt)("strong",{parentName:"p"},"parameter")," (can store variables or can be empty), surrounded with curly brackets with code in between them."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Initialize a Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void countdownTen(){\n    for(int i = 10; i >= 0; i\u2013){\n        System.out.println(i);\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Call a Function"),"\nWhen calling a function you would just call its name and enter values that need to go into the parameter. In this example the function we created did not take any parameters so we just keep the brackets empty. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"countdownTen();\n")),(0,r.kt)("p",null,"The countdownTen function that we initialized above will be called and will perform the code that is written in the function. In this example the function will ALWAYS countdown from ten as this is the intended purpose of the function created. "),(0,r.kt)("h2",{id:"functions-with-parameter"},"Functions With Parameter"),(0,r.kt)("p",null,"A function with a parameter is when you can send data through variable into the function. For example, if you want to recieve data of the number of times to turn an LED on and off you want to hold that data somewhere. The parameter is the perfect place to do that."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Initialize a Function WITH Parameter")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void flash(int numFlash){\n    for(int i = 0; i < numFlash; i++){\n        digitalWrite(13,HIGH);\n        delay(1000);\n        digitalWrite(13,LOW);\n        delay(1000);\n    }\n}\n")),(0,r.kt)("p",null,"*",(0,r.kt)("strong",{parentName:"p"},"*Note:**")," You can have a function with multiple varibles in the parameter. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EX: void apple(int quantity, String name, double weight){...}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Call a Function WITH Parameter")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"flash(5);\n")),(0,r.kt)("p",null,"Since we have passed the number 5 in the paramter the function will use the value 5 for where ever numFlash is called. Keep in mind that this value is now stored only for the call of this function, and will be erased once the function has done its job. You will never be able to access this variable outside of the function since this varible is only initialized within the perimeter of the function. "),(0,r.kt)("h2",{id:"example-activity"},"Example Activity"),(0,r.kt)("p",null,"In this example we will create a program that displays numbers 0-9 on a seven segment display. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(37625).Z,width:"300",height:"209"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")," Create an array for the LED's (the different lines on the seven segment). As well create an array that holds the value of which lights should be one for each number."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'int LED_PIN[]={11,10,7,8,9,12,13};\n\n//0,1,2,3,4,5,6,7,8,9\n//LEDs that should be on for to display each number\nChar *DIGIT[]={"1111110","0110000","1101101","1111001","0110011","1011011","1011111","1110000","1111111","1111011"};\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:")," Initialize the pins in the 'setup' loop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void setup() {\n  //sets up leds in pins 7-13\n  for(int i=7; i<=13; i++) {\n    pinMode(i, OUTPUT);\n  }  \n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3:")," Lets create a clear function! "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This function will turn off all the LED's so we can print on a new number"),(0,r.kt)("li",{parentName:"ul"},"This function will be a return type of void since we are not returning anything"),(0,r.kt)("li",{parentName:"ul"},"We need not values either so the parameters will just be empty"),(0,r.kt)("li",{parentName:"ul"},"For the command of the function we can loop through all the LED's and turn them off using ",(0,r.kt)("strong",{parentName:"li"},"digitalWrite(pin#, LOW);"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"//turns off all the leds that were originally on\nvoid clearAll() { \n  for(int i=0; i<7; i++) {\n    digitalWrite(LED_PIN[i], LOW);\n  } \n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4:")," Lets create another function!!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In this function we will be recieving an int from the parameter of the number to display"),(0,r.kt)("li",{parentName:"ul"},"The return type is void as there is nothing to return"),(0,r.kt)("li",{parentName:"ul"},"Using the array we created in the begining that holds all the values of which LEDs to turn on(",(0,r.kt)("strong",{parentName:"li"},"DIGIT"),"), we can take that value and store it in a newly created varible(",(0,r.kt)("strong",{parentName:"li"},"str"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NOTE:")," this newly created varible can only be accessed from inside this function when it is running ONLY. Once the function has done its job everything is erased. "),(0,r.kt)("li",{parentName:"ul"},"Next we will loop through ",(0,r.kt)("strong",{parentName:"li"},"str")," and turn on or off the LED's based on whether the corresponding value is 1 or 0"),(0,r.kt)("li",{parentName:"ul"},"This process will loop through 7 times due to the 7 LED's that are on the seven segment")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void displayDigit(int digit) {\n  char* str = DIGIT[digit];\n  for(int i=0; i<7; i++) {\n    if(str[i]=='1'){\n      digitalWrite(LED_PIN[i], HIGH);\n    } else {\n      digitalWrite(LED_PIN[i], LOW);\n    }\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5:")," Now that we have all the tools we need, lets put it together!! Since we are displaying the digits 0 though 9 we can use a for loop for that. Inside we can call our displayDigit() function and pass though i in the parameter. Add a delay for 1 second, clear the seven segment, and finally delay for 200 milliseconds. And you are done!! "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"//displays numbers 0-9 between 1 second intervals\nvoid loop() {\n  for(int i=0; i<=9; i++) {\n    displayDigit(i);\n    delay(1000);\n    clearAll();\n    delay(200);\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Full Code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'//7 segment displays numbers 0 through 9\n\nint LED_PIN[]={11,10,7,8,9,12,13};\n\n//0,1,2,3,4,5,6,7,8,9\n//LEDs that should be on for to display each number\nChar *DIGIT[]={"1111110","0110000","1101101","1111001","0110011","1011011","1011111","1110000","1111111","1111011"};\n\n\nvoid setup() {\n  //sets up leds in pins 7-13\n  for(int i=7; i<=13; i++) {\n    pinMode(i, OUTPUT);\n  }  \n}\n\n//turns off all the leds that were originally on\nvoid clearAll() {\n  for(int i=0; i<7; i++) {\n    digitalWrite(LED_PIN[i], LOW);\n  } \n}\n\n//displays specified digit on LED screen\nvoid displayDigit(int digit) {\n  char* str = DIGIT[digit];\n  for(int i=0; i<7; i++){\n    if(str[i]==\'1\') {\n      digitalWrite(LED_PIN[i], HIGH);\n    } else {\n      digitalWrite(LED_PIN[i], LOW);\n    }\n  }\n}\n\n//displays numbers 0-9 between 1 second intervals\nvoid loop() {\n  for(int i=0; i<=9; i++) {\n    displayDigit(i);\n    delay(1000);\n    clearAll();\n    delay(200);\n  }\n}\n\n')),(0,r.kt)("h2",{id:"your-turn"},"Your Turn!"),(0,r.kt)("p",null,"Try following the example code to get a feel for creating and using function, both with and without paramters!!"),(0,r.kt)("p",null,"On your own try:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an SOS signal on an LED",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a function that takes a paramter for the number of times the LED should flash and for how long"),(0,r.kt)("li",{parentName:"ul"},"Use that function to signal 3 short flashes, then 3 long, and finally 3 short again")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," You can call the function more than once!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OR Change a previous project of yours and see if you can simplify the code by adding functions!")))}h.isMDXComponent=!0},37625:function(e,t,n){t.Z=n.p+"assets/images/sevenSegmentExample-4aa3632989d41d9981907f4bcced854c.jpg"}}]);