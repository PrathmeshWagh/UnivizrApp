import { View, Text, StyleSheet, Pressable } from "react-native";
import IconButton from "../components/UI/IconButton";
import { SearchBar } from "react-native-screens";
import { useState } from "react";



function SearchScreen({ navigation }) {

  const [selectedBtn, setSelectedBtn] = useState('Advisor');





  return (
    <View style={styles.screen}>
      <View style={styles.headerScreen}>
        <IconButton
          icon={"arrow-left"}
          size={30}
          color={"black"}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        />
        <SearchBar placeholder="jdj" />
        <View>
          <Pressable />
        </View>

      </View>

      <View style={styles.content}>

      </View>
    </View>
  )
}

export default SearchScreen;

const styles = StyleSheet.create({

})