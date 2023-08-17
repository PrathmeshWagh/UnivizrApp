import { View, Image, StyleSheet, Text } from "react-native";


function User({ Data }) {
  return (
    <View style={styles.studentsContainer}>
      {Data.map((student) => (
        <View key={student.id} style={styles.studentBox}>
          <Image source={student.image} style={styles.studentImage} />

          <View style={{ flex: 4, flexDirection: 'row' }}>
            <View >
              <View style={styles.studentInfo}>
                <Text style={styles.studentName}>{student.name}</Text>
                <Image source={student.ratingimage} style={styles.ratingimage} />
                <Text style={styles.rating}>{student.rating}</Text>
              </View>

              <Text style={styles.studentDegree}>{student.degree}</Text>
              <Text>{student.medium}</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.studentRole}>{student.role}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>

  )
}
export default User;

const styles = StyleSheet.create({
  studentsContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 40
  },
  studentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,

    borderColor: 'black',
    borderRadius: 8,
  },
  studentImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  ratingimage: {
    width: 20,
    height: 20,
    marginLeft: 10

  },
  studentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    fontSize: 17,
    fontWeight: 'bold',
  },
  studentName: {
    fontSize: 18,
    color: 'brown'
  },
  studentDegree: {
    marginTop: 10
  },
  studentRole: {
    marginLeft: 20,
    minWidth: 90,
    textAlign: 'center',
    padding: 3,
    height: 25,
    borderWidth: 1,
    backgroundColor: 'purple',
    color: 'white',
    borderRadius: 2
  }
})