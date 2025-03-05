import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from "react-native";

const users = [
  { id: 1, name: "Harsh Agarwal", role: "Full-stack web developer", company: "Talentrise Technokrate Pvt Ltd", image: "https://via.placeholder.com/50" },
  { id: 2, name: "Harsh Agarwal", role: "Full-stack web developer", company: "Talentrise Technokrate Pvt Ltd", image: "https://via.placeholder.com/50" },
  { id: 3, name: "Harsh Agarwal", role: "Full-stack web developer", company: "Talentrise Technokrate Pvt Ltd", image: "https://via.placeholder.com/50" },
  { id: 4, name: "Harsh Agarwal", role: "Full-stack web developer", company: "Talentrise Technokrate Pvt Ltd", image: "https://via.placeholder.com/50" },
  { id: 5, name: "Harsh Agarwal", role: "Full-stack web developer", company: "Talentrise Technokrate Pvt Ltd", image: "https://via.placeholder.com/50" }
];

const InboxScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#fff" }}>
      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
        style={{ backgroundColor: "#f0f0f0", padding: 10, borderRadius: 10, marginBottom: 10 }}
      />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#f8f8f8", padding: 10, borderRadius: 10, marginBottom: 10 }}>
            <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <Text>{item.role}</Text>
              <Text style={{ color: "gray" }}>{item.company}</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: "purple", padding: 10, borderRadius: 10 }}>
              <Text style={{ color: "white" }}>Message</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
        {[1, 2, 3, 4, 5].map((num) => (
          <TouchableOpacity key={num} style={{ margin: 5, padding: 10, borderRadius: 10, backgroundColor: num === 4 ? "purple" : "#e0e0e0" }}>
            <Text style={{ color: num === 4 ? "white" : "black" }}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const ComposeMessageScreen = () => {
  const [message, setMessage] = useState("");

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Compose Message</Text>
      <TextInput
        placeholder="Type your message here..."
        value={message}
        onChangeText={setMessage}
        style={{ backgroundColor: "#f0f0f0", padding: 10, borderRadius: 10, height: 100, textAlignVertical: "top" }}
        multiline
      />
      <TouchableOpacity style={{ backgroundColor: "purple", padding: 15, borderRadius: 10, marginTop: 20, alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 16 }}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ComposeMessageScreen;