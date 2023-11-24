import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import StarIcon from '../components/UI/StarIcon';
import React from 'react';
import { ReviewData } from '../Constants/ReviewData';

const ReviewsAndRating = () => {
  function renderReviewItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.rowContainer}>
          <Image
            source={item.image}
            style={styles.profileImage}
          />
          <View style={styles.contentContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}> {item.name}</Text>
            </View>
            <View style={styles.starsIcon}>
              <StarIcon color="#F9B304" size={20} />
              <StarIcon color="#F9B304" size={20} />
              <StarIcon color="#F9B304" size={20} />
              <StarIcon color="#F9B304" size={20} />
              <StarIcon size={20} />
            </View>
          </View>
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
        <View>
          <Text style={styles.reviewText}>{item.review}</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={ReviewData}
        renderItem={renderReviewItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default ReviewsAndRating

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15
  },
  itemContainer: {
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderBottomWidth: 0.7,
    borderBottomColor: '#808080'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Pushes the date text to the right
    marginBottom: 5
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10, // Add left margin for spacing
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 4,
  },
  starsIcon: {
    flexDirection: 'row',
    marginTop: 2,
  },
  nameText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  reviewText: {
    fontSize: 14,
    color: '#808080'
  },
  dateText: {
    fontSize: 14,
    color: '#808080',
  }
})
