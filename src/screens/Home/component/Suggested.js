import { StyleSheet, ScrollView, View, ActivityIndicator,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useThemeMode } from '@rneui/themed';
import { backgroundDark, backgroundLight } from '../../../components/constant';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListMovie } from '../../../../store/slices/movie';
import CategorySlide from './categorySuggest/categorySlide/';
import CategoryGrid from './categorySuggest/categorygrid';
const Suggested = () => {
  const list = useSelector(state => state.movie.listMovie.results);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { mode } = useThemeMode();
  const dispatch = useDispatch();
  const fetchMovie = async () => {
    await dispatch(fetchListMovie());

  }
  useEffect(() => {
    fetchMovie({ page });
  }, [])
  const loadMoreItems = async () => {
    dispatch(fetchListMovie({ page: page + 1 }));
    setLoading(true)
  };
  const renderFooter = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="gray" />;
    } else {
      return (
        <View style={{ padding: 10 }}>
          <Button title="Load More" onPress={loadMoreItems} />
        </View>
      );
    }
  };

  return (
    <ScrollView
      style={{
        padding: 20,
        backgroundColor: mode == 'dark' ? backgroundDark : backgroundLight
      }}
    >
      <CategorySlide />
      <CategoryGrid
        list={list}
        renderFooter={renderFooter}
        loadMoreItems={loadMoreItems}
      />
    </ScrollView>
  )
}

export default Suggested

const styles = StyleSheet.create({})