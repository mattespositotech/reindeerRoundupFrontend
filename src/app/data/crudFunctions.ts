async function getData<T>(url: string): Promise<T> {
    try {
        const response = await fetch(url, {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

async function saveData<T>(url: string, data: T): Promise<void> {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Success:', responseData);
    } catch (error) {
        console.error('Error:', error);
    }
}

export {getData, saveData}