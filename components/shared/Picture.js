import React, { Component, Fragment } from 'react';
import { Image, ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import config from '../../config';

const { IMAGE_BASE_URL } = config;

class Picture extends Component {
  state = {
    loader: true
  };

  getSourceForImage = () => {
    const { source, uri } = this.props;

    if (source) {
      return source;
    }

    return uri.match(/^https?/) ? { uri } : { uri: IMAGE_BASE_URL + uri };
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

Picture.propTypes = {
  uri: PropTypes.string,
  source: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  style: PropTypes.object
};

export default Picture;

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
});
