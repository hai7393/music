import { View, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native'
import Txt from '../../../../../components/ui/Txt';
import React from 'react';
import Icon from '../../../../../components/icon';
const CategoryGrid = ({ list, renderFooter, loadMoreItems,data }) => {
    const ItemListAll = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    margin: 8,
                }}
            >
                <View style={{
                    flex: 1,
                    height: '100%',
                    width: '100%',
                    borderRadius: 15,

                }}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` }}
                        style={{
                            resizeMode: 'cover',
                            width: "100%",
                            height: 100,
                            borderRadius: 15,

                        }}
                    />
                </View>
                <View style={{ paddingVertical: 8 }}>
                    <Txt h2 title={item.title} />
                    <Txt h2 title={item.popularity} />
                    <View
                        style={{
                            marginTop: 5,
                            flexDirection: 'row'
                        }}
                    >
                        <TouchableOpacity >
                            <Icon name="heart" number="123" />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Icon name="eye" number="123" />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <View
                style={{
                    marginVertical: 5,
                }}
            >
                <Txt h1 title="See All" />
            </View>
            <FlatList
                data={list}
                renderItem={({ item }) => <ItemListAll item={item} />}
                keyExtractor={item => item.id}
                numColumns={2}
                ListFooterComponent={renderFooter}
                onEndReached={loadMoreItems}
                onEndReachedThreshold={0.5}
            />
        </View>

    )
}

export default CategoryGrid