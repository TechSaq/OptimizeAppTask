import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeStyleSheet } from '../hooks'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from '@react-navigation/native'

const MediaPicker = () => {

  const theme = useTheme();
  const styles = useThemeStyleSheet(createStyles);

  return (
    <View style={styles.container}>

      <View style={styles.iconWrapper}>
        <Icon name="camera" size={40} color={theme.colors.secondary} />
      </View>
      <Text style={styles.text}>Add Media</Text>

    </View>
  )
}

export default MediaPicker

const createStyles = (theme) => StyleSheet.create({
  container: {
    backgroundColor: '#2d0967',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
    flex: 1
  },
  iconWrapper: {
    borderWidth: 4,
    borderColor: theme.colors.secondary,
    padding: 20,
    borderRadius: 50
  },
  text: {
    fontSize: 18,
    color: theme.colors.secondary,
    marginTop: 10,
    marginBottom: 10
  }
})