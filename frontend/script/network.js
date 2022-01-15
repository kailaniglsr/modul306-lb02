/**
 * Server-URL
 */
const SERVER = 'http://localhost:3000';

function getWelcome(){
    return fetch(SERVER+'/welcome')
        /* important is res.text().
            res.json() returns errors because the answer from
            the contact-server is NOT in JSON-format.
        */
        .then(res => res.text())
        .catch(err => {
            console.log(`Error occurred: ${err}`)
        })
}

/**
 * Variant 1: Send form data to contact-server
 * Pro: Easy to implement
 * Cons: no response from contact-server can be processed (major drawback)
 * @param data
 * @returns {Promise<Response>}
 */
function sendForm1(data){
    return fetch(SERVER+'/customer/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

/**
 * Variant 2: Send form data to contact-server
 * Pro: Response from contact-server can be processed (major drawback)
 * Cons: Implementation is little more complex
 */
function sendForm2(data) {
    //DO NOT FORGET the return!
    return fetch(SERVER+'/customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => res.text())
        .catch(err => {
            console.log(`Error occurred: ${err}`)
        })
}
