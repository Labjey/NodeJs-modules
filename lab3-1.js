var dns = require('dns');
const { promisify } = require('util');

// Using the resolve4()
dns.resolve4('www.mum.edu', function (error, resolve) {
    if (error) throw error;
    console.log("Result:-", sucess);
});

//Promisify the above code 
promisify(dns.resolve4)('www.mum.edu').then(resolve => console.log("Promisfy output:", resolve));

//Converting the above code to async or await block
var asyncCode = promisify(dns.resolve4);
async function AsyncAwait() {
    try {
        var result = await asyncCode('www.mum.edu');
        console.log("Async/Await output", result);
    } catch (error) {
        console.log("Error", error);
    }
} 
AsyncAwait();