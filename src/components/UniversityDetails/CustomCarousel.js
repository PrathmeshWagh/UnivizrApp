import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native'
import React, { useState } from 'react';
import { Carouselimage } from '../../Constants/Carouselimage';

const CustomCarousel = () => {

  const screenWidth = Dimensions.get('window').width;

  const [activeIndex, setActiveIndex] = useState(0);

  function renderItem({ item }) {
    return (
      <View>
        <Image source={item.image} style={{ height: 220, width: screenWidth, }} />
      </View>
    )
  }

  function RenderDotIndicator() {
    return (
      Carouselimage.map((dot, index) => {
        if (activeIndex === index) {
          return (
            <View key={index} style={{ marginRight: 5, height: 10, width: 10, borderRadius: 5, backgroundColor: 'green' }}>
            </View>
          )
        } else {
          return (
            <View key={index} style={{ marginRight: 5, height: 10, width: 10, borderRadius: 5, backgroundColor: 'red' }}>
            </View>
          )
        }
      })
    )
  }

  // this event get from onScroll Prop
  function handlerScroll(event) {
    // Get The Scroll Position
    const scrollPosition = event.nativeEvent.contentOffset.x;


    // Get The Index Of Current Active item
    const index = Math.round(scrollPosition / screenWidth);

    //for 1st img scrollPosition - 392.78,  screenWidth - 392.72 

    // Update The Index
    setActiveIndex(index);
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={Carouselimage}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled={true}
        onScroll={handlerScroll}
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5
      }}>{RenderDotIndicator()}</View>

    </View>
  )
}

export default CustomCarousel


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})