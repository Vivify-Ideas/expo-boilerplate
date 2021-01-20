import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePicker } from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { activeUserSelector, updateUser } from '../../../store/auth';
import { UpdateProfileForm } from '../../../components/profile/UpdateProfileForm';
import Picture from '../../../components/shared/Picture';
import NoPermissionsForCameraModal from '../../../components/shared/modal/NoPermissionsForCameraModal';
import ImagePickerModal from '../../../components/shared/modal/ImagePickerModal';
import { PERMISSIONS_STATUS } from '../../../constants';
import defaultAvatar from '../../../assets/images/robot-dev.png';

const EditProfile = () => {
  const dispatch = useDispatch();

  const handleUserUpdate = data => dispatch(updateUser(data));
  const user = useSelector(activeUserSelector());

  const [image, setImage] = useState('');
  const [imagePickerModalVisible, toggleImagePicker] = useState(false);
  const [permissionsModalVisible, togglePermissionsModal] = useState(false);

  const handleSubmit = updateUserData => {
    handleUserUpdate({ ...updateUserData, avatar: image });
  };

  const openImagePickerModal = async () => {
    const cameraRollPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const hasCameraRollPermission = cameraRollPermissions.status === PERMISSIONS_STATUS.GRANTED;
    const cameraPermissions = await Permissions.askAsync(Permissions.CAMERA);
    const hasCameraPermission = cameraPermissions.status === PERMISSIONS_STATUS.GRANTED;

    toggleImagePicker(hasCameraPermission && hasCameraRollPermission);
    togglePermissionsModal(!(hasCameraPermission && hasCameraRollPermission));
  };

  const openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4]
    });

    setSelectedImage(result);
  };

  const openImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4]
    });

    setSelectedImage(result);
  };

  const setSelectedImage = selectedImage => {
    if (!selectedImage.cancelled) {
      setImage(selectedImage);
      toggleImagePicker(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openImagePickerModal}>
        {image !== '' || user.avatar !== null ? (
          <Picture source={image} uri={user.avatar} />
        ) : (
          <Picture source={defaultAvatar} />
        )}
      </TouchableOpacity>
      <KeyboardAwareScrollView enableOnAndroid>
        <UpdateProfileForm onSubmit={handleSubmit} user={user} />
      </KeyboardAwareScrollView>
      <NoPermissionsForCameraModal
        isVisible={permissionsModalVisible}
        closeModal={() => togglePermissionsModal(false)}
      />
      <ImagePickerModal
        isVisible={imagePickerModalVisible}
        closeModal={() => toggleImagePicker(false)}
        galleryImport={openImagePicker}
        openCamera={openCamera}
      />
    </View>
  );
};

EditProfile.propTypes = {
  navigation: PropTypes.object
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
