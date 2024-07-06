import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerVideo } from "../redux/slices/moviesSlice";
import { useEffect, useState } from "react";



const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch();

    // Use a local state to store the trailer video
    const [trailerVideo, setTrailerVideo] = useState(null);
    
    useEffect(() => {
        const getMovieTrailer = async () => {

            try{
                const data = await fetch(
                    "https://api.themoviedb.org/3/movie/" + movie_id + "/videos?language=en-US",
                    API_OPTIONS
                );
    
                const json = await data.json();
    
                // Handle the case where there is no trailer
                const filterData = json.results.filter((video) => video.type === "Trailer");
                const trailer = filterData.length ? filterData[0] : null;
    
                // Update the local state and dispatch to Redux
                setTrailerVideo(trailer);
                // console.log(trailer);
                dispatch(addTrailerVideo(trailer));
            }catch(error){
                console.error("There is something wrong,please try again!!")
            }
        };

        // Fetch the trailer initially when the component mounts
        getMovieTrailer();
    }, [dispatch, movie_id]);

    return trailerVideo;
};

export default useMovieTrailer;
