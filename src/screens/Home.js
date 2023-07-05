import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fonts} from '../config/constant';

// Components
import {BookCard, Header} from '../components';

// Icons
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';

// Actions
import HomeAction from '../redux/Actions/HomeAction';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  // Redux dispatch and state
  const dispatch = useDispatch();
  const {booksArray} = useSelector(state => state.HomeReducer);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    searchBook();
  }, [searchText]);

  const getData = async () => {
    await fetch('https://books-list-api.vercel.app/books', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR',
      },
    }).then(res =>
      res.json().then(data => {
        setLoading(false);
        dispatch(HomeAction.getBooksData(data.data));
      }),
    );
  };

  const renderBooksItem = ({item, index}) => {
    return <BookCard item={item} index={index} />;
  };

  const searchBook = () => {
    if (searchText) {
      let searchResult = booksArray.filter(item =>
        item?.author.includes(searchText),
      );

      dispatch(HomeAction.getBooksData(searchResult));
    } else {
      getData();
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.searchbarContainer}>
        <Feather name="search" size={21} color={colors.gray} />

        <View style={{flex: 1}}>
          <TextInput
            value={searchText}
            placeholder="Search..."
            placeholderTextColor={colors.gray}
            onChangeText={text => setSearchText(text)}
            style={styles.input}
          />
        </View>
      </View>

      <View style={{flex: 1}}>
        {loading ? (
          <View
            style={styles.loaderContainer}>
            <ActivityIndicator size={'large'} color={colors.gray} />
          </View>
        ) : (
          <FlatList
            numColumns={2}
            data={booksArray}
            renderItem={renderBooksItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => {
              return (
                <View style={{height: 65, paddingVertical: 10}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontFamily: fonts.poppinsSemiBold,
                      color: colors.lightGray,
                    }}>
                    No item found...
                  </Text>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 15},
  loaderContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  searchbarContainer: {
    borderWidth: 1,
    height: 45,
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderColor: colors.lightGray,
    borderRadius: 12,
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    fontFamily: fonts.poppinsMedium,
    color: colors.gray,
  },
});
