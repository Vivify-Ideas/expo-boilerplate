import React, { Component, Fragment } from 'react';
import { Image, ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import config from '../../config';

const { IMAGE_BASE_URL } = config;

class ImageComponent extends Component {
  state = {
    loader: true
  };

  getSourceForImage = () => {
    if (this.props.path) {
      return { uri: IMAGE_BASE_URL + this.props.path };
    }

    return this.props.uri
      ? { uri: this.props.uri }
      : { uri: 'https://picsum.photos/400/400/?random' };
  };

  getStyle() {
    return this.props.style ? this.props.style : { width: 100, height: 100 };
  }

  render() {
    return (
      <Fragment>
        <Image
          style={this.getStyle()}
          source={this.getSourceForImage()}
          onLoadEnd={() => this.setState({ loader: false })}
        />
        {this.state.loader && (
          <ActivityIndicator style={styles.loading} animating={this.state.loader} size="large" />
        )}
      </Fragment>
    );
  }
}

ImageComponent.propTypes = {
  path: PropTypes.string,
  uri: PropTypes.string,
  style: PropTypes.object
};

export default ImageComponent;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
