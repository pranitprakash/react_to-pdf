import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    color: "blue",
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={{ fontSize: 40, fontWeight: "extrabold" }}>Section</Text>
      </View>
      <View style={styles.section}>
        <Text style={{ fontSize: 40 }}>Section</Text>
      </View>
      <View>
        <Text style={styles.text}>
          sadalhaihahdahdahdadhahdoahdoahdohadohaodhaohdodh
        </Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
