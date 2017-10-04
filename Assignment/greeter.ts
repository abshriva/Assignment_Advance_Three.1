class Greeter
{
    //paramaterised Constructor
    constructor(public greeting:string)
    {}

    //function returning string value
    public greet():string
    {
        return "<h1>" + this.greeting + "</h1>";
    }
};

//instance creatin of greeter class
var g = new Greeter("Hello Welcome to Pune(Maharashtra)")
var res = g.greet();// calling greet method on instance
//console.log(''+res);
document.body.innerHTML = res;


