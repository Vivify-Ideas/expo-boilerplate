import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import PropTypes from 'prop-types';

const ModalWrapper = ({ isVisible, closeModal, children }) => {
  return (
    <Modal visible={isVisible} animationType="slide" onRequestClose={closeModal} transparent>
      <View style={styles.container}>
        <View style={styles.modalWrap}>{children}</View>
      </View>
    </Modal>
  );
};

export default ModalWrapper;

ModalWrapper.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.16)',
    flexGrow: 1,
    justifyContent: 'center'
  },
  modalWrap: {
    backgroundColor: 'white',
    height: '50%',
    width: '50%'
  }
});
