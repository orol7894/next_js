import { API_URL } from "../app/(home)/page"

async function getVideo(id){
    await new Promise((resolve)=>setTimeout(resolve,1000))
    const resp = await fetch(`${API_URL}/${id}/videos`)
    return resp.json()
}

export default async function MovieVideos({id}){
    const videos = await getVideo
    return <h6>{JSON.stringify(videos)}</h6>
}