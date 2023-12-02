import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ContactListItem from "../components/ContactListItem";
import { fetchContacts } from "../utils/api";

const keyExtractor = ({ phone }) => phone;
export default class Contacts extends React.Component {
  state = {
    contacts: [],
    loading: true,
    error: false,
  };

  async componentDidMount() {
    try {
      const contacts = await fetchContacts();
      this.setState({
        contacts,
        loading: false,
        error: false,
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  renderContact = ({ item }) => {
    const { name, avatar, phone } = item;
    const {
      navigation: { navigate },
    } = this.props;

    return (
      <ContactListItem
        phone={phone}
        name={name}
        avatar={avatar}
        onPress={() => navigate("Profile")}
      />
    );
  };

  render() {
    const { loading, contacts, error } = this.state;
    const contactsSorted = contacts.sort((a, b) =>
      a.name.localeCompare(b.name),
    );

    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error...</Text>}
        {!loading && !error && (
          <FlatList
            data={contactsSorted}
            renderItem={this.renderContact}
            keyExtractor={keyExtractor}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    flex: 1,
  },
});
