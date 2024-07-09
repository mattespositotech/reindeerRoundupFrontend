function loadStoredData(key: string) {
  return JSON.parse(sessionStorage.getItem(key) as string);
}

function saveStoredData<Type>(key: string, data: Type) {
  const stringified = JSON.stringify(data);
  sessionStorage.setItem(key, stringified);
}

function addToStoredData<Type>(key: string, data: Type) {
    const existingData = loadStoredData(key);
    let updatedData: Type;

    if (existingData) {
        const parsedData: Type = JSON.parse(existingData);
        if (typeof parsedData === 'object' && parsedData !== null) {
            updatedData = { ...parsedData, ...data };
        } else {
            throw new Error('Existing data is not an object');
        }
    } else {
        updatedData = data;
    }

    saveStoredData(key, updatedData);
}

export { loadStoredData, saveStoredData, addToStoredData };