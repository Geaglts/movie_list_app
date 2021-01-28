import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const IMAGE_URI = "https://image.tmdb.org/t/p/w500";

export default function MovieView({ movie, navigation, ...rest }) {
    const { title, release_date, vote_average, backdrop_path } = movie;
    const BACKGROUND_URI = `${IMAGE_URI}${backdrop_path}`;

    const sendToMoreDetails = () => {
        navigation.navigate("MovieScreen", {
            movieId: movie.id,
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={sendToMoreDetails} activeOpacity={0.7}>
                <Image style={styles.image} source={{ uri: BACKGROUND_URI }} />
                <View style={styles.movie_desc}>
                    <Text style={styles.movie_title}>{title}</Text>
                    <View style={styles.movie_date_vote}>
                        <Text style={styles.movie_date_vote_text}>
                            {release_date}
                        </Text>
                        <Text style={styles.movie_date_vote_text}>
                            {vote_average}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 5,
        width: "45%",
        height: 300,
    },
    image: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        opacity: 0.9,
    },
    movie_desc: {
        backgroundColor: "#222222",
        zIndex: 1,
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 10,
        opacity: 0.78,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    movie_title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    movie_date_vote: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    movie_date_vote_text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
