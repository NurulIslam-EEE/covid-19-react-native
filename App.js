import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView,Image} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.menuContainer}>
        <Image
            style={styles.menuImg}
            source={require("./assets/images/menu.png")}
          />
            <Image
            style={styles.menuImg}
            source={require("./assets/images/Vector.png")}
          />
        </View>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Covid-19</Text>
        <Image
            style={styles.tinyLogoImg}
            source={require("./assets/images/Group-23.png")}
          />
        </View>
      

      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  container1: {
    flex: .5,
    backgroundColor: '#473F97',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding:24

  },
  container2: {
    flex: .5,
    backgroundColor: '#fff',

  },
  tinyLogoImg: {
    width: 114,
    height: 40,
  },
  menuContainer:{
   
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:55
  },
  menuImg:{
    width:18,
    height:15
  },
  titleContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:55
  },
  title:{
    fontSize:24,
    fontWeight:'600',
    color:'#FFF',
  
  }
});
