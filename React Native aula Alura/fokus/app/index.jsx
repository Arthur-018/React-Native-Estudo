import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.conatiner}>

      <Image source={require('./foco.png')}/>

     <View style={styles.actions}>
       <Text style={styles.timer}>
      25:00
      </Text>
      <Pressable style={styles.buttom}>
        <Text style={styles.buttomtext}>
          Começar
        </Text>
      </Pressable>
       </View> 
       <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto fictício e sem fins comerciais.
         </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura. 
        </Text>
       </View>
     </View>
  );
}


const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal:24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32,
  },
  timer: {
    fontSize: 54,
    color: '#ffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttom: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
    
  },
  buttomtext: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18,
  },
  footer: {
    width: '80%',
  },
  footerText:{
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  }
})