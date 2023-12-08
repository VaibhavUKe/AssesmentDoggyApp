import React, {useCallback, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  SafeAreaView,
  TextInput,
  Modal,
  TouchableOpacity,
} from 'react-native';
import SpinnerItem from '../Components/SpinningLoader';
import {callDogsData} from '../ApiConfig/ApiCall';
import {DogsList} from '../ApiConfig/Endpoints';
import ListingPets from '../Components/ListingPets';
import ListEmpty from '../Components/ListEmpty';
import {COLORS} from '../assets/Colors/Colors';
import {VECTOR_ICONS} from '../assets/Icons';
import {Height_} from '../Helpers/Dimentions';
import {FONTS} from '../assets/fonts/Fonts';
import {Picker} from '@react-native-picker/picker';
import{ styles} from './ListingScreenStyles'
interface Dog {
  name?: string;
}

interface DogBreed {
  breed_group: string;
}
const ListScreen = (props: any) => {
  const [dogsData, setDogsData] = useState([]);
  const [Loader, setLoader] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [SearchText, setSearchText] = useState('');
  const [ModalVisible, SetModalVisible] = useState(false);

  const [Selectedbreed, setSelectedbreed] = useState('Please select a Breed');
  const fetchDogsData = async () => {
    setLoader(true);

    try {
      const List = await callDogsData(DogsList);

      setLoader(false);

      setDogsData(List);
    } catch (error) {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchDogsData();
  }, []);
  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(() => {
    fetchDogsData();
    setRefreshing(true);
    wait(1500).then(() => setRefreshing(false));
  }, []);

  let searchResults = dogsData?.filter((item: Dog | undefined) =>
    item?.name?.toLowerCase().includes(SearchText?.toLowerCase()),
  );

  const handleSelectBreed = (breed: string) => {
    setSelectedbreed(breed);
  };

  const OnFilterSave = () => {
    searchResults = dogsData?.filter((item: DogBreed | undefined) =>
      item?.breed_group?.toLowerCase().includes(Selectedbreed?.toLowerCase()),
    );
    setDogsData(searchResults);
    SetModalVisible(false);
  };
  const OnFilterCancel = () => {
    SetModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HeaderView}>
        <Text style={styles.header}>List of Dogs</Text>

        <View
          style={styles.HeaderContainer}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('LikedPetsScreen');
            }}>
            <VECTOR_ICONS.FontAwesome
              name="list-ul"
              size={22}
              color={'white'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              SetModalVisible(true);
            }}>
            <VECTOR_ICONS.MaterialCommunityIcons
              name="filter-menu-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.SearchBarView}>
        <TextInput
          style={styles.InputStyle}
          placeholder="Search by name..."
          placeholderTextColor={'rgba(38, 50, 56, 0.3)'}
          onChangeText={text => {
            setSearchText(text);
          }}
        />
        <VECTOR_ICONS.AntDesign
          name="search1"
          color={COLORS.Black}
          size={20}
          style={{marginLeft: '3%'}}
        />
      </View>

      <FlatList
        data={searchResults}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor={COLORS.White}
            colors={[COLORS.Golden]}
          />
        }
        ListEmptyComponent={() => {
          return <ListEmpty />;
        }}
        renderItem={item => {
          return <ListingPets item={item} navigation={props.navigation}  />;
        }}
      />
      <SpinnerItem loader={Loader} />

      <Modal visible={ModalVisible} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'rgb(34, 34, 36)',

              padding: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: COLORS.White,
                fontFamily: FONTS.Regular,
                fontSize: 24,
                textAlign: 'left',
              }}>
              Filter List by Breed
            </Text>
            <View style={[styles.InputView, {flexDirection: 'row'}]}>
              <Picker
                selectedValue={Selectedbreed}
                style={styles.picker}
                itemStyle={styles.pickerItem}
                dropdownIconColor={COLORS.PrimaryBlack}
                selectionColor={'rgba(2, 6, 23, 0.85)'}
                placeholder={'Please select a Breed'}
                onValueChange={(itemValue: string) =>
                  handleSelectBreed(itemValue)
                }>
                {dogsData.map((d: DogBreed) => (
                  <Picker.Item
                    key={d.breed_group}
                    label={`${d.breed_group}`}
                    value={d.breed_group}
                    color={'rgba(2, 6, 23, 0.6)'}
                    fontFamily={FONTS.Regular}
                    style={{fontFamily: FONTS.Regular}}
                  />
                ))}
              </Picker>
            </View>

            <View style={styles.ModalMainView}>
              <TouchableOpacity
                onPress={() => {
                  OnFilterSave();
                }}
                style={styles.buttonView}>
                <Text style={styles.ButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  OnFilterCancel();
                }}
                style={styles.buttonView}>
                <Text style={styles.ButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};



export default ListScreen;
