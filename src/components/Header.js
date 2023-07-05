import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../config/constant';

//  Icons
import {profilePic} from '../assets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Header = ({isBack = false}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {!isBack ? (
        <View style={styles.childrenContainer}>
          <Text style={{fontFamily: fonts.poppinsSemiBold, fontSize: 18, color: colors.gray}}>
            Hi, Nick
          </Text>

          <Image
            resizeMode="contain"
            source={profilePic}
            style={{width: 40, height: 40}}
          />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}>
          <AntDesign name={'arrowleft'} size={26} color={colors.gray} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 55,
  },
  childrenContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backBtn: {
    flex: 1,
    width: 40,
    justifyContent: 'center',
  },
});
