import React from "react";

import { fetchRandomContact } from "../utils/api";
import { StyleSheet, View } from "react-native";
import ContactThumbnail from "../components/ContactThumbnail";
import DetailListItem from "../components/DetailListItem";
import colors from "../utils/colors";

export default class Profile extends React.Component {
  state = {
    contact: {},
  };

  async componentDidMount() {
    const contact = await fetchRandomContact();
    this.setState({
      contact,
    });
  }

  render() {
    const { avatar, name, email, phone, cell } = this.state.contact;

    return (
      <View style={styles.container}>
        <View style={styles.avatarSection}>
          <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        </View>
        <View style={styles.detailsSection}>
          <DetailListItem title="Email" icon="mail" subtitle={email} />
          <DetailListItem title="Work" icon="phone" subtitle={phone} />
          <DetailListItem title="Personal" icon="smartphone" subtitle={cell} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "white",
  },
});
