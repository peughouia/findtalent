import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Dropdown = ({ options, onSelect }) => {
  return (
    <View>
      {options.map((option, index) => (
        <TouchableOpacity key={index} onPress={() => onSelect(option)}>
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Dropdown;
