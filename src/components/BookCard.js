import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import {colors, fonts} from '../config/constant';
import { useNavigation } from '@react-navigation/native';

// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';

const BookCard = ({item, index}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('BookDetail', {item})}
      style={{...styles.container, marginLeft: index % 2 === 1 ? 15 : 0}}>
      <Image
        resizeMode="cover"
        source={{uri: item?.imageLink}}
        style={styles.image}
      />

      {/* favorite icon */}
      <View style={styles.favoriteIconContainer}>
        <AntDesign
          name={item?.is_liked ? 'heart' : 'hearto'}
          color={colors.red}
          size={22}
        />
      </View>

      <Text
        numberOfLines={1}
        style={{paddingTop: 12, fontFamily: fonts.poppinsSemiBold}}>
        {item?.author}
      </Text>

      <View style={styles.ratingContainer}>
        <Rating
          readonly={true}
          ratingCount={5}
          ratingColor={colors.orange}
          type="custom"
          startingValue={item?.rating}
          imageSize={16}
        />

        <Text style={styles.reviewCount}>{`(${item?.reviews})`}</Text>
      </View>

      <Text style={{fontFamily: fonts.poppinsRegular}}>${item?.price}</Text>
    </TouchableOpacity>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    width: '47%',

    marginTop: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
  },
  favoriteIconContainer: {
    position: 'absolute',
    right: 8,
    top: 8,
    backgroundColor: colors.white,
    width: 35,
    height: 35,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  ratingContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginVertical: 5,
  },
  reviewCount: {
    paddingLeft: 5,
    color: colors.lightGray,
    fontFamily: fonts.poppinsRegular,
    fontSize: 12,
  },
});
