import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const courses = [
    { name: 'Angular', id: 1 },
    { name: 'React Js', id: 2 },
    { name: 'C#', id: 3 },
    { name: 'C Programlama', id: 4 },
    { name: 'HTML', id: 6 },
    { name: 'CSS5', id: 7 },
    { name: 'SQLite', id: 8 },
    { name: 'Javascript', id: 9 },
    { name: 'Flutter', id: 10 },

  ];

  // const elemenst = ({ item }) => (
  //   <Text>{item.name} </Text> tu peux cme ceci aussi et au niveau de renderItem la value variable
  // )



  return (
    <FlatList
      data={courses}
      // horizontal={true} ceci les affiches horizontalement 
      // showsHorizontalScrollIndicator={false} cest pareil celui ci aussi 
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Text style={styles.content}>{item.name}.{item.id} </Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    backgroundColor: 'orange',
    marginVertical: 10,
    padding: 20,
  },

});
