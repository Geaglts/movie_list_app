import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    FlatList,
    StatusBar,
    TouchableHighlight,
    Text,
    LogBox,
} from "react-native";
import Movie from "../components/Movie";
import useFetchMovies from "../hooks/useFetchMovies";

export default function Home() {
    const [page, setPages] = useState(1);
    const [movieList, setMovieList] = useState([]);
    //const [movies, setMovies] = useState([]);

    const { movies, fetchMovies } = useFetchMovies(page);

    const addMoviesToList = async () => {
        const newMovies = await fetchMovies(page);
        setMovieList([...movieList, ...newMovies]);
    };

    useEffect(() => {
        setMovieList(movies);
    }, [movies]);

    useEffect(() => {
        addMoviesToList();
    }, [page]);

    return (
        <View style={styles.container}>
            <FlatList
                data={movieList}
                renderItem={({ item }) => {
                    return <Movie key={item.id} movie={item} />;
                }}
                numColumns={2}
                onEndReached={() => setPages(page + 1)}
            />

            {/* <ScrollView
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false}
            >
                {movieList.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </ScrollView> */}
            {/* <TouchableHighlight
                style={styles.button}
                onPress={() => {
                    setPages(page + 1);
                }}
            >
                <Text>Hola</Text>
            </TouchableHighlight> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
    },

    button: {
        position: "absolute",
        bottom: 10,
        right: 10,
        backgroundColor: "#cf2",
        height: 50,
        width: 50,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
});
