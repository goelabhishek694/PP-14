let str='Hakunama tata';
let a=10;
function foo(msg){
    return 'Hi! i was made in owner.js '+msg
};

console.log('hello i was made in owner.js');

// module.exports=str;

module.exports={
    var:a,
    string:str,
    fooFnc:foo
};