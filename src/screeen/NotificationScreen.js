import React from "react";
import { Text, View, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";

function NotificationScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <IconButton icon={'thumb-up'} color={'#800000'} size={30} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.notificationText}>You Have Got 3 Star Rating</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>5:00 PM</Text>
      </View>
    </View>
  );
}

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 30,
    borderWidth: 0.3,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    flex: 2,
  },
  timeContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  notificationText: {
    fontSize: 16,
  },
  timeText: {
    fontSize: 14,
    color: '#666',
  },
});
