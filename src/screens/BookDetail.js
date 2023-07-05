import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fonts} from '../config/constant';
import {Rating} from 'react-native-ratings';

// Components
import {Header} from '../components';

// Icons
import Feather from 'react-native-vector-icons/Feather';

const BookDetail = props => {
  const item = props.route.params?.item;

  return (
    <View style={styles.container}>
      <Header isBack />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, paddingHorizontal: 24}}>
          <View style={styles.imageBodyContainer}>
            <Image
              resizeMode="contain"
              source={{uri: item?.imageLink}}
              style={styles.image}
            />

            <View style={{flexDirection: 'row', marginVertical: 12}}>
              <View style={styles.box}>
                <Text style={{fontFamily: fonts.poppinsSemiBold}}>Rating</Text>
                <View style={styles.ratingContainer}>
                  <Rating
                    readonly={true}
                    ratingCount={5}
                    ratingColor={colors.orange}
                    type="custom"
                    startingValue={item?.rating}
                    imageSize={16}
                  />
                </View>
              </View>

              <View style={styles.box}>
                <Text style={{fontFamily: fonts.poppinsSemiBold}}>Reviews</Text>
                <Text style={styles.reviewCount}>{`(${item?.reviews})`}</Text>
              </View>

              <View style={styles.box}>
                <Text style={{fontFamily: fonts.poppinsSemiBold}}>Price</Text>
                <Text style={{fontFamily: fonts.poppinsRegular}}>
                  ${item?.price}
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              fontFamily: fonts.poppinsSemiBold,
              fontSize: 20,
              marginTop: 15,
            }}>
            {item?.title}
          </Text>
          <Text style={{fontFamily: fonts.poppinsRegular, marginTop: 10}}>
            Author: {item?.author}
          </Text>
          <Text style={{fontFamily: fonts.poppinsRegular, marginTop: 10}}>
            Country: {item?.country}
          </Text>
          <Text style={{fontFamily: fonts.poppinsRegular, marginTop: 10}}>
            Language: {item?.language}
          </Text>
          <Text style={{fontFamily: fonts.poppinsRegular, marginTop: 10}}>
            Year: {item?.year}
          </Text>
          <Text style={{fontFamily: fonts.poppinsRegular, marginTop: 10}}>
            Pages: {item?.pages}
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>View Details</Text>

            <Feather name="external-link" size={22} color={colors.white} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 15},
  imageBodyContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderRadius: 14,
    paddingHorizontal: 30,
    backgroundColor: colors.white,
  },
  box: {flex: 1, alignItems: 'center'},
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
    marginVertical: 5,
  },
  image: {
    width: 250,
    height: 400,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#004D6D',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 16,
  },
});
