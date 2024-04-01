
function isEven(num) {
    const executor = (resolve, reject) => {
        if (num == undefined || num==null) {
            reject("number is undefined");
        }

        const result = num % 2 == 0;
        resolve(result);
    }

    const promise = new Promise(executor);
    return promise;

}

function isEvenUse() {

    const promise = isEven();// non blocking operation

    console.log("bye");
    promise.then(result => {
        console.log("is number even ", result);
    }).catch(error => {
        console.log("error while doing operation" + error);
    });
    console.log("after subscription");
}

isEvenUse();


