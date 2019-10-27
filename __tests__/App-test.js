/**
 * @format
 */

import 'react-native';
import React from 'react';

import App from '../App';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// eslint-disable-next-line jest/no-disabled-tests
it.skip('renders correctly', () => {
  renderer.create(<App/>);
});
