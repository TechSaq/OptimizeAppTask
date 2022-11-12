import { StyleSheet, Pressable, View, Modal, Text } from 'react-native'
import React, { useState } from 'react'
import { useThemeStyleSheet } from '../hooks';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ModalOA = ({ children, content, header, ...props }) => {

  const styles = useThemeStyleSheet(createStyles)

  const [modalVisible, setModalVisible] = useState(false);

  const handleModalOpen = () => setModalVisible(true);

  const handleModalClose = () => setModalVisible(false);

  return (
    <View>

      <Pressable onPress={handleModalOpen}>
        {React.cloneElement(children, props)}
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalView}>

          <View style={styles.header}>
            <Pressable onPress={handleModalClose}>
              <Icon name="close" size={30} color={"#000"} />
            </Pressable>
            <Text style={styles.headerTitle}>{header}</Text>
          </View>

          {content}

        </View>
      </Modal>
    </View>
  )
}

export default ModalOA

const createStyles = (theme) => StyleSheet.create({
  modalView: {
    margin: 20,
    marginTop: 70,
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 25,
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginVertical: 10
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 8,
    textTransform: 'uppercase',
  },

})