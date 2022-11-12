import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ButtonOA, InputDetail, MediaPicker, ScreenLayout } from '../components';
import { useThemeStyleSheet } from '../hooks';

const CreateCampaignMedia = () => {

  const styles = useThemeStyleSheet(createStyles);
  const navigation = useNavigation();

  return (
    <ScreenLayout>
      <View style={styles.section}>

        <InputDetail label={"Campaign Name"} value={"Campaign name here"} />

        <InputDetail label={"Website"} value={"Website url here"} />

        <MediaPicker />

      </View>

      <ButtonOA
        title="Next"
        icon="chevron-right"
        onPress={() => navigation.navigate('CampaignDetails')}
      />

    </ScreenLayout>
  )
}

export default CreateCampaignMedia

const createStyles = (theme) => StyleSheet.create({
  section: {
    backgroundColor: '#3e0c8c',
    flex: 1,
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 20
  },

})