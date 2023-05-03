//Obviously just a stand-in for a real upload process
let uploadFile = async () => "File Uploaded Sucessfully";
let updateUserProfile = async () => {
    let result = await uploadFile();
    // console.log("Result is: " + result);


    //Handling directly, without subscribing or waiting
    // console.log("Result is: " + result);

    // //value? A stadard retuned named thing as part of the function?
    // //"then" is the same? Oh right. result is going to become the promise
    // //object so then is a standard part of it
    // result.then(
    //     (value) => console.log("Value is: " + value);
    // );
}
//Pretend we are passing it some file
updateUserProfile();

let myPromise = new Promise(
    function (resolve, reject) {
        //algo goes here

        let isDataFetched = false;
        //remember, if is a FUNCTION here and so parens
        if (isDataFetched) {
            resolve();   //resolves to "then"
        } else {
            reject();    //rejects to catch (should return Error Object)
        }
    }
)

//lol consecutive dot notation here? Ugh... I just dont get these choices
myPromise.then(
    () => console.log("Data Fetched Successfully")
).catch(
    () => console.log("Data Fetch Operation Failed :( ")
)