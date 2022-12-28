import {Text, StyleSheet} from 'react-native';

import Colors from '../../config/colors';

function InstructionText({children, style}) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'OpenSans-Regular',
    color: Colors.accent500,
    fontSize: 24,
  },
});
