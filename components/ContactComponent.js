import React, { Component } from "react";
import { Card, Text, ScrollView } from "react-native";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Card
          title="Contact Information"
          wrapperStyle={{ margin: 20 }}
          style={{ flex: 1 }}
        >
          <Text></Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
