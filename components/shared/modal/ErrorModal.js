import React from 'react';
import * as Updates from 'expo-updates';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './baseModal';

const ErrorModal = ({ isVisible, closeModal }) => {
  const _restartApp = () => {
    closeModal();
    Updates.reloadAsync();
  };

  return (
    <Modal isVisible={isVisible} closeModal={closeModal}>
      <ModalHeader>
        <Text>{$t('error.somethingWrong')}</Text>
      </ModalHeader>
      <ModalBody>
        <Text>{$t('error.doYouWantToRestart')}</Text>
      </ModalBody>
      <ModalFooter>
        <TouchableOpacity onPress={closeModal}>
          <Text>{$t('error.cancel')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_restartApp}>
          <Text>{$t('error.restart')}</Text>
        </TouchableOpacity>
      </ModalFooter>
    </Modal>
  );
};

export default ErrorModal;

ErrorModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func
};
