import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import {  useSelector } from 'react-redux';
import ListingPets from '../Components/ListingPets';



const LikedPetsScreen= (props:any) => {
 
  const likedCards = useSelector((state: any) => state.likedCards.cards);



  return (
    <View style={styles.container}>
      {likedCards.length === 0 ? (
        <Text style={styles.emptyText}>No Liked Pets</Text>
      ) : (
        <FlatList
          data={likedCards}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListingPets
              item={{ item }}
              navigation={props.navigation}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
  },
  emptyText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default LikedPetsScreen;
