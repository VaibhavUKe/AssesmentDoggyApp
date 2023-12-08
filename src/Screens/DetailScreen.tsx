import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {FONTS} from '../assets/fonts/Fonts';
import {COLORS} from '../assets/Colors/Colors';
import {Height_, Width_} from '../Helpers/Dimentions';


const DetailScreen = (props: any) => {
  const Path = props.route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.HeadingText}>{Path?.Item_?.name}</Text>

        <Image source={{uri: Path.Item_.url}} style={styles.dogImage} />

        <Text
          style={styles.dogDetails}>{`Breed: ${Path?.Item_.breed_group}`}</Text>
        <Text
          style={
            styles.dogDetails
          }>{`Temperament: ${Path.Item_.temperament}`}</Text>
        <Text
          style={
            styles.dogDetails
          }>{`Height: ${Path.Item_.height.imperial} inches`}</Text>
        <Text
          style={
            styles.dogDetails
          }>{`Weight: ${Path.Item_.weight.imperial} lbs`}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1C1C1C',
  },
  dogImage: {
    width: Width_ * 0.92,
    height: Height_ / 3,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: '5%',
  },
  dogDetails: {
    fontSize: 16,
    color: COLORS.White,
    letterSpacing: 1,
    lineHeight: 30,
  },
  HeadingText: {
    fontFamily: FONTS.Regular,
    fontWeight: 'bold',
    color: COLORS.White,
    fontSize: 24,
    marginLeft: '2%',
  },
});
