import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeStyleSheet } from '../../hooks'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from '@react-navigation/native'

const DropdownOptionItem = ({ option, selected = false }) => {

  const theme = useTheme();
  const styles = useThemeStyleSheet(createStyles, { option });

  return (
    <View style={[styles.container, selected && styles.selected]}>
      {
        option.icon &&
        <Icon name={option.icon} size={50} color={option.color || "#4bd6c6"} />
      }
      <View style={styles.content}>
        <Text style={styles.title} >{option.title}</Text>
        <Text style={styles.subTitle}>{option.subTitle}</Text>
      </View>
    </View>
  )
}

export default DropdownOptionItem

const createStyles = (theme, { option }) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: 'transparent',
    marginTop: 10,
    marginBottom: 10,

  },
  selected: {
    borderColor: '#9304ff',
  },
  content: {
    marginLeft: 15,
  },
  title: {
    color: option.color || "#4bd6c6",
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  subTitle: {
    color: option.color || "#4bd6c6",
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase'
  }
})