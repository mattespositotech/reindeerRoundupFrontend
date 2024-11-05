async function handleFetchResponse(response: Response) {
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    return await response.json();
}

async function getData<T>(url: string): Promise<T> {
    let response: Response;

    try {
        response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

    return await handleFetchResponse(response);
}

async function saveData<T, U>(url: string, data: T): Promise<U> {
    let response: Response;

    try {
        response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }

    return await handleFetchResponse(response);
}

async function getAuthorizedData<T>(url: string): Promise<T> {
    const token = localStorage.getItem('token');
    let response: Response;

    try {
        response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

    return await handleFetchResponse(response);
}

async function saveAuthorizedData<T, U>(url: string, data: T): Promise<U> {
    const token = localStorage.getItem('token');
    let response: Response;

    try {
        response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.error('Error saving data:', error);
        throw error;
    }

    return await handleFetchResponse(response);
}

async function deleteAuthorizedData<U>(url: string): Promise<U> {
    const token = localStorage.getItem('token');
    let response: Response;

    try {
        response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }

    return await handleFetchResponse(response);
}

export {getData, saveData, getAuthorizedData, saveAuthorizedData, deleteAuthorizedData}