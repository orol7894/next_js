import { API_URL } from "../app/(home)/page";

async function getMovie(id){
    await new Promise((resolve)=>setTimeout(resolve,1000))
    const resp = await fetch(`${API_URL}/${id}`)
    return resp.json()
}

export default async function MovieInfo({id}){
    const movie = await getMovie(id)
    return <h6>{JSON.stringify(movie)}</h6>

}