import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from '@react-navigation/native'
import { useThemeStyleSheet } from '../hooks'

const DetailRow = ({ label, value, icon, }) => {

  const theme = useTheme();
  const styles = useThemeStyleSheet(createStyles);

  return (
    <View style={[styles.container]}>
      {
        icon &&
        <Icon name={icon} size={40} color={theme.colors.secondary} />
      }
      <View style={styles.content}>
        <Text style={styles.title} >{label}</Text>
        <Text style={styles.subTitle}>{value}</Text>
      </View>
    </View>
  )
}

export default DetailRow

const createStyles = (theme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 4,
    borderColor: 'transparent',
    marginTop: 5,
    marginBottom: 5,

  },
  content: {
    marginLeft: 10,
  },
  title: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5
  },
  subTitle: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 12,
  }
})