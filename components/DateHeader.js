import React from "react";
import { Text } from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { black } from "../utils/colors";

export default function DateHeader({ date }) {
  return <Text>{date}</Text>;
}
