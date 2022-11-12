import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useThemeStyleSheet } from '../hooks'

const ScreenLayout = ({ children }) => {

  const styles = useThemeStyleSheet(createStyles)

  return (
    <SafeAreaView style={styles.safeAreaView} >
      <ScrollView contentContainerStyle={styles.scrollView}>
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ScreenLayout

const createStyles = (theme) => StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  scrollView: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 20,
  }
})