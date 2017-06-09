import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { itemsFetch } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import Item from './Item';
import {UrbanAirship} from 'urbanairship-react-native';

class FriendFeed extends Component {
  componentDidMount() {
    console.log('hi')
    UrbanAirship.addListener("register", (event) => {
      console.log('Channel registration updated: ', event.channelId);
      console.log('Registration token: ', event.registrationToken);
      })
  }
  componentWillUnmount() {
    UrbanAirship.removeListener("register", (event) => {
      console.log('Channel registration updated: ', event.channelId);
      console.log('Registration token: ', event.registrationToken);
      })
  }
  componentWillMount() {
    var channelId = UrbanAirship.getChannelId().then(channelId => {
      console.log('Channel: ', channelId);
    });
    UrbanAirship.addListener("register", (event) => {
      console.log('Channel registration updated: ', event.channelId);
      console.log('Registration token: ', event.registrationToken);
      })
    this.props.itemsFetch();

    this.createDataSource(this.props)
  }
  componentWillReceiveProps(nextProps) {

  this.createDataSource(nextProps);
  }

  createDataSource({ items }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(items)
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
