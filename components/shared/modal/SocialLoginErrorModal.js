import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';

import { Modal, ModalHeader, ModalBody, ModalFooter } from './baseModal';

const SocialLoginErrorModal = ({ error, closeModal }) => {
  return (
    <Modal isVisible={!!error} closeModal={closeModal}>
      <ModalHeader>
        <Text>{$t('error.socialLoginError')}</Text>
      </ModalHeader>
      <ModalBody>
        <Text>{error}</Text>
      </ModalBody>
      <ModalFooter>
        <TouchableOpacity onPress={closeModal}>
          <Text>{$t('error.close')}</Text>
        </TouchableOpacity>
      </ModalFooter>
    </Modal>
  );
};

export default SocialLoginErrorModal;

SocialLoginErrorModal.propTypes = {
  error: PropTypes.string,
  closeModal: PropTypes.func
};
