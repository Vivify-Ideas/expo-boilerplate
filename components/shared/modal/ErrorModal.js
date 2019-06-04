import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';

import ModalWrapper from './modalParts/Modal';
import ModalHeader from './modalParts/ModalHeader';
import ModalBody from './modalParts/ModalBody';
import ModalFooter from './modalParts/ModalFooter';
import NavigationService from '../../../services/NavigationService';

const ErrorModal = ({ isVisible, closeModal }) => {
  return (
    <ModalWrapper isVisible={isVisible} onRequestClose={closeModal}>
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
    </ModalWrapper>
  );
};

export default ErrorModal;

ErrorModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func
};
