import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ImagePicker, Permissions } from 'expo';

import { updateUser } from '../../../store/actions/UserActions';
import { userSelector } from '../../../store/selectors/ActiveUserSelector';
import { UpdateProfileForm } from '../../../components/profile/UpdateProfileForm';
import Picture from '../../../components/shared/Picture';
import NoPermissionsForCameraModal from '../../../components/shared/modal/NoPermissionsForCameraModal';
import ImagePickerModal from '../../../components/shared/modal/ImagePickerModal';
import { PERMISSIONS_STATUS } from '../../../constants';
import defaultAvatar from '../../../assets/images/robot-dev.png';

class EditProfile extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    updateUser: PropTypes.func,
    user: PropTypes.object
  };

  state = {
    image: '',
    imagePickerModalVisible: false,
    permissionsModalVisible: false
  };

  handleSubmit = updateUserData => {
    this.props.updateUser({ ...updateUserData, avatar: this.state.image });
  };

  openImagePickerModal = async () => {
    const cameraRollPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const hasCameraRollPermission = cameraRollPermissions.status === PERMISSIONS_STATUS.GRANTED;
    const cameraPermissions = await Permissions.askAsync(Permissions.CAMERA);
    const hasCameraPermission = cameraPermissions.status === PERMISSIONS_STATUS.GRANTED;

    this.setState({
      imagePickerModalVisible: hasCameraPermission && hasCameraRollPermission,
      permissionsModalVisible: !(hasCameraPermission && hasCameraRollPermission)
    });
  };

  closePermissionsModal = () => {
    this.setState({ permissionsModalVisible: false });
  };

  closeImagePickerModal = () => {
    this.setState({ imagePickerModalVisible: false });
  };

  openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: 'Images',
      allowsEditing: true,
      aspect: [4, 4]
    });

    this.setImage(result);
  };

  openImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4]
    });

    this.setImage(result);
  };

  setImage = image => {
    if (!image.cancelled) {
      this.setState({
        image: image
      });
      this.closeImagePickerModal();
    }
  };

  render() {
    const { user } = this.props;
    const { imagePickerModalVisible, permissionsModalVisible, image } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.openImagePickerModal}>
          {image !== '' || user.avatar !== null ? (
            <Picture source={image} uri={user.avatar} />
          ) : (
            <Picture source={defaultAvatar} />
          )}
        </TouchableOpacity>
        <KeyboardAwareScrollView enableOnAndroid>
          <UpdateProfileForm onSubmit={this.handleSubmit} user={user} />
        </KeyboardAwareScrollView>
        <NoPermissionsForCameraModal
          isVisible={permissionsModalVisible}
          closeModal={this.closePermissionsModal}
        />
        <ImagePickerModal
          isVisible={imagePickerModalVisible}
          closeModal={this.closeImagePickerModal}
          galleryImport={this.openImagePicker}
          openCamera={this.openCamera}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { user: userSelector(state) };
};

const mapDispatchToProps = { updateUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
