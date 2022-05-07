"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[5050],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return A}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),A=a,g=d["".concat(u,".").concat(A)]||d[A]||c[A]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40255:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Soil Moisture Sensor Module (Capacitive) Guide",sidebar_position:10},u=void 0,p={unversionedId:"product_guide/soil-poisture-sensor-capacitive",id:"product_guide/soil-poisture-sensor-capacitive",title:"Soil Moisture Sensor Module (Capacitive) Guide",description:"The Soil Moisture Sensor Module (Capacitive) acts like a capacitor where the water level changes the capacity and we can measure that charge and discharge timing. It is a popular module for measuring the moistness of soil. The biggest advantage over a traditional moisture sensor is that the capacitive sensor doesn't corrode.",source:"@site/guide/product_guide/2639-soil-poisture-sensor-capacitive.md",sourceDirName:"product_guide",slug:"/product_guide/soil-poisture-sensor-capacitive",permalink:"/guide/product_guide/soil-poisture-sensor-capacitive",editUrl:"https://github.com/carobot/carobot.github.io/tree/main/guide/product_guide/2639-soil-poisture-sensor-capacitive.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Soil Moisture Sensor Module (Capacitive) Guide",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Humidity and Temperature Sensor (DHT11) Guide",permalink:"/guide/product_guide/humidity-and-temperature-sensor"},next:{title:"CAROBOT LCD Shield Kit Guide",permalink:"/guide/product_guide/LCD-shield-kit"}},s=[{value:"Wiring",id:"wiring",children:[],level:2},{value:"Parts",id:"parts",children:[],level:2},{value:"Wiring Guide",id:"wiring-guide",children:[],level:2},{value:"Programming",id:"programming",children:[],level:2},{value:"Full Code",id:"full-code",children:[],level:2},{value:"Final Build",id:"final-build",children:[],level:2},{value:"Full Code",id:"full-code-1",children:[],level:2},{value:"Output",id:"output",children:[],level:2}],c={toc:s};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Soil Moisture Sensor Module (Capacitive) acts like a capacitor where the water level changes the capacity and we can measure that charge and discharge timing. It is a popular module for measuring the moistness of soil. The biggest advantage over a traditional moisture sensor is that the capacitive sensor doesn't corrode."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(22436).Z,width:"468",height:"467"})),(0,i.kt)("p",null,"In this article, we will talk about how to wire and set up the module for operation with an Arduino Board. "),(0,i.kt)("h2",{id:"wiring"},"Wiring"),(0,i.kt)("p",null,"Most soil moisture sensor module operates between 3.3V to 5V and produce an analog output. For this project, we will be using ",(0,i.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/products/2639"},"Soil Moisture Sensor Module (Capacitive)"),", the one we carry in our shop. "),(0,i.kt)("h2",{id:"parts"},"Parts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/2639"},"Soil Moisture Sensor Module (Capacitive)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/60"},"Arduino Uno R3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/922"},"Jumper wires")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE"))),(0,i.kt)("h2",{id:"wiring-guide"},"Wiring Guide"),(0,i.kt)("p",null,"Connect the pins the female to female jumper wires"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(22763).Z,width:"400",height:"325"}),"\n",(0,i.kt)("img",{src:n(17333).Z,width:"353",height:"151"})),(0,i.kt)("p",null,"Then, connect the jumper wires with male to male jumper wires for connecting Arduino Board. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(92950).Z,width:"410",height:"297"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Module ",(0,i.kt)("strong",{parentName:"li"},"GND")," -- Arduino ",(0,i.kt)("strong",{parentName:"li"},"GND")," pin "),(0,i.kt)("li",{parentName:"ul"},"Module ",(0,i.kt)("strong",{parentName:"li"},"VCC")," -- Arduino ",(0,i.kt)("strong",{parentName:"li"},"VCC")," pin "),(0,i.kt)("li",{parentName:"ul"},"Module ",(0,i.kt)("strong",{parentName:"li"},"AUOT")," -- Arduino ",(0,i.kt)("strong",{parentName:"li"},"A0")," pin ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(28815).Z,width:"444",height:"445"}),"\n",(0,i.kt)("img",{src:n(83128).Z,width:"480",height:"302"})),(0,i.kt)("h2",{id:"programming"},"Programming"),(0,i.kt)("p",null,"Before we get the accurate value for result, we need to know what are the values when the sensor is in water and when it is dry. If you want to skip the steps and jump to the Final Build. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," Create a variable for storing the sensor's output "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"int value = 0;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Set up serial communication between Arduino and the sensor. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void setup(){\n  Serial.begin(9600);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," Read the sensor's output "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void loop(){\n  value = analogRead(A0);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4:")," Print out the value and wait for half a second for the next reading."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"  Serial.println(value);\n  delay(500);\n}\n")),(0,i.kt)("h2",{id:"full-code"},"Full Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"int value = 0;\n\nvoid setup(){\n  Serial.begin(9600);\n}\n\nvoid loop(){\n  value = analogRead(A0);\n  Serial.println(value);\n  delay(500);\n}\n")),(0,i.kt)("p",null,"Now that you can measure the threshold values for the sensor. The values will vary depending on the water level. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," Put the sensor in a dry spot and record the highest value. I got 586 in this example."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(59120).Z,width:"480",height:"258"})),(0,i.kt)("p",null,"Serial Monitor:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(75748).Z,width:"42",height:"174"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Put the sensor in a cup of water and record the lowest value. I got 267 in this example. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(90211).Z,width:"359",height:"480"})),(0,i.kt)("p",null,"Serial Monitor:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(74402).Z,width:"39",height:"176"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," Wipe down the water on the sensor.  "),(0,i.kt)("h2",{id:"final-build"},"Final Build"),(0,i.kt)("p",null,"Now that we know the values when the sensor is in water and when it is not. We can use those values as the threshold and determine the moistness percentage with the map function on Arduino. If you want to skip the steps,then just jump to the Full Code. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1:")," Create variables to store the threshold values, sensor's output and percentage result. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"const int dry = 586;\nconst int wet = 267;\nint value = 0;\nint percentage = 0;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Set up serial communication between Arduino and the sensor. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void setup(){\n  Serial.begin(9600);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," Read the sensor's output."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void loop(){\n  value = analogRead(A0);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4:")," Use map function to change the range from the two threshold values to be from 0 to 100. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"percentage = map(value, dry, wet, 0, 100);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5:")," Print message according to the percentage, and wait for half a second for next reading. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'if (percentage >= 100){\n    Serial.println("100%");\n  }\n  else if (percentage <= 0){\n    Serial.println("0%");\n  }\n  else {\n    Serial.print(percentage);\n    Serial.println("%");\n  }\n  delay(500);\n}\n')),(0,i.kt)("h2",{id:"full-code-1"},"Full Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'const int dry = 586;\nconst int wet = 267;\nint value = 0;\nint percentage = 0;\n\nvoid setup(){\n  Serial.begin(9600);\n}\n\nvoid loop(){\n  value = analogRead(A0);\n  percentage = map(value, dry, wet, 0, 100);\n  if (percentage >= 100){\n    Serial.println("100%");\n  }\n  else if (percentage <= 0){\n    Serial.println("0%");\n  }\n  else {\n    Serial.print(percentage);\n    Serial.println("%");\n  }\n  delay(500);\n}\n')),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,"When it is in the water"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(68890).Z,width:"47",height:"293"})),(0,i.kt)("p",null,"When it is not in water "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(85062).Z,width:"40",height:"163"})))}d.isMDXComponent=!0},22763:function(e,t,n){t.Z=n.p+"assets/images/2639_01-a547a2c17cf50be27ebae9139f096bc5.gif"},22436:function(e,t,n){t.Z=n.p+"assets/images/2639_01-f006c407aeab106c16d0977729f93602.png"},17333:function(e,t,n){t.Z=n.p+"assets/images/2639_02-59e076e3b0f52dfe39401f86fec75cb4.png"},92950:function(e,t,n){t.Z=n.p+"assets/images/2639_03-7ba63492d41fda8b35b61f94ba615dc4.png"},28815:function(e,t,n){t.Z=n.p+"assets/images/2639_04-0fe30e06e203c842e1a5e1486efcc662.png"},83128:function(e,t,n){t.Z=n.p+"assets/images/2639_05-f9d70ad26ce1907cf52335aacd82a3ea.png"},59120:function(e,t,n){t.Z=n.p+"assets/images/2639_06-88a0a2f81ef4f69a94e1909f54c62e19.png"},75748:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAACuCAYAAABA4p+VAAABC2lDQ1BpY2MAABiVY2BgXJGTnFvMJMDAkJtXUhTk7qQQERmlwH6HgZFBkoGZQZPBMjG5uMAxIMCHASf4do2BEURf1gWZxUAa4ExJLU5mYGD4wMDAEJ9cUFTCwMAIsounvKQAxI5gYGAQKYqIjGJgYMwBsdMh7AYQOwnCngJWExLkzMDAyMPAwOCQjsROQmJD7QIB1mSj5ExkhySXFpVBmVIMDAynGU8yJ7NO4sjm/iZgLxoobaL4UXOCkYT1JDfWwPLYt9kFVaydG2fVrMncX3v58EuD//9LUitKQJqdnQ0YQGGIHjYIsfxFDAwWXxkYmCcgxJJmMjBsb2VgkLiFEFNZwMDA38LAsO08APD9TdvF8UZ0AAAACXBIWXMAAAsSAAALEgHS3X78AAADrElEQVR42u3Yu0sreRwF8K+XSRzHzEAcRAUlgSHgoxFREB+tIFrYKOR/0MJahCCIWCkIKRVtxGIKESsREUFCwCSKoAYUH2jjo1CikDg5W92wcpdk2d2R3OV8YarkwJkZ8suHbwUAyG8wP/7uF4+Pj+Xi4kL+6r6ur69lf39f7u/v3WsKAKqqQkS+XLu7uwCAs7MztLa2wrIsVFZWYnR0FD/n4eEBvb29ME0TbW1tUBQFp6encGMKRW3bxtPTU+HK5XIAgLGxMUxMTAAAkskkRATn5+cAgP7+foTDYWSzWQDAx8dHIfdfj/LzyXq9XjFN85cn3tTUJJubm3J3dye2bUtDQ4MEAgGJxWJyeHgot7e34vF4REREVdXvefW6rmNoaAjJZLJwJ8/Pz2huboZhGDAMA/F4HACwurqKQCAA27bR09ODUCiEqakp5PN59179yckJ9vb2EI1GYVkW/H4/bm5uAADpdBqNjY0IBoNQFAXr6+sAgMXFRaiqivr6ekSjUaysrKC2thazs7PuFf3zxGIxiAiWlpaQz+dhWRZGRkaQy+UwPj4Oj8eDeDyOg4MDiAhmZmYK2cnJSfT19blS9JfjqaurS3Rdl8/PT0kmk3J5eSmRSEQURZH5+XkxDEO2traks7NTvF6vWJZVyBqGIW4dyz9eXl5ke3tbHMeRXC4nkUhEMpmMDAwMSDAYlKqqKtnZ2Smcl6+vr9Ld3S2qqkpHR4csLy/L29ubPD4+ytramgwODrrzY7q6uoKmafB6vdA0DT6fDxsbG4VHPjc3B9M0UVdXh+rqaoTDYTiOAwBIJBKoqamBYRjQNA3Dw8N4f3935dVXAIDjOJJOpyWTyUh7e7soivLlZhzHkUQiIS0tLeLz+b58ls1mJZVKid/vl1Ao5NrpVPG/+69nURalR+lRepQepUfpUXqUHiVKWJRF6VF6lB6lR+lRepQepUdZlEXpUXqUHqVH6VF6lB6lR4kSFmVRepQepUfpUXqUHqVH6VEWZVF6lB6lR+lRepQepUfpUaKERVm0tEe/Zf6NR4vlysqjxXJl49FSubLxaKlc2Xi0VK5sPFos9y1FHceBrutYWFjA0dERRASpVAoAkMlkYJompqenUSznCpz/qUeL5crKo6VyZeXRUjl6lEVZlPtR7ke5H+V+lPtR7ke5H+V+lChhURalR+lRepQepUfpUXqUHmVRFqVH6VF6lB6lR+lRepQeJUpYlEXpUXqUHqVH6VF6lB6lR8tl/gBd8vvNn6y3nQAAAABJRU5ErkJggg=="},90211:function(e,t,n){t.Z=n.p+"assets/images/2639_08-c0c231089a276f2817b5f9ae9df5b532.png"},74402:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAACwCAYAAACMwHfOAAABC2lDQ1BpY2MAABiVY2BgXJGTnFvMJMDAkJtXUhTk7qQQERmlwH6HgZFBkoGZQZPBMjG5uMAxIMCHASf4do2BEURf1gWZxUAa4ExJLU5mYGD4wMDAEJ9cUFTCwMAIsounvKQAxI5gYGAQKYqIjGJgYMwBsdMh7AYQOwnCngJWExLkzMDAyMPAwOCQjsROQmJD7QIB1mSj5ExkhySXFpVBmVIMDAynGU8yJ7NO4sjm/iZgLxoobaL4UXOCkYT1JDfWwPLYt9kFVaydG2fVrMncX3v58EuD//9LUitKQJqdnQ0YQGGIHjYIsfxFDAwWXxkYmCcgxJJmMjBsb2VgkLiFEFNZwMDA38LAsO08APD9TdvF8UZ0AAAACXBIWXMAAAsSAAALEgHS3X78AAADVElEQVR42u3YT0sqURgG8FcdTAxcGEEZIdGfhQmVSETZKtr1Bdr5FWppiyKUWkkYtI1a65fIIArMsqBoUSrZokVQQmEy87SaIa24SN7LufC8MAvPzMjrceach58tn89jfHxcVCy7w+EQVcsOQNnmNJvN1jBQLBbl7u5Oent7ZWRkROx2+5fzpVJJhoaGpK+v7+92d3Z2BgDQdR3BYBD9/f0IhULo6OjA/Pw8arUaAODh4QEzMzPo6urC6OgoNE3D5eUl7u/vISJfjnA4jN+WnJ+fAwAMw8DV1ZV14uTkBCKCbDYLAJidncXi4iLe398BAG9vb6jX69B1HeVy2TpKpRImJiawvLzcvuaaK5VKobOzE9VqFUdHR3A4HKhUKn/8wng8jkAggNfX1983VygUvgweHh7C5XIhnU4DAPb29uD3+5HJZDA9PY3h4WGsrKzAMIyG+w4ODuB2u/HTD265OfOZM6tQKMDr9WJjY8Ma29ragsvlQk9PD3Z2drC7u4vu7m4kEgnrmufnZ/j9fmxubqJd1TBz5XIZPp8Pq6urDRdls1mICNbX162xpaUlRCIR63MsFsPY2Bjq9XrbmtMMw7De3Gg0KpFIRNbW1hre6HA4LE6nUwYHB60xj8cj5hqp67qkUinZ3t4WTdPat5SYM3d7ewsRwf7+Pq6vr63j6ekJADA1NYW5uTm8vLzg8fERAwMDiMfjDffm83m0s6zmTk9Pv12vksmkdd7r9cLj8cDtdmNhYcF6I3O5HEQExWKxvc218mbVajUcHx/j5uYG/6K0VvZWp9Mpk5OT3PjVj0yflxLlmmuORErlueaZUyrPmUuJknnO3PiVzHMXFxfq5rnvmlMmzzVv1krluc8zp1ye03Vd3Txn/q1K5jnz4VUyz/20lCiR51rZ+JnnGDbpc/Q5+hx9jj5Hn6PP0ecYmehz9Dn6HH2OPkefo8/R5+hzVCb6HH2OPkefo8/R5+hz9Dn6HH2OPkefo8/R5+hz9Dn6HH2OPsewSZ+jz9Hn6HP0OfocfY4+x8hEn6PP0efoc/Q5+hx9jj5Hn6My0efoc/Q5+hx9jj5Hn6PPMc/R5+hz9Dn6HH2OPkefo8/R5+hzDJv0OfocfY4+R5+jz9Hn6HP/1cb/ATgw8UmvkgHjAAAAAElFTkSuQmCC"},68890:function(e,t){t.Z="data:image/png;base64,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"},85062:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAACjCAYAAAD4iVx2AAABC2lDQ1BpY2MAABiVY2BgXJGTnFvMJMDAkJtXUhTk7qQQERmlwH6HgZFBkoGZQZPBMjG5uMAxIMCHASf4do2BEURf1gWZxUAa4ExJLU5mYGD4wMDAEJ9cUFTCwMAIsounvKQAxI5gYGAQKYqIjGJgYMwBsdMh7AYQOwnCngJWExLkzMDAyMPAwOCQjsROQmJD7QIB1mSj5ExkhySXFpVBmVIMDAynGU8yJ7NO4sjm/iZgLxoobaL4UXOCkYT1JDfWwPLYt9kFVaydG2fVrMncX3v58EuD//9LUitKQJqdnQ0YQGGIHjYIsfxFDAwWXxkYmCcgxJJmMjBsb2VgkLiFEFNZwMDA38LAsO08APD9TdvF8UZ0AAAACXBIWXMAAAsSAAALEgHS3X78AAADhklEQVR42u3WMUgyfxzH8Y+RpWE3NHQQ4WiREtRUuNkQNFVIIEmLTmJFBDUG1lDQ4BK0BSWIEFgQRUNDgoWDFCRGU1ApWQldRVpJn//yf+KJBx74D6nw/37h4Li74c3v7n68dCSJKp4aVPlIYMUCDw4O8Pj4+POF/HceHh7o9/tZW1vL+fn5X5e5tbVFq9XK/v5+Xl5ekiRDoRA7Ozv5/v7On56vFezq6kI+n4fFYvk9HhMTE4hEIrDb7QgGg8jlcpiensba2hr0ev2PL2Dtr5NUKgVFUdDX1/ftgWKxCEVRoCgKMpkMfD4fPB4Puru7y/INfgUqivLHTZ1OB5fLhcHBQeRyOQwMDODi4gLhcLh6fpJgMIiVlRXs7Oxge3sbvb29GB0dRSwWq56/uKenB4uLi7BYLIjFYhgeHobT6USpVKqOwGg0itPTUzgcDjgcDrhcLphMJqRSqfJ9g09PTyCJj48PFAoFaJqGuro6FAoF+P1+bG5uQtM0LCwsIJPJQNM0dHR0lG8fNBgMBPDtcDqddLvdnJqaIkkWi0W63W62trZydXWV5Rj87ebn5yf39/f5+vrKSo1OuCWBEvgfAp+fnxGPx3F3d1d9HgyFQjQYDLRarTQajZydna0KD4Ikr6+vqdfrGYlESJIbGxsEwN3dXZrNZqZSKQYCAU5OTvL29paqqjKZTJZlH6wBgHA4DFVVMTIyglKphOXlZRiNRqyvr3/zYLFYrIwHr66u0NbWBgBYWlpCY2MjvF4vkslkxT0IkhwbG+PQ0BDT6TRNJhPPzs44MzNDm81Gkjw+PubJyQmbm5vp9XrpdDp5eHhYvlesqiqy2Sw8Hg98Ph9sNhvOz8+hqmp1eLC9vR2JRALZbBZzc3MAgHQ6/fXaK+lBkKSmaWxoaOD4+PjX1gKAiUSC+XyeLS0tPDo64t7eHu12O29ubtjU1MS3t7fycSsajbK+vp5ms5k6nY6BQIAkq8uDLy8vjMfjvL+/Fw+KZiRQPCgeFA+KB8WD4kHxoHhQNCOB4kHxoHhQPCgeFA+KB8WDohkJFA+KB8WD4kHxoHhQPCgeFM1IoHhQPCgeFA+KB8WD4kHxoGhGAsWD4kHxoHhQPCgeFA+KB0UzEigeFA+KB8WD4kHxoHhQPCiakUDxoHhQPCgeFA+KB8WD4kHRjASKB8WD4kHxoHhQPCgeFA+KZv43gf8ADKF5+pa/nX8AAAAASUVORK5CYII="}}]);