import { View, Text, StyleSheet, Pressable, } from "react-native";
import IconButton from "../components/UI/IconButton";
import { useState } from "react";
import SeacrchAdvisor from "../components/ConsultWithDataCompo/SeacrchAdvisor";
import SearchSpeciality from "../components/ConsultWithDataCompo/SearchSpecilaity";
import CustomSearchBar from "../components/CustomSearchBar/CustomSearchBar";




function SearchScreen({ navigation }) {

  const [selectedBtn, setSelectedBtn] = useState('Advisor');
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const handleClearSearch = () => {
    setSearchText("");
  };


  return (
    <View style={styles.screen}>
      <View style={styles.headerScreen}>
        <View style={{ flexDirection: 'row' }}>
          <IconButton
            icon={"arrow-left"}
            size={40}
            color={"black"}
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
            style={styles.backbtn}
          />
          <CustomSearchBar
            searchText={searchText}
            onSearchTextChange={handleSearchTextChange}
            onClearSearch={handleClearSearch}
          />
        </View>

        <View style={styles.btnContainer}>
          <Pressable
            onPress={() => {
              setSelectedBtn("Advisor")
            }}
            style={[
              styles.AdvisorBtn,
              selectedBtn === 'Advisor' && styles.selectedBtn

            ]}
          >
            <Text style={[styles.adviText]}>ADVISOR</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setSelectedBtn("Speciality")
            }}
            style={[
              styles.specialityBtn,
              selectedBtn === 'Speciality' && styles.selectedBtn
            ]}
          >
            <Text style={[styles.specialitytext]}>SPECIALITY</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.content}>
        {selectedBtn === 'Advisor' && <SeacrchAdvisor />}
        {selectedBtn === 'Speciality' && <SearchSpeciality />}
      </View>
    </View>
  )
}

export default SearchScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  headerScreen: {
    marginTop: 20
  },
  backbtn: {
    marginLeft: 10
  },
  TextInput: {
    flex: 1,
    marginLeft: 10,
    width: '70%',
    borderRadius: 4,
    backgroundColor: '#F1F1F1'

  },
  btnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    height: 40,
    borderBottomColor: '#808080',
    borderBottomWidth: 0.5
  },
  AdvisorBtn: {
    width: '50%',
  },
  adviText: {
    fontWeight: 'bold',
    padding: 9,
    textAlign: 'center'
  },
  specialityBtn: {
    width: '50%',
  },
  selectedBtn: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  specialitytext: {
    fontWeight: 'bold',
    padding: 9,
    textAlign: 'center'
  },



})