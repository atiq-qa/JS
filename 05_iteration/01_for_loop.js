//for loop

/*for(let index = 0; index < 10; index++)
{
	if(index % 2 == 0)
	{
		console.log(index)
	}

}
*/


//for(let i = 0; i < 10; i++)
//{
//	console.log(`outer loop value = ${i}`)
//	for(let j=0; j< 10; j++)
//	{
//		console.log(`inner loop value = ${j}`)
//	}

//}

for(let i = 1; i <= 20; i++)
{
	if (i == 5) {
		console.log(`${i} detected and loop is ended`)
		break // control will jump out of the loop
	}
	console.log(`value of i is ${i}`)
}

//for (let i = 1; i <= 20; i++) {
//	if (i == 5) {
//		console.log(`${i} detected and skipped the loop still continues`)
//		continue // control will skip this specific condition and will continue in loop
//	}
//	console.log(`Value of i is ${i}`)
//}