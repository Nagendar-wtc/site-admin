let controller;
let signal;
/**
 * Parses the JSON returned by a network request
 * @param  {object} response A response from a network request
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
    if (response.status == 500) {
        return response;
    } else {
        return response.json();
    }
}

/**
 * Checks if a network request came back fine, and throws an error if not
 * @param  {object} response   A response from a network request
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
    if ((response.status >= 200 && response.status < 300) || response.status == 500) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options = {}) {
    let _options = {};
    _options = {
        ...options,
        credentials: "same-origin"
    };
    return fetch(url, _options)
        .then(checkStatus)
        .then(parseJSON);
}

function processResponse(response) {
    // console.log({PRR:response});
    if (response.status == 200) {
        return response.json();
    }
    else {
        let responseMessagePromise = response.json();
        responseMessagePromise.then(
            (responseJSON) => {
                let errorMessage = "Error code: " + response.status + " : " + response.statusText + " : " + responseJSON.detailedMessage;
                // toast.error(errorMessage);
            }
        );
        return ({ response: "NETWORK_ERROR" });
    }
}

function catchResponse(response) {
    // console.log({CRR:response});
    let errorMessage = "Error : " + response.message;
    // toast.error(errorMessage);
    if (response.code && response.code == 20) {
        return ({ response: "CANCEL_ERROR" });
    }
    else {
        return ({ response: "NETWORK_ERROR" });
    }
}

export function cancellableRequest(url, options = {}) {

    controller = new AbortController();
    signal = controller.signal;

    let _options = {};

    _options = {
        ...options,
        signal: signal,
        credentials: "same-origin"
    };

    var promise = fetch(url, _options)
        .then(processResponse)
        .catch(catchResponse);

    return promise;
}

export function cancelRequest() {
    controller.abort();
}