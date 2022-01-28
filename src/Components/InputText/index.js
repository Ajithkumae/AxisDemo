import React from "react";
import { TextInput, View } from "react-native";
import { COLORS } from "../../Utils/theams";
import styles from "./styles";

/**
 * @description Custom coponent for common InputTextField
 * @param {string} placeholder - holdes the place value
 * @param {string} value - holdes the state value
 * @param {object} otherTextInputProps - other props of the Text input
 * @param {Function} onChangeText - Returns text key words
 */

const InputText = (props) => {
  const { placeholder, value, onChangeText, otherTextInputProps, textInput ,compSty} =
    props;

  return (
    <View style={[styles.container,compSty]}>
      <TextInput
        value={value}
        style={textInput}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        onChangeText={(val) => onChangeText(val)}
        {...otherTextInputProps}
      />
    </View>
  );
};

export default InputText;
