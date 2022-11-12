import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useThemeStyleSheet } from '../../hooks'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from '@react-navigation/native'

const ButtonOA = ({ title, icon, onPress, ...rest }) => {

  const theme = useTheme();
  const styles = useThemeStyleSheet(createStyles);

  return (
    <View style={styles.container} {...rest}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
        {
          icon &&
          <Icon name={icon} size={30} color={theme.colors.white} />
        }
      </Pressable>
    </View>
  )
}

export default ButtonOA

const createStyles = (theme) => StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 40,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: theme.colors.white
  }
})