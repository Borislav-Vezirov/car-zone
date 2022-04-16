

export const loginService = async (username, password) => {

    try {
        
        const response = await fetch('http://localhost:3030/users/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

        if(response.ok !== true){
            const error = await response.json();
            throw new Error(error.message);

        }else{

            return await response.json();
        }

    } catch (err) {
        throw err;
    }
}

export const registerService = async (username, password) => {

    const sendData = await fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({username, password})
    });

    const result = await sendData.json();

    return result;
}

// export const logoutService = async () => {

//     return await fetch('http://localhost:3030/users/logout');
// }