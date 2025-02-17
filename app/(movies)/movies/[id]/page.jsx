import MovieInfo from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-video"
import { Suspense } from "react"


export default async function MovieDetail({
    params: {id},
}){
    return(
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h1>Loading movie video</h1>}>
            <MovieVideos id={id}/>
            </Suspense>
        </div>
    )
} 