import { useEffect, useState } from "react";
import axios from "axios";

const useFetchMovies = (page) => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async (page) => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=634b49e294bd1ff87914e7b9d014daed&language=es&page=${page}`
        );
        return data.results;
    };

    const getMovies = async () => {
        const data = await fetchMovies(page);
        setMovies(data);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return { movies, fetchMovies };
};

export default useFetchMovies;
