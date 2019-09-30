function *numbers(b){

    yield 575;
    yield 59;
    yield 75;
    
    }
    var a=numbers();
    console.log(a.next());
    console.log(a.next().value);
    console.log(a.next().value);
    console.log(a.next().done);
    console.log(a.next());