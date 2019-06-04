import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import $t from 'i18n';

import ModalWrapper from './modalParts/Modal';
import ModalHeader from './modalParts/ModalHeader';
import ModalBody from './modalParts/ModalBody';
import ModalFooter from './modalParts/ModalFooter';

const ImagePickerModal = ({ isVisible, closeModal, galleryImport, openCamera }) => {
  return (
    <ModalWrapper isVisible={isVisible} onRequestClose={closeModal}>
      <ModalHeader>
        <Text>{$t('profile.updateUser.importImage')}</Text>
      </ModalHeader>
      <ModalBody>
        <TouchableOpacity onPress={openCamera}>
          <Text>{$t('profile.updateUser.takePicture')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={galleryImport}>
          <Text>{$t('profile.updateUser.importFromGallery')}</Text>
        </TouchableOpacity>
      </ModalBody>
      <ModalFooter>
        <TouchableOpacity onPress={closeModal}>
          <Text>{$t('common.cancel')}</Text>
        </TouchableOpacity>
      </ModalFooter>
    </ModalWrapper>
  );
};

export default ImagePickerModal;

ImagePickerModal.propTypes = {
  isVisible: PropTypes.bool,
  closeModal: PropTypes.func,
  openCamera: PropTypes.func,
  galleryImport: PropTypes.func
};
