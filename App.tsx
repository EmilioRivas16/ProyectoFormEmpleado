import { ScrollView, Text, View } from 'react-native';
import { stylesApp } from './stylesapp';
import Form from './Form';
import Card from './Card';

export default function App() {
  return (
    <ScrollView>
      <View style={stylesApp.container}>
        <Form></Form>
        <Card></Card>
      </View>
    </ScrollView>
  );
}