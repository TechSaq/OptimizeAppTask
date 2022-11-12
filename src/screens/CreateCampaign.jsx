import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DropdownOA, IconButton, InputOA, ScreenLayout } from '../components';

const CreateCampaign = () => {

  const navigation = useNavigation();

  return (
    <ScreenLayout>

      <InputOA
        name="adName"
        label="Ad Name"
        placeholder="Enter your campaign's name"
        value=""
      />

      <DropdownOA
        name="objective"
        label="Objective"
        placeholder="Website Traffic"
        value={2}
        options={[
          {
            id: 1,
            title: "Website Traffic",
            subTitle: "Increase my website visits",
            icon: "web-check",
            color: "#4bd6c6",
          },
          {
            id: 2,
            title: "Brand Awareness",
            subTitle: "Tell people about my brand",
            icon: "bullhorn-outline",
            color: "#ef6c57",
          },
        ]}
      />

      <IconButton
        name="chevron-right"
        onPress={() => {
          navigation.navigate("CreateCampaignMedia")
        }}
      />

    </ScreenLayout>
  )
}

export default CreateCampaign
