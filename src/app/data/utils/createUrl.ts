export default function createUrl(endpoint: string) {
    const base = import.meta.env.VITE_API_URL
    // const baseUrl = "http://127.0.0.1:10000/";
    console.log(base)
    return `${base}${endpoint}`
}