// Define Array
var arr = [1, 5, 7, 34, 66, 9, 0 ,2 ,4, 6, 8];
//Requirement print indices post 3 secs delay
//Thought 1: setTimeout(function printIndices(val){console.log(val)},3000)
// Procedure can use? async await to stop 

function printIndices(val){
	return new Promise(resolve => {
        setTimeout(() => {
            document.getElementById('root').innerHTML = val;

            console.log(val);
            resolve();
        }, 3000);
    });
}

async function acceptArray(arr){
	for(var i = 0; i< arr.length;i++){
        await printIndices(i);
    }
}

acceptArray(arr);