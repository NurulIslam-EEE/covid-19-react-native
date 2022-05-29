import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

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
        <Text style={styles.title1}>Are you feeling sick?</Text>
        <Text style={styles.title2}>
          If you feel sick with any of covid-19 symptoms please call or SMS us
          immediately for help.
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button1Style}>
            <Ionicons
              style={styles.button1Text}
              name="call"
              size={24}
              color="white"
            />
            <Text style={styles.button1Text}>Call Now</Text>
          </Pressable>
          <Pressable style={styles.button2Style}>
            <Feather
              style={styles.button2Text}
              name="message-circle"
              size={24}
              color="white"
            />
            <Text style={styles.button2Text}>Send Sms</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.title3}>Prevention</Text>
        <View style={styles.health}>
          <View>
          <Image source={require("./assets/images/one.png")} />
          <Text style={{textAlign:'center',marginTop:15}}> Avoid close {`\n`} contact</Text>
          </View>
          <View>
          
          <Image source={require("./assets/images/two.png")} />
          <Text style={{textAlign:'center',marginTop:15}}> Clean your {`\n`} hands often</Text>
          </View>
          <View>
          <Image source={require("./assets/images/three.png")} />
          <Text style={{textAlign:'center',marginTop:15}}> Wear a {`\n`} facemask</Text>
          </View>
         
        </View>
        <Image style={styles.banner} source={require("./assets/images/Group-32.png")} />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container1: {
    flex: 0.45,
    backgroundColor: "#473F97",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 24,
  },
  container2: {
    flex: 0.55,
    padding: 24,
  },

  tinyLogoImg: {
    width: 114,
    height: 40,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 55,
  },
  menuImg: {
    width: 18,
    height: 15,
  },
  titleContainer: {
   
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 55,
    marginBottom:47
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#FFF",
   
  },
  title1: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "600",
    marginBottom:12
  },
  title2: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "400",
  },
  title3: {
    fontSize: 20,
    
    marginBottom:24,
    fontWeight: "500",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  button1Style: {
    backgroundColor: "#FF4D58",
    flexDirection: "row",
    justifyContent: "space-around",
    width: 155,
    height: 48,
    borderRadius: 50,
  },
  button1Text: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 13,
    alignItems: "center",
  },
  button2Style: {
    backgroundColor: "#4D79FF",
    flexDirection: "row",
    justifyContent: "space-around",
    width: 155,
    height: 48,
    borderRadius: 50,
    padding: 13,
  },
  button2Text: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    // marginTop: 13,
  },
  health:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  banner:{
    marginTop:44
  }
});
