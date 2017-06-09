import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class Item extends Component {


  render() {
    const { description } = this.props.item;

    return (
      <TouchableWithoutFeedback >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {description}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default Item;
