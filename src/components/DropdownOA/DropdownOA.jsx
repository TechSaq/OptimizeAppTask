import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputOA from '../InputOA';
import ModalOA from '../ModalOA';
import { useThemeStyleSheet } from '../../hooks';
import DropdownListOptions from './DropdownListOptions';

const DropdownOA = ({
  name,
  label,
  placeholder,
  value,
  options = [],
  ...rest
}) => {

  const styles = useThemeStyleSheet(createStyles);

  return (
    <View>
      <ModalOA
        content={
          <DropdownListOptions
            options={options}
            value={value} />
        }
        header="Select an objective"
      >
        <InputOA
          name="objective"
          label="Objective"
          placeholder="Website Traffic"
          value=""
          editable={false}
          icon="chevron-down"
          {...rest}
        />
      </ModalOA>
    </View>
  )
}

export default DropdownOA

const createStyles = (theme) => StyleSheet.create({})