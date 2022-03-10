"use strict";(self.webpackChunklearn_at_carobotix=self.webpackChunklearn_at_carobotix||[]).push([[253],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=i,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2579:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={title:"TinkerKit LCD - Tutorial 03 - LCD Serial",sidebar_position:4,slug:"tinkerkit-lcd-tutorial-03-lcd-serial"},c=void 0,u={unversionedId:"tinkerkit/tinkerkit-lcd-3",id:"tinkerkit/tinkerkit-lcd-3",title:"TinkerKit LCD - Tutorial 03 - LCD Serial",description:"In this tutorial we use the TinkerKit LCD module from the Serial port of the TinkerKit! shield.",source:"@site/docs/tinkerkit/tinkerkit-lcd-3.md",sourceDirName:"tinkerkit",slug:"/tinkerkit/tinkerkit-lcd-tutorial-03-lcd-serial",permalink:"/tinkerkit/tinkerkit-lcd-tutorial-03-lcd-serial",editUrl:"https://github.com/carobot/carobot.github.io/tree/main/docs/tinkerkit/tinkerkit-lcd-3.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"TinkerKit LCD - Tutorial 03 - LCD Serial",sidebar_position:4,slug:"tinkerkit-lcd-tutorial-03-lcd-serial"},sidebar:"tutorialSidebar",previous:{title:"TinkerKit LCD - Tutorial 02 - Introduction to LCD",permalink:"/tinkerkit/tinkerkit-lcd-tutorial-02-introduction-to-lcd"},next:{title:"TinkerKit LCD - Tutorial 04 - LCD Local (No Arduino)",permalink:"/tinkerkit/tinkerkit-lcd-tutorial-04-lcd-local-no-arduino"}},s=[{value:"Verify Requirement",id:"verify-requirement",children:[],level:2},{value:"Connect the TinkerKit LCD",id:"connect-the-tinkerkit-lcd",children:[],level:2},{value:"Read Input and More Code",id:"read-input-and-more-code",children:[],level:2}],d={toc:s};function p(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial we use the ",(0,o.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/products/1654"},"TinkerKit LCD module")," from the Serial port of the TinkerKit! shield."),(0,o.kt)("h2",{id:"verify-requirement"},"Verify Requirement"),(0,o.kt)("p",null,"First of all let\u2019s get all the tools we need: the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carobot/TKLCD-Library"},"TKLCD library")," and a ",(0,o.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/products/1168"},"four-connectors wire")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/products/1872"},"4-pin jumper wire (Molex KK 2.54mm)"),"."),(0,o.kt)("p",null,"To connect the LCD to the shield, we need a ",(0,o.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/products/1168"},"four-connectors wire")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.canadarobotix.com/products/1872"},"4-pin jumper wire (Molex KK 2.54mm)"),"; in fact it has four holes like the serial port, one more than the regular TinkerKit! connectors."),(0,o.kt)("p",null,"The TKLCD library is available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carobot/TKLCD-Library"},"here"),"; if you don\u2019t remember how to install a library, here\u2019s a brief summary:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"unzip the downloaded file"),(0,o.kt)("li",{parentName:"ol"},"move the TKLCD folder inside the \u201clibraries\u201d folder, usually located in ",(0,o.kt)("strong",{parentName:"li"},"Documents\\Arduino\\libraries")," (if it\u2019s not there, just create it)"),(0,o.kt)("li",{parentName:"ol"},"close the Arduino software, if it\u2019s open, then relaunch it"),(0,o.kt)("li",{parentName:"ol"},"to verify the installation, open the software and from the top menu click on sketch->import library. You should be able to see the TKLCD element in the list")),(0,o.kt)("p",null,"With this library we can generally work with the module, both as independent or connected to the TinkerKit! shield through the serial port. We want to use it with the serial, so we have to do one more step: upload the firmware."),(0,o.kt)("p",null,"The firmware is nothing more than a particular Arduino sketch and it\u2019s inside the examples of the TKLCD library. You can open it from File->Examples->TKLCD->SerialFirmware Mind that this firmware must be uploaded on the LCD module, and not on the Arduino Board. Connect the module using the USB cable, (the Arduino software recognizes it as an Arduino Leonardo) then load the firmware. You don\u2019t have to upload the firmware every time, just remember to reload it if you upload something else on the module, and then you want to use it again from the serial."),(0,o.kt)("h2",{id:"connect-the-tinkerkit-lcd"},"Connect the TinkerKit LCD"),(0,o.kt)("p",null,"Now, connect the LCD module to the TinkerKit! shield\u2019s SERIAL port and let\u2019s see what we can do with this module."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(5864).Z,width:"734",height:"489"})),(0,o.kt)("p",null,"First of all we have to include all the libraries required by the LCD module: TKLCD, LiquidCrystal and Wire. The last two don\u2019t need to be downloaded, they\u2019re included in the Arduino software and are selectable just like the other libraries from Sketch->Import Library. Now create a LCD object in the globals, like every other module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"TKLCD_Serial lcd = TKLCD_Serial();\n")),(0,o.kt)("p",null,"Then we have to initialize it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"setup()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"lcd.begin();\n")),(0,o.kt)("p",null,"Let\u2019s start by writing something on our LCD screen: inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"setup()")," write"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'lcd.print("Hello World!");\n')),(0,o.kt)("p",null,"and load it into the Arduino, you should see this on the LCD:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(1186).Z,width:"238",height:"117"})),(0,o.kt)("p",null,"Every time that we want to print something new on the screen, we have to \u201crefresh\u201d it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"clear()")," function. To write \u201cHello World!\u201d but with the two words alternating every second on the screen, we have to type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'lcd.clear();\nlcd.print("Hello");\ndelay(1000);\n\nlcd.clear();\nlcd.print("World!");\ndelay(1000);\n')),(0,o.kt)("h2",{id:"read-input-and-more-code"},"Read Input and More Code"),(0,o.kt)("p",null,"Now let\u2019s use it to read the value of an input. Connect a light sensor to the TinkerKit! shield, then we\u2019ll use the LCD screen to read its values. Don\u2019t forget to include the normal TinkerKit! Library if you\u2019re using modules other than the LCD."),(0,o.kt)("p",null,"Our loop function is now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'//read the light sensor\nint val = ldr.read();\n \n//print the values on the lcd\nlcd.clear();\nlcd.print("Light: ")\nlcd.print(val);\ndelay(20);\n')),(0,o.kt)("p",null,"Now take a look at all the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carobot/TKLCD-Library/tree/master/TKLCD/examples"},"examples")," included in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carobot/TKLCD-Library"},"TKLCD library")," to discover more functions."))}p.isMDXComponent=!0},1186:function(e,t,r){t.Z=r.p+"assets/images/hello-world-9707c31a83cb98759ac7398df9f5f1a8.jpg"},5864:function(e,t,r){t.Z=r.p+"assets/images/ways-1-0b20e92035be7a800868905b91653efc.jpg"}}]);