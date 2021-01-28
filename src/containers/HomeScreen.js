import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, StatusBar } from "react-native";
import MovieCard from "../components/MovieCard";
import useFetchMovies from "../hooks/useFetchMovies";

export default function HomeScreen({ navigation }) {
    const [page, setPage] = useState(1);
    const [movieList, setMovieList] = useState([]);

    const { movies, fetchMovies } = useFetchMovies(page);

    useEffect(() => {
        setMovieList(movies);
    }, [movies]);

    useEffect(() => {
        addMoviesToList();
    }, [page]);

    const addMoviesToList = async () => {
        const newMovies = await fetchMovies(page);
        setMovieList([...movieList, ...newMovies]);
    };

    const refreshMovies = async () => {
        const movies = await fetchMovies(1);
        setMovieList(movies);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={movieList}
                renderItem={({ item }) => {
                    return (
                        <MovieCard
                            navigation={navigation}
                            key={item.id}
                            movie={item}
                        />
                    );
                }}
                numColumns={2}
                onEndReached={() => setPage(page + 1)}
                onEndReachedThreshold={0.5}
                onRefresh={refreshMovies}
                refreshing={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
    },
});
