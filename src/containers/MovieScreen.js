import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import axios from "axios";
import MovieDesc from "../components/MovieDesc";

const IMAGE_URI = "https://image.tmdb.org/t/p/w500";

const genresToString = (genres) => {
    let genresString = "";
    genres.forEach(({ name }, index) => {
        index === 0 ? (genresString += name) : (genresString += `, ${name}`);
    });
    return genresString;
};

export default function MovieScreen({ route }) {
    const [loading, setLoading] = useState(true);
    const movieId = route.params?.movieId;
    const [movie, setMovie] = useState([]);

    const getMovieData = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=634b49e294bd1ff87914e7b9d014daed&language=es`
        );
        setMovie(data);
        setLoading(false);
    };

    useEffect(() => {
        getMovieData();
    }, []);

    if (!loading) {
        return (
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: `${IMAGE_URI}${movie.backdrop_path}` }}
                />
                <View style={styles.container}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <MovieDesc
                        title={"Duración:"}
                        description={`${movie.runtime} min`}
                    />
                    <MovieDesc
                        title={"Fecha de estreno:"}
                        description={movie.release_date}
                    />
                    <MovieDesc
                        title={"Calificación:"}
                        description={movie.vote_average}
                    />
                    <MovieDesc
                        title={"Géneros:"}
                        description={genresToString(movie?.genres)}
                    />
                    <MovieDesc
                        title={"Descripción:"}
                        description={movie.overview}
                    />
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.loading_container}>
                <ActivityIndicator size="small" color="#0087ff" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    loading_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,
        paddingVertical: 2,
    },
});
