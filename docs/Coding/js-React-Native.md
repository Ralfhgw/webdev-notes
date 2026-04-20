```
import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Pressable
        style={{
          flex: 1,
        }}
        onPress={() => {
          console.log("View pressed");
        }}
      >
        <View
          style={{
            backgroundColor: "yellow",
            flex: 1,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "pink",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 64 }}>{counter}</Text>
        </View>
      </Pressable>
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
          padding: 20,
        }}
      >
        <Text
          onPress={() => {
            console.log("Text pressed");
          }}
          style={[styles.textDefaultStyle, styles.paragraphStyle]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A tenetur
          labore cumque? Nesciunt atque placeat dolor vero provident, deserunt
          quo porro consequatur magni illo sint maxime quibusdam ipsam molestias
        </Text>
        <Button
          onPress={() => {
            console.log("Test");
          }}
          title="Touch me!"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textDefaultStyle: {
    color: "blue",
  },
  paragraphStyle: {
    fontSize: 18,
    color: "green",
  },
  headingStyle: {
    fontSize: 36,
  },
});
```