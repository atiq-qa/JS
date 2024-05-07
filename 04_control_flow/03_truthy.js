const email = "h@ai.ai"
if (email) {
    console.log("got the email")
}
else {
    console.log("no email")
}

//falsy value
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){},


let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = 10 ?? undefined;
val1 = undefined ?? 10 ?? 15

console.log(val1)
