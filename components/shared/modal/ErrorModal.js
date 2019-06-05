import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';

import { Modal, ModalHeader, ModalBody, ModalFooter } from './baseModal';
import NavigationService from '../../../services/NavigationService';

const ErrorModal = ({ isVisible, closeModal }) => {
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
        <TouchableOpacity onPress={() => NavigationService.navigate('AuthLoading')}>
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
