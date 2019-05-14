const makeRequestAndGetPromise = ({type, url, data}) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.open(type, url);
        request.setRequestHeader('Content-Type', 'application/json');

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