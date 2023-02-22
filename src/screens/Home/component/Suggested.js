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
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(false)
  const { mode } = useThemeMode();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    setLoadMore(true)
    setTimeout(() => {
      dispatch(fetchListMovie({page : page})).then(res => {
        if(res.payload.results) {
          setData([...data , ...res.payload.results])
          setLoading(false)
          setLoadMore(false)
        }else {
          setLoading(true)
        }
      })
    }, 2000);
  }, [page])


  const loadMoreItems = async () => {
      if (!loadMore) {
      // setPage(page + 1)
    }
    setLoadMore(true)
  };


  
  const detailMovie = (id) => {
    navigation.navigate('DetailScreen', { id })
}
  const renderFooter = () => {
    console.log(loadMore)
    if (loadMore) {
      return  (
        <View style={{ paddingTop: 120 }}>
          <ActivityIndicator size="large" color="gray" />
      </View>
      )
    
    } 
    else {
      return (
        <View style={{ padding: 20 }}></View>
      );
    }
  };

  if(loading) {
    return null
  }


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