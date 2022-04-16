

export const login = async (username, password) => {

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
