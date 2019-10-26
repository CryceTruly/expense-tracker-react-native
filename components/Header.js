import * as React from 'react';
import {Appbar} from 'react-native-paper';

export default class Header extends React.Component {
  _goBack = () => console.log('Went back');

  _handleSearch = () => console.log('Searching');

  _handleMore = () => console.log('Shown more');

  render() {
    return (
      <Appbar.Header>
        <Appbar.Content title="Create an Account" />
      </Appbar.Header>
    );
  }
}
