import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView
} from "react-native";

export default function App() {
  let season = 3;
  if (season === 4) {
    console.log(`Mùa đông`);
  } else if (season === 1) {
    console.log(`Mùa xuân`);
  } else if (season === 2) {
    console.log(`Mùa hè`);
  } else if (season === 3) {
    console.log(`Mùa thu`);
  } else {
    console.log(`Sai định dạng tháng`);
  }


  return (
    <View>
      {/* Your JSX content here */}
    </View>
  );
}