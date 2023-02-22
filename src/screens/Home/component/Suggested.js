import { StyleSheet, ScrollView, View, ActivityIndicator, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useThemeMode } from '@rneui/themed';
import { backgroundDark, backgroundLight } from '../../../components/constant';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListMovie } from '../../../../store/slices/movie';
import CategorySlide from './categorySuggest/categorySlide/';
import CategoryGrid from './categorySuggest/categorygrid';
import { useNavigation } from '@react-navigation/native';
const Suggested = () => {
  const list = useSelector(state => state.movie.listMovie.results);
  console.log("list",list)
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { mode } = useThemeMode();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const fetchMovie = async () => {
    await dispatch(fetchListMovie());
    
  }
  useEffect(() => {
    fetchMovie();
  }, [])

  const loadMoreItems = async () => {
      setLoading(true)
      setData(prevData => [...prevData, ...list]);
  };
  const detailMovie = (id) => {
    navigation.navigate('DetailScreen', { id })
}
  const renderFooter = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="gray" />;
    } 
    else {
      return (
        <View style={{ padding: 10 }}>
          <Button title="Load More" onPress={loadMoreItems} />
        </View>
      );
    }
  };

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: mode == 'dark' ? backgroundDark : backgroundLight
      }}
    >
      <CategorySlide />
      <CategoryGrid
        list={list}
        data={data}
        renderFooter={renderFooter}
        loadMoreItems={loadMoreItems}
        detailMovie={detailMovie}
      />
    </View>
  )
}

export default Suggested

const styles = StyleSheet.create({})