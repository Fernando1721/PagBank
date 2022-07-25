import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  return (
    <View>
      <ScrollView horizontal={false}>
    <Header/>
    <Content/>
    
   
    </ScrollView>
    <Footer/>
    
    </View>
    
  );
}

