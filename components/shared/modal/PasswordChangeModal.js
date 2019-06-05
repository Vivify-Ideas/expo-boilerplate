import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';

import { Modal, ModalBody, ModalFooter } from './baseModal';

const PasswordChangedModal = ({ isVisible, closeModal }) => {
  return (
    <Modal isVisible={isVisible} closeModal={closeModal}>
      <ModalBody>
        <Text>{$t('profile.changePassword.passwordChangedSuccess')}</Text>
      </ModalBody>
      <ModalFooter>
        <TouchableOpacity onPress={closeModal}>
          <Text>{$t('common.ok')}</Text>
        </TouchableOpacity>
      </ModalFooter>
    </Modal>
  );
};

export default PasswordChangedModal;

PasswordChangedModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func
};
