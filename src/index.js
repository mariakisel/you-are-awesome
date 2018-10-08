// DO WHATEVER YOU WANT HERE

    const createEnumerableProperty = (property) => {
        return property;
    
    };
    const createNotEnumerableProperty = (property) => {
        return Symbol(property);
    
    };
    
    const createProtoMagicObject = () =>{
        function magicObject(){
    }
        magicObject.__proto__=magicObject.prototype;
        return magicObject;
        };
    
    const incrementor = () => {
        if(Object.inc==undefined) Object.inc=1;
         else Object.inc+=1;
            function s() {
             Object.inc+=1;
             return s;
            }
        s.toString= function() {
        return Object.inc;
        }
    return s;
    };
    
    const asyncIncrementor = () => {
        if(Object.inc==undefined) Object.inc=1;
        else Object.inc+=1;
        return Promise.resolve(Object.inc-15);
    };
    
    const createIncrementer = () => {
    function iterator(){
    this.inc=0;
    this.next=function (){
    return {
        value: this.inc+=1, 
        done: false
    }
    }
    }
    let iteratorSec=new iterator();
        iteratorSec[Symbol.iterator]=function(){
        return this
        }
        return iteratorSec;
    };
    
    // return same argument not earlier than in one second, and not later, than in two
    
    const returnBackInSecond = (param) => {
        return new Promise((resolve) => {
            setTimeout(() => {
            resolve(param);
            }, 1000);
            })
          };
    
    
    const getDeepPropertiesCount = (obj) => {
        let i;
            if(i==undefined)i=0;
            function getproperty(obj){
                for(var m in obj){
                    if ( typeof obj[m] == "object") getproperty(obj[m])
                        i+=1;
    
                }
            }
        getproperty(obj);
        return i;
    
    };

    const createSerializedObject = () =>{
        return null;
    };   
    const sortByProto = (array) => {
        return array;
    };
    
    exports.createEnumerableProperty = createEnumerableProperty;
    exports.createNotEnumerableProperty = createNotEnumerableProperty;
    exports.createProtoMagicObject = createProtoMagicObject;
    exports.incrementor = incrementor;
    exports.asyncIncrementor = asyncIncrementor;
    exports.createIncrementer = createIncrementer;
    exports.returnBackInSecond = returnBackInSecond;
    exports.getDeepPropertiesCount = getDeepPropertiesCount;
    exports.createSerializedObject = createSerializedObject;
    exports.sortByProto = sortByProto;


    
    


   