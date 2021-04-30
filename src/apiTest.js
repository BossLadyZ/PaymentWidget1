import React from 'react';

 function apiTest() {
   const apiGet = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => json(console.log(json)));
    };
    return (
        <div>
            Your inputs are: {apiGet}
        </div>
    )
}
export default apiTest;