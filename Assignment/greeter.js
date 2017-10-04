var Greeter = (function () {
    //paramaterised Constructor
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    //function returning string value
    Greeter.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
}());
;
//instance creatin of greeter class
var g = new Greeter("Hello Welcome to Pune(Maharashtra)");
var res = g.greet(); // calling greet method on instance
//console.log(''+res);
document.body.innerHTML = res;
