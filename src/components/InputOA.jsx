import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { useThemeStyleSheet } from '../hooks'
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const InputOA = ({
  label,
  name,
  value = "",
  placeholder,
  onChangeText,
  style = {},
  icon,
  ...rest
}) => {

  const theme = useTheme()
  const styles = useThemeStyleSheet(createStyles)

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>

        <View>
          {label ? <Text style={styles.label}>{label}</Text> : null}

          <TextInput
            name={name}
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            style={[styles.input, style]}
            placeholderTextColor={theme.colors.offWhite}
            {...rest}
            editable={false}
          />
        </View>

        {
          icon &&
          <Icon name={icon} size={40} color={theme.colors.offWhite} />
        }
      </View>

    </View>
  )
}

export default InputOA

const createStyles = (theme) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primaryLevel2,
    height: 80,
    borderRadius: 80,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    paddingLeft: 10,
    fontSize: 18,
    color: theme.colors.offWhite,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    color: theme.colors.offWhite,
    fontSize: 16,
    paddingLeft: 10,
    paddingTop: 5
  }
})