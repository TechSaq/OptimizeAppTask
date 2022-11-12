import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeStyleSheet } from '../hooks'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';

const InputDetail = ({ label, value, icon = "pencil-outline" }) => {

  const theme = useTheme();

  const styles = useThemeStyleSheet(createStyles);

  return (
    <View style={styles.container}>

      <Icon name={icon} size={35} color={theme.colors.white} />

      <View style={styles.detailWrapper}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  )
}

export default InputDetail

const createStyles = (theme) => StyleSheet.create({
  container: {
    backgroundColor: '#2d0967',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10
  },
  detailWrapper: {
    marginLeft: 15
  },
  label: {
    color: theme.colors.white,
    fontSize: 16,
    marginBottom: 6
  },
  value: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: 'bold'
  }
})
