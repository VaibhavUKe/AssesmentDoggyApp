import {StyleSheet} from 'react-native'
import { COLORS } from '../assets/Colors/Colors';
import { FONTS } from '../assets/fonts/Fonts';
import { Height_ } from '../Helpers/Dimentions';

 export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#1C1C1C',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#FFFFFF',
    },
    SearchBarView: {
      backgroundColor: COLORS.White,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: '3%',
      width: '100%',
      height: Height_ / 17,
      alignSelf: 'center',
    },
    InputStyle: {
      marginLeft: '1%',
      width: '85%',
      color: '#1B1212',
      fontSize: 13,
    },
    HeaderView: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-between',
    },
    InputView: {
      marginTop: '2%',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: '#F8FAFC',
      width: '80%',
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: 'rgba(2, 6, 23, 0.06)',
    },
    Input: {
      width: '96%',
      fontFamily: FONTS.Regular,
      fontSize: 16,
      color: COLORS.PrimaryBlack,
    },
    picker: {
      height: 50,
      width: '100%',
      fontFamily: FONTS.Regular,
    },
    pickerItem: {
      fontFamily: FONTS.Regular,
      // color:'red',
      // backgroundColor:'red'
    },
    ModalMainView: {
      flexDirection: 'row',
      width: '60%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonView: {
      alignItems: 'center',
      padding: 10,
      borderRadius: 8,
      backgroundColor: COLORS.White,
      alignSelf: 'center',
      width: '60%',
      margin: '5%',
    },
    ButtonText: {
      color: COLORS.Black,
      fontSize: 16,
      fontWeight: 'bold',
    },
    HeaderContainer:{
      flexDirection: 'row',
      width: '20%',
      justifyContent: 'space-between',
    }
  });