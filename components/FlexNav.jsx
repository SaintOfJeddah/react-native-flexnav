import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSpring, animated, config } from "react-spring";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function FlexNav(props) {
  const navigation = useNavigation();
  const [toggle, isToggled] = useState(true);
  const animProps = useSpring({
    config: config.default,
    width: toggle ? windowWidth * 0.92 : windowWidth * 0.15,
    left: toggle ? 0 : windowWidth * 0.375,
    from: {
      width: toggle ? windowWidth * 0.12 : windowWidth * 0.92,
      left: toggle ? windowWidth * 0.375 : 0,
    },
  });

  const iconProps = useSpring({
    delay: 100,
    config: config.default,
    opacity: toggle ? 1 : 0,
    from: { opacity: toggle ? 0 : 1 },
  });

  const AnimatedIconView = animated(View);

  const AnimatedGradient = animated(LinearGradient);

  return (
    <TouchableWithoutFeedback onPress={() => isToggled(!toggle)}>
      <AnimatedGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={[props.topColor, props.bottomColor]}
        style={[
          {
            height: windowHeight * 0.08,
            borderRadius: 25,
            top: windowHeight * 0.37,
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
            alignItems: "center",
          },
          animProps,
        ]}
      >
        {toggle ? (
          <AnimatedIconView
            style={[
              {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              },
              iconProps,
            ]}
          >
            {props.icons.map((icon) => {
              return (
                <TouchableOpacity
                  onPress={() => icon.onPress()}
                  style={styles.iconHitbox}
                >
                  <Image style={styles.icon} source={icon.source}></Image>
                </TouchableOpacity>
              );
            })}
          </AnimatedIconView>
        ) : (
          <Image
            style={styles.ham}
            source={require("../assets/navicon.png")}
          ></Image>
        )}
      </AnimatedGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  ham: { width: 24, height: 24 },
  icon: { width: 32, height: 32 },
  iconHitbox: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.08,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
