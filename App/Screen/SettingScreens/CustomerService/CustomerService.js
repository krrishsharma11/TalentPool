import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CustomerChatScreen = () => {
    const [messages, setMessages] = useState([
        { id: "1", text: "Hi, how are you today?", sender: "bot" }
    ]);
    const [inputText, setInputText] = useState("");

    const userImage = "https://randomuser.me/api/portraits/men/45.jpg"; // Replace with actual user profile URL
    const botImage = "https://randomuser.me/api/portraits/women/50.jpg"; // Replace with actual bot profile URL

    // Function to send a message
    const sendMessage = () => {
        if (inputText.trim() === "") return;

        const newMessage = { id: Date.now().toString(), text: inputText, sender: "user" };
        setMessages([...messages, newMessage]);

        // Simulate bot response
        setTimeout(() => {
            setMessages(prevMessages => [
                ...prevMessages,
                { id: Date.now().toString(), text: "Set up your account first.", sender: "bot" }
            ]);
        }, 1000);

        setInputText("");
    };

    return (
        <View style={styles.container}>
            {/* Status Bar */}
            <StatusBar barStyle="dark-content" backgroundColor="#E6F4EA" />

            {/* Header */}
            <View style={styles.header}>
                <Icon name="arrow-left" size={24} color="##000000" />
                <Text style={styles.headerTitle}>Customer Service</Text>
                <Icon name="video-outline" size={24} color="#000" style={styles.headerIcon} />
                <Icon name="phone-outline" size={24} color="#000" style={styles.headerIcon} />
            </View>

            {/* Chat Messages */}
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[
                        styles.messageContainer,
                        item.sender === "user" ? styles.userContainer : styles.botContainer
                    ]}>
                        {/* Bot Avatar */}
                        {item.sender === "bot" && <Image source={{ uri: botImage }} style={styles.Botavatar} />}

                        {/* Message Bubble */}
                        <View style={[
                            styles.messageBubble,
                            item.sender === "user" ? styles.userMessage : styles.botMessage
                        ]}>
                            <Text style={[
                                styles.messageText,
                                item.sender === "bot" ? styles.botText : {}
                            ]}>
                                {item.text}
                            </Text>
                        </View>

                        {/* User Avatar */}
                        {item.sender === "user" && <Image source={{ uri: userImage }} style={styles.avatar} />}
                    </View>
                )}
                contentContainerStyle={{ padding: 10 }}
            />

            {/* Message Input */}
            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <Icon name="image-outline" size={20} color="#9152F8" style={styles.inputIconLeft} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your Message....."
                        placeholderTextColor="#777"
                        value={inputText}
                        onChangeText={setInputText}
                    />
                    <Icon name="microphone" size={20} color="#9152F8" style={styles.inputIconRight} />
                </View>

                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <Icon name="send" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        paddingTop: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9'
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#18191C",
        marginLeft: 10,
        flex: 1,
    },

    headerIcon: {
        marginLeft: 15,
    },

    messageContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginVertical: 5,
        top: 40
    },

    userContainer: {
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        marginTop: 10,
    },

    botContainer: {
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        flexDirection: "row",
        marginTop: 10,
    },

    messageWrapper: {
        maxWidth: "75%",
    },

    avatar: {
        width: 28,
        height: 28,
        borderRadius: 17.5,
        top: -27,
        right: 30

    },

    Botavatar: {
        width: 28,
        height: 28,
        borderRadius: 17.5,
        top: -27,
        left: 30
    },

    userAvatar: {
        flexDirection: 'column-reverse',
        flexDirection: "row-reverse"
    },

    botAvatar: {
        right: -40,
    },

    messageBubble: {
        padding: 12,
        borderRadius: 15,
        paddingLeft: 40,
        paddingRight: 40,
        maxWidth: "80%",
    },

    userMessage: {
        alignSelf: "flex-end",
        backgroundColor: "#6A1B9A",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 0,
    },

    botMessage: {
        alignSelf: "flex-start",
        backgroundColor: "#F2F2F2",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 0,
    },

    messageText: {
        fontSize: 16,
        color: "#fff",
    },

    botText: {
        color: "#333",
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 25,
    },

    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#FFF",
        paddingVertical: 6,
        paddingHorizontal: 40,
        borderWidth: 1,
        borderColor: "#CCC",
        position: "relative",
        borderRadius: 8,
    },

    textInput: {
        flex: 1,
        fontSize: 16,
        color: "#333",
    },

    inputIconLeft: {
        position: "absolute",
        left: 12,
    },

    inputIconRight: {
        position: "absolute",
        right: 12,
    },

    sendButton: {
        backgroundColor: "#7900BA",
        padding: 12,
        marginLeft: 10,
        paddingVertical: 14,
        borderRadius: 8,
    },
});


export default CustomerChatScreen;