import { StyleSheet, View, Pressable } from 'react-native'
import React from 'react'
import { useThemeStyleSheet } from '../../hooks';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconButton = ({ name, size = 50, color, backgroundColor, onPress }) => {

  const theme = useTheme();
  const styles = useThemeStyleSheet(createStyles, { backgroundColor });

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Icon
          name={name}
          size={size}
          color={color || theme.colors.white}
          style={{
            borderRadius: 200,
          }}
        />
      </Pressable>
    </View>

  )
}

export default IconButton

const createStyles = (theme, { backgroundColor }) => StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: backgroundColor || theme.colors.secondary,
    borderRadius: 200,
  }
})