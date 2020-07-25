import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function UserGuest() {
  const navigation = useNavigation();
  //console.log(navigation);
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../../assets/img/user-guest.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Consulta tu perfil de melonapp</Text>
      <Text style={styles.description}>
        Comida a domicilio de los principales restaurantes y puede disfrutarla
        en casa, la oficina o incluso en un parque. El tiempo estimado de
        llegada es de 30 minutos y te la trae un ciclista. ¡Hay que fomentar el
        cuidado de nuestro planeta!
      </Text>
      <View style={styles.viewBtn}>
        <Button
          title="Ver tu perfil"
          onPress={() => navigation.navigate("login")}
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  btnStyle: {
    backgroundColor: "#00a680",
  },
  btnContainer: {
    width: "70%",
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
});
