import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { itemsFetch } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class FriendFeed extends Component {
  componentWillMount() {
    this.props.itemsFetch();
    // console.log(this.props)
    this.createDataSource(this.props)
  }

  createDataSource({ items }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.DataSource = ds.cloneWithRows(items)
  }

  renderRow(item) {
    return <Item item={item} />
  }

  render() {
    return (
      <ListView
       enableEmptySections
       dataSource={this.dataSource}
       renderRow={this.renderRow}
     />
    );
  }
}

const styles = {

};

const mapStateToProps = state => {
  const items = _.map(state.items, (val, uid) => {
    return { ...val, uid };
  });

  return { items };
};

export default connect(mapStateToProps, { itemsFetch })(FriendFeed);
