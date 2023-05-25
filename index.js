// 1.
function heyThere() {
    console.log('Hey there!');
};

function receivesAFunction(someFunc) {
    someFunc();
};

receivesAFunction(heyThere);

//2.
function returnsANamedFunction() {
    return function hello() {
        console.log('Hello!');
    }
};

//3.
function returnsAnAnonymousFunction() {
    return () => console.log('Howdy!');
};
