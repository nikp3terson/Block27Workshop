import { useState } from "react"

function Authenticate () {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    async function handleClick() {
        try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate")
        method = 'GET',
        headers = {'Content-type': 'application/json', 
        Authorization: `Bearer ${token}`}
        const result = await response.json();
        setSuccessMessage(result.message);
        } catch(error) {
        error.message(setError)
        }
        }

    return(
    <>
    <h2>Authenticate</h2>
    {successMessage && <p>{successMessage}</p>}
    {error && <p>{error}</p>}
    <button onClick={handleClick}>Authenticate Token!</button>
    </>)
}

export default Authenticate