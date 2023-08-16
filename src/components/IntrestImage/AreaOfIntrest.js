import { Text, View, Image, StyleSheet } from 'react-native'

export default function AreaOfIntrest() {
  const imageAndTitleData = [
    { image: require('../../assest/science.jpeg'), title: 'Science' },
    { image: require('../../assest/science.jpeg'), title: 'Technology' },
    { image: require('../../assest/science.jpeg'), title: 'Media' },
    { image: require('../../assest/science.jpeg'), title: 'Business' },
    { image: require('../../assest/science.jpeg'), title: 'Health' },
    { image: require('../../assest/science.jpeg'), title: 'Accounting' },
    { image: require('../../assest/science.jpeg'), title: 'Law' },
    { image: require('../../assest/science.jpeg'), title: 'Health' },
  ];


  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {imageAndTitleData.slice(0, 4).map((item, index) => (
          <ImageWithTitle key={index} image={item.image} title={item.title} />
        ))}
      </View>
      <View style={styles.row}>
        {imageAndTitleData.slice(4, 8).map((item, index) => (
          <ImageWithTitle key={index} image={item.image} title={item.title} />
        ))}
      </View>
    </View>
  );
}

function ImageWithTitle({ image, title }) {
  return (
    <View style={styles.imageTitleContainer}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  imageTitleContainer: {
    alignItems: 'center',
    margin: 10
  },
  image: {
    width: 70,
    height: 70,
    marginVertical: 10,
  },
  title: {
    textAlign: 'center',
  },
});