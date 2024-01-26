function getData(){
    return "100 Products";
}

async function showData(){
    try {
        console.log(`Inside try block....`);
        const promiseData = await getData();
        console.log(promiseData);
    } catch (error) {
        console.log(`Inside catch block...`);
        console.log(error);
    }
   
}
showData();


const isPromiseFailure = false;
function getData() {
  return new Promise((success, failure) => {
    setTimeout(() => {
      success("Promise Resolved: Successfully fetched data");
    }, 20000);
  });
}
async function showData() {
    console.log(`Inside try block....`);
    const promiseData = await getData();
    console.log(promiseData);
    dance();
}
showData();

function dance(){
    console.log('I am dancing as My Promise resolved...');
}