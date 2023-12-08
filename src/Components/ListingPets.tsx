import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Height_, Width_} from '../Helpers/Dimentions';
import {VECTOR_ICONS} from '../assets/Icons';
import {useDispatch, useSelector} from 'react-redux';
import {addLikedCard, removeLikedCard} from '../ReduxConfig/store';

interface PetItem {
  bred_for: string;
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  life_span: string;
  name: string;
  temperament: string;
  url: string;
  weight: {
    imperial: string;
    metric: string;
  };
}

interface ListingPetsProps {
  item: {
    item: PetItem;
  };
  navigation: {
    navigation: any;
  };
}

const ListingPets: React.FC<ListingPetsProps> = (props: any) => {
  const dispatch = useDispatch();
  const likedCards = useSelector((state: any) => state.likedCards.cards);
  const isLiked = likedCards.some(
    (card: any) => card.id === props.item.item.id,
  );

  const toggleLike = () => {
    if (isLiked) {
      dispatch(removeLikedCard(props.item.item));
    } else {
      dispatch(addLikedCard(props.item.item));
    }
  };

  const OnAction = (Item_: PetItem) => {
    props.navigation.navigate('DetailScreen', {Item_: Item_});
  };
  const Item_ = props.item.item;
  return (
    <TouchableOpacity
      key={Item_?.name}
      onPress={() => {
        OnAction(Item_);
      }}
      style={styles.cardContainer}>
      <Image source={{uri: Item_.url}} style={styles.dogImage} />
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.dogName}>{Item_.name}</Text>
          <Text style={styles.dogDetails}>{`Breed: ${Item_.breed_group}`}</Text>
        </View>
        <TouchableOpacity onPress={toggleLike}>
          <VECTOR_ICONS.AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            color={isLiked ? 'red' : 'black'}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ListingPets;
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,

    elevation: 2,
  },
  dogImage: {
    width: Width_ * 0.97,
    height: Height_ / 4,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 12,
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dogName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  dogDetails: {
    fontSize: 14,
    color: '#666',
  },
});
