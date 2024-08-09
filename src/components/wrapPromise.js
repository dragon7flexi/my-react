export default function wrapPromise(promise) {
    // administer a state of Promise
    let status = 'pending';
    // data received from Promise
    let data;
    // Post-processing is added to the original Promise
    let wrapper = promise.then(
        // if Successfull, fullfilled
        // set data to obtained value.
        result => {
            status = 'fulfilled';
            data = result;
        },
        // in case of failure, set status to rejected and data to error object.
        e => {
            status = 'rejected';
            data = e;
        }
    );

    // the return value is the object having the get method that return values depending on circumstances.
    return {
        get() {
            switch(status) {
                case 'fulfilled':
                    return data;
                case 'rejected':
                    throw data;
                case 'pending':
                    throw wrapper;
                default:
                    break;
            }
        }
    };
}