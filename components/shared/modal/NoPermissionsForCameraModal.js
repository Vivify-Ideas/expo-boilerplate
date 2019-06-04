import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';

import ModalWrapper from './modalParts/Modal';
import ModalHeader from './modalParts/ModalHeader';
import ModalBody from './modalParts/ModalBody';
import ModalFooter from './modalParts/ModalFooter';

const NoPermissionsForCameraModal = ({ isVisible, closeModal }) => {
  return (
    <ModalWrapper isVisible={isVisible} onRequestClose={closeModal}>
      <ModalHeader>
        <Text>{$t('profile.updateUser.noPermissions')}</Text>
      </ModalHeader>
      <ModalBody>
        <Text>{$t('profile.updateUser.noPermissions')}</Text>
      </ModalBody>
      <ModalFooter>
        <TouchableOpacity onPress={closeModal}>
          <Text>{$t('common.ok')}</Text>
        </TouchableOpacity>
      </ModalFooter>
    </ModalWrapper>
  );
};

export default NoPermissionsForCameraModal;

NoPermissionsForCameraModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func
};
