    export default async function getapi() {
    const url="http://localhost:8080/prod"
    const response=await fetch(url)
    const dados=await response.json()
    return dados
}