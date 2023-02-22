import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchMovieDetailById, fetchVideoDetailById } from '../../../store/slices/movie';
import { useDispatch, useSelector } from 'react-redux';
import { Video, AVPlaybackStatus } from 'expo-av';
import { fetchListMovie } from '../../../store/slices/movie';
import WebView from 'react-native-webview';
const width = Dimensions.get('screen').width;
const DetailScreen = ({ navigation, route }) => {
    const video = React.useRef(null);
    const { id } = route.params
    const [movieDetail, setMovieDetail] = useState([]);
    const [videoDetail, setVideoDetail] = useState([]);
    const dispatch = useDispatch();
    const list = useSelector(state => state.movie.listMovie.results);

    useEffect(() => {
        dispatch(fetchListMovie());
        dispatch(fetchMovieDetailById({ id: id }))
            .then(res => {
                const detail = res?.payload;
                setMovieDetail(detail)
            })
        dispatch(fetchVideoDetailById({ id: id }))
            .then(res => {
                if (res?.payload?.results.length > 0) {
                    const video = res?.payload?.results[0];
                    setVideoDetail(video)
                }
            })
    }, [id])
    
    const Item = ({ title, image }) => (
        <View style={{
            width: width / 4,
            marginRight: 10,
            // width:"100%",
            height:0,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{width:"100%",height:"100%"}}>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500/${image}` }}
                    style={{
                        resizeMode: 'cover',
                        width: "100%",
                        height: 100,
                        borderRadius: 15,

                    }}
                />
            </View>
            {/* <View >
                <Text style={styles.title}>{title}</Text>
            </View> */}
        </View>
    );
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.videoBanner}>
                    <WebView
                        source={{ uri: `https://www.youtube.com/watch?v=${videoDetail.key}` }}
                        style={{
                            flex: 1,
                        }}
                    />
                </View>

                <View style={styles.description}>
                    <View style={{ width: 120, height: 20, marginTop: 10, marginLeft: 5 }}>
                        <Text>Phim đề xuất</Text>
                    </View>
                    <View style={{ height: 120 }}>
                        <FlatList
                            style={{ flex: 1 }}
                            horizontal={true}
                            data={list}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <Item title={item.title} image={item.backdrop_path} />}
                        />

                    </View>
                    <View style={styles.containerTopic}>
                        {movieDetail?.genres?.map((item, index) => {
                            return <TouchableOpacity style={styles.boxTopic} key={index}>
                                <Text style={styles.textTopic}>{item.name}</Text>
                            </TouchableOpacity>
                        })}

                    </View>
                    <ScrollView style={styles.content}>
                        <Text style={{ fontWeight: "bold", fontSize: 30 }}>{movieDetail.title}</Text>
                        <Text style={{}}>
                            {movieDetail.tagline}
                        </Text>
                        <Text style={{ fontSize: 12, marginTop: 10 }}>
                            {movieDetail.overview}

                        </Text>
                    </ScrollView>
                </View>
            </SafeAreaView>

        </>
    )
}

export default DetailScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    description: {
        flex: 2,
        width: "100%",
        paddingHorizontal: 12,
        marginVertical: 2
    },
    containerTopic: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        marginTop: 5,
    },
    boxTopic: {
        paddingVertical: 5,
        paddingHorizontal: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 8,
        marginRight: 10

    },
    content: {
        marginTop: 18,
        lineHeight: 0.5
    },
    
    textTopic: {
        fontSize: 12,
    },
    videoBanner: {
        flex: 1,
        width: 400,
        height: 400
    },
    image: {
        width: "100%",
        height: "100%"
    },
    video: {
        width: "100%",
        height: "100%"
    }

})
