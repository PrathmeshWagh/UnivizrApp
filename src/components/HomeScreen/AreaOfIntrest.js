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

  function ImageWithTitle({ image, title }) {
    return (
      <View style={styles.imageTitleContainer}>
        <View style={{ marginRight: 15 }}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    );
  }

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


const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '80%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  image: {
    width: 60,
    height: 60,
    // marginTop: 15,
  },
  title: {
    textAlign: 'center',
  },
});