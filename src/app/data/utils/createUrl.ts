export default function createUrl(endpoint: string) {
    const base = import.meta.env.VITE_API_URL
    return `${base}${endpoint}`
}