"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[9401],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6536:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Micro Servo (0.12s / 1.2kg-cm - 9g SG90)",sidebar_position:28},s=void 0,c={unversionedId:"product_guide/micro-servo",id:"product_guide/micro-servo",title:"Micro Servo (0.12s / 1.2kg-cm - 9g SG90)",description:"The micro Servo motor is a small motor which turns up to 180 degrees or ranges between 90, 180, or 270 degrees depending on the make or type, but never 360.",source:"@site/guide/product_guide/1713-micro-servo.md",sourceDirName:"product_guide",slug:"/product_guide/micro-servo",permalink:"/guide/product_guide/micro-servo",editUrl:"https://github.com/carobot/carobot.github.io/tree/main/guide/product_guide/1713-micro-servo.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"Micro Servo (0.12s / 1.2kg-cm - 9g SG90)",sidebar_position:28},sidebar:"tutorialSidebar",previous:{title:"How to Use the 8-Digit SPI 7-Segment LED Display",permalink:"/guide/product_guide/1519-8-digit-7-seg"},next:{title:"Sharp Infrared Long-Range Proximity Sensor (Analog 20-150cm)",permalink:"/guide/product_guide/Long-Range-Proximity-Sensor"}},p=[{value:"How it works",id:"how-it-works",children:[],level:2},{value:"Wiring",id:"wiring",children:[],level:2},{value:"Parts",id:"parts",children:[],level:2},{value:"Wiring Guide",id:"wiring-guide",children:[],level:2},{value:"Programming",id:"programming",children:[],level:2},{value:"Full Code",id:"full-code",children:[],level:2},{value:"Output",id:"output",children:[],level:2}],u={toc:p};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The micro Servo motor is a small motor which turns up to 180 degrees or ranges between 90, 180, or 270 degrees depending on the make or type, but never 360. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(36786).Z,width:"300",height:"300"})),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"The Servo motor is an electromechanical device that rotates and changes movement based on the supplied current and voltage. The Servo works as a closed loop system that provides torque and velocity as commanded from its controller. This allows the servo to receive feedback to know when to close the loop. When connected to a programmable circuit board, this device uses the Pulse Width Modulation pins."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9007).Z,width:"300",height:"210"})," ",(0,a.kt)("img",{src:n(43277).Z,width:"300",height:"165"})," ",(0,a.kt)("img",{src:n(43790).Z,width:"300",height:"90"})," "),(0,a.kt)("h2",{id:"wiring"},"Wiring"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Red Wire"),": connected to 5V "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Black Wire"),": connected to ground "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Brown Wire"),": connect to a PWM pin (#~)")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(69513).Z,width:"225",height:"300"})," "),(0,a.kt)("h2",{id:"parts"},"Parts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/1713"},"Micro Servo (0.12s / 1.2kg-cm - 9g SG90)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/553"},"Trimpot 10K with Knob (Potentiometer)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/60"},"Arduino Uno R3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/223"},"BreadBoard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.canadarobotix.com/products/922"},"Jumper wires")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE"))),(0,a.kt)("h2",{id:"wiring-guide"},"Wiring Guide"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect the voltage and ground wires to the appropriate connection to the Servo"),(0,a.kt)("li",{parentName:"ul"},"Connect the signal wire of the Servo to a PWM pin in the digital input pin section of the Arduino board"),(0,a.kt)("li",{parentName:"ul"},"Connect the terminal pins of the potentiometer to voltage and ground"),(0,a.kt)("li",{parentName:"ul"},"Connect the wiper pin of the potentiometer to an analog pin"),(0,a.kt)("li",{parentName:"ul"},"Follow the code provided and observe how the servo rotates as you change the values of the potentiometer")),(0,a.kt)("h2",{id:"programming"},"Programming"),(0,a.kt)("p",null,"The following code demonstrates how you can move the servo motor by mapping the potentiometer. If you want to skip the steps, you can jump to the Full Code. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," Create variables for the sensors pin and a variable to store the data that is collected "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int sensor = A0; //sensor pin connection\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Set up serial communication, set the ",(0,a.kt)("strong",{parentName:"p"},"sensor")," pin as an ",(0,a.kt)("strong",{parentName:"p"},"INPUT"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void setup() {\n Serial.begin(9600); // start the serial port\n pinMode(sensor, INPUT); //setting the pin to the Arduino\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Read the data from the ",(0,a.kt)("strong",{parentName:"p"},"sensor"),", and convert the data into a volts measurement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void loop() {\n\n //5V\n float volts = analogRead(sensor)*0.0048828125;  // value from sensor * (5/1024)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," Now convert the volts measurement into distance, a measurement we understand.\n",(0,a.kt)("strong",{parentName:"p"},"This calculation is found in the datasheet gragh of the component and can be found ",(0,a.kt)("a",{parentName:"strong",href:"https://cdn.shopify.com/s/files/1/0015/7571/4865/files/datasheet_GP2Y0A41SK0F.pdf?325"},"here!"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int distance = 13*pow(volts, -1); // worked out from datasheet graph\n delay(1000); // slow down serial port \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5:")," Finally use the distance we calculated and display ONLY when the distance is less than or equal to its max limit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"if (distance <= 30){\n   Serial.println(distance);   // prints the distance\n }\n}\n")),(0,a.kt)("h2",{id:"full-code"},"Full Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#include <Servo.h>\n\nServo servo;  // Servo object\n\nint servoPin = 9;\nint potpin = 0;  // analog pin used to connect the potentiometer\nint val;    // variable to read the value from the analog pin\n\nvoid setup() {\n servo.attach(servoPin);  // attaches the servo on pin 9 to the servo object\n}\n\nvoid loop() {\n val = analogRead(potpin);            // reads the value of the potentiometer (value between 0 and 1023)\n val = map(val, 0, 1023, 0, 180);     // scales the values to use with the servo (value between 0 and 180)\n servo.write(val);                  // sets the servo position according to the scaled value\n delay(15);                         \n}\n")),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"Serial Monitor will display distance that is measure from the proximity sensor, only if the distance measure is less than or equal to the max limit which is 30cm for this exact component."))}d.isMDXComponent=!0},36786:function(e,t,n){t.Z=n.p+"assets/images/1713(1)-5880f0160ba95f8ca8cae1abb0ecf5d8.jpg"},69513:function(e,t,n){t.Z=n.p+"assets/images/1713(2)-ec0aede5c0aae0994eb652cf943e55dc.jpg"},9007:function(e,t,n){t.Z=n.p+"assets/images/1713(3)-37ef96064769f61ec471c7ac64caa5ca.jpg"},43277:function(e,t,n){t.Z=n.p+"assets/images/1713(4)-70eec649c3d9cab9fd7dfb773c06963d.jpg"},43790:function(e,t,n){t.Z=n.p+"assets/images/1713(5)-afa3847f686ba12980280d18d10c93e3.jpg"}}]);