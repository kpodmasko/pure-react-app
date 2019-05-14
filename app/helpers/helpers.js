const makeRequestAndGetPromise = ({type, url, data, token}) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.open(type, url);
        request.setRequestHeader('Content-Type', 'application/json');

        if (token) {
            request.setRequestHeader('Authorization', 'Bearer ' + token);
        }

        request.onload = () => {
            if (request.status === 200) {
                resolve(request.response)
            } else {
                reject(Error(request.statusText)); 
            }
        }

        request.onerror = function() { 
            reject(Error("Ошибка сети")); 
        }; 

        request.send(data);
    });
};