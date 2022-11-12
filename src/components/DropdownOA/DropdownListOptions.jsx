import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeStyleSheet } from '../../hooks';
import DropdownOptionItem from './DropdownOptionItem';

const DropdownListOptions = ({ options = [], value }) => {

  const styles = useThemeStyleSheet(createStyles);

  return (
    <View>
      {
        options.map(option => (
          <DropdownOptionItem
            key={option.id}
            option={option}
            selected={option.id === value}
          />
        ))
      }
    </View>
  )
}

export default DropdownListOptions

const createStyles = (theme) => StyleSheet.create({})