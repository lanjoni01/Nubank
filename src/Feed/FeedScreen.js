import React, { Component } from 'react';
import {
    FlatList,
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Button,
    } 
    from 'react-native';


import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEvillcons from 'react-native-vector-icons/EvilIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';  

export default class Feed extends Component {
    constructor(props) {    
        super(props);      
    }


    render() {
        return(
            <View>               
                <View style={styles.nomeIcon}>
                    <View>
                        <Text style = {styles.texto}>Olá, Leonardo Lanjoni</Text>
                        <IconEvillcons style ={styles.icon2}name = "eye" size ={40} color="#C0C0C0"/>
                        <IconEvillcons style ={styles.icon}name= "gear" size= {30} color ="#C0C0C0"/>
                    </View>
                
                </View>    
                
                <View style = {styles.fundo}>
                

                <View style={{flexDirection: 'row'}}>
                    
                      </View>

                    <View style={{flexDirection: 'row'}}>
                    <ScrollView horizontal={false} showsVerticalScrollIndicator={false} >
                        <ScrollView  style={styles.scrollView}>
                    <View style = {styles.tela}>

                    <View >
                      <Icon style= {styles.iconPrincipal3} />
                      </View>

                        
                      <View>
                      <IconMaterialIcons style= {styles.iconPrincipal4} name="credit-card" size={24} color="#696969"/>
                      <Text style = {styles.textoInferior3}> Cartão de Crédito</Text>
                      <Text style = {styles.textoInferior4}> Fatura Fechada</Text>

                      <View style= {styles.container}>
                          <Button  title="Pagar Fatura" color='#A9A9A9' />
                      </View>
                      <View style= {styles.container2}>
                          <Button  title="Parcelar" color='#A9A9A9' />
                      </View>   
                                         
                     </View>
                     </View>

                     <View style = {styles.tela}>
                    <View >
                      <Icon style= {styles.parteConta} />
                      </View>
                      <View>
                      <IconFontAwesome5 style= {styles.iconPrincipal5} name="coins" size={24} color="#696969"/>
                      <Text style = {styles.textoInferior3}> Conta</Text>
                      <Text style = {styles.textoInferior4}> Saldo Indisponivel</Text>
                      <View style={styles.barra}/>
                     </View>
                     </View>

                     <View style = {styles.tela}>
                    <View >
                      <Icon style= {styles.iconPrincipal3} />
                      </View>
                      <View>
                      <IconSimpleLineIcons style= {styles.iconPrincipal4} name="present" size={24} color="#9400D3"/>
                      <Text style = {styles.textoInferior5}> Rewards</Text>
                      <Text style = {styles.textoInferior6}> Apague compras com pontos que nunca expiram</Text>
                      <View style= {styles.container}>
                          <Button  title="Conhecer" color='#A9A9A9' />
                      </View>
                      
                     </View>
                     </View>

                     <View style = {styles.tela}>
                    <View >
                      <Icon style= {styles.iconPrincipal3} />
                      </View>
                      <View>
                      <IconIonicons style= {styles.iconPrincipal4} name="umbrella-sharp" size={24} color="#9400D3"/>
                      <Text style = {styles.textoInferior5}> Seguro de Vida</Text>
                      <Text style = {styles.textoInferior6}> Conheça Nubank Vida: um seguro simples e que cabe no bolso</Text>
                      <View style= {styles.container}>
                          <Button  title="Conhecer" color='#A9A9A9' />
                      </View>
                     </View>
                     </View>

                     <View style = {styles.tela}>
                    </View>
                     
                   
                      </ScrollView>
                      </ScrollView>




                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView1} >
                      
                      <View style = {styles.tela2}>
                      <IconMaterialCommunityIcons style= {styles.iconPrincipal2} name="clover" size={24} color="#FFF"/>
                      <Text style = {styles.textoInferior}> pix</Text>
                      </View>
                      
                      <View style = {styles.tela2}>
                      <IconAntDesign style= {styles.iconPrincipal2} name="barcode" size={24} color="#FFF"/>
                      <Text style = {styles.textoInferior}> Pagar</Text>
                      </View>

                      <View style = {styles.tela2}>
                      <Icon style= {styles.iconPrincipal2} name="person-add" size={24} color="#FFF"/>
                      <Text style = {styles.textoInferior}> Indicar Amigos</Text>
                     </View>

                     <View style = {styles.tela2}>
                      <IconFontAwesome5 style= {styles.iconPrincipal2} name="coins" size={24} color="#FFF"/>
                      <Text style = {styles.textoInferior}> Transferir</Text>
                      </View>
                     
                      <View style = {styles.tela2}>
                      <Icon style= {styles.iconPrincipal2} name="arrow-downward" size={24} color="#FFF"/>
                      <Text style = {styles.textoInferior}> Depositar</Text>
                     </View>
                     
                      <View style = {styles.tela2}>
                      <IconMaterialIcons style= {styles.iconPrincipal2} name="attach-money" size={24} color="#FFF"/>
                      <Text style = {styles.textoInferior}> Emprestimo</Text>
                     </View>
                     
                      <View style = {styles.tela2}>
                      <IconMaterialIcons style= {styles.iconPrincipal2} name="credit-card" size={24} color="#FFF"/>
                      <Text style = {styles.textoInferior}> Cartão Virtual</Text>
                      </View>

                      <View style = {styles.tela2}>
                      <IconMaterialCommunityIcons style= {styles.iconPrincipal2} name="cellphone" size={24} color="#FFF"/>
                      <Text style = {styles.textoInferior}> Recarga de Celular</Text>
                      </View>

                      <View style = {styles.tela2}>
                      <IconFontAwesome style= {styles.iconPrincipal2} name="list" size={24} color="#FFF"/>
                      <Text style = {styles.textoInferior}> Ajustar Limite</Text>
                      </View>

                      <View style = {styles.tela2}>
                      <Icon style= {styles.iconPrincipal2} name="lock" size={24} color="#FFF"/>
                      <Text style = {styles.textoInferior}> Bloquear Cartão</Text>
                      </View>

                      <View style = {styles.tela2}>
                      <IconFontAwesome style= {styles.iconPrincipal2} name="dollar" size={24} color="#FFF"/>
                      <Text style = {styles.textoInferior}> Cobrar</Text>
                      </View>

                      <View style = {styles.tela2}>
                      <IconEntypo style= {styles.iconPrincipal2} name="creative-commons-share" size={24} color="#FFF"/>
                      <Text style = {styles.textoInferior}> Dividir Valor</Text>
                      </View>

                      <View style = {styles.tela2}>
                      <IconFontAwesome5 style= {styles.iconPrincipal2} name="donate" size={24} color="#FFF"/>
                      <Text style = {styles.textoInferior}> Doação</Text>
                      </View>

                      <View style = {styles.tela2}>
                      <IconFeather style= {styles.iconPrincipal2} name="help-circle" size={24} color="#FFF"/>
                      <Text style = {styles.textoInferior}> Me Ajuda</Text>
                      </View>
                    
                
                      </ScrollView>
                      </View>
               
                </View>    

            </View>            
        )
    }
}

const styles = StyleSheet.create({
    
    fundo: {
        flex: 3,
        height:600,  
        width:415,        
        flexDirection:'row',     
        backgroundColor:'#9400D3'
    },
    nomeIcon:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width:415,
        backgroundColor:'#8B10AE'
    },
    texto: {
        fontWeight:'bold',
        fontStyle:'Kontora Black',
        color: '#FFF',
        fontSize: 23,
        padding: 10,
        paddingLeft:20,
        paddingTop: 88,
        marginTop:10,
        marginLeft:0,
        width:570, 
    },
    icon: {
        marginLeft:360,
        marginTop:-39
    },
    icon2: {
        marginLeft:320,
        marginTop:-40
    },

    scrollView: {
    backgroundColor: '#8B10AE',
    marginHorizontal: 0,
    marginRight:100,
    marginLeft:0,
    marginTop:0,
    width:415,
    height:460,
    paddingHorizontal:100
    },
   
    iconPrincipal1: {
       
        paddingLeft: 10,
        paddingRight: 260,
        paddingTop: 10,
    },

    scrollView1: {
        backgroundColor: '#8B10AE',
        marginHorizontal: 50,
        marginRight:-310,
        marginTop:460,
        marginEnd:-10,
        paddingHorizontal:10,
        marginLeft:-515,
        width: 415

        },
    iconPrincipal2: {
        flex:1,
        paddingLeft: 10,
        paddingRight: -20,
        paddingTop: 20,
    },
    textoInferior: {
        color: '#FFF',
        width: 70,
        height: 50,
        borderRadius: 30,
        marginLeft: 3,
        marginTop: 10,
        padding: -10,
        justifyContent: 'space-between',
        fontSize:12
    },
    textoInferior2: {
        color: 'orange',
        width: 100,
        height: 50,
        borderRadius: 30,
        marginLeft: 150,
        marginTop: 20,
        padding: -70,
        justifyContent: 'space-around',
    },
    
    tela:{
        flex:3,
        margin:-5,
        marginLeft:-67,
        marginTop:30,
        backgroundColor:'white',               
        paddingLeft: 20,
        paddingRight:10,
        paddingHorizontal:150,       
        height: 200,
        width: 350,
        borderRadius: 5,
        
    },

    tela2:{
        flex:2,
        margin:-10,
        marginLeft:15,
        marginTop:20,
        backgroundColor:'#9400D3', 
        width:90,              
        paddingLeft: -110,
        paddingRight:-50,     
        height: 100,
        borderRadius: 5
    },
    textoInferior3:{
        fontWeight: "bold",
        fontSize:18,
        color: '#A9A9A9',
        marginTop:-50,
        marginLeft: 40
    },
    textoInferior4:{
        fontSize: 15,
        fontWeight: "bold",
        color: '#A9A9A9',
        marginTop:5,
        marginLeft:10
    },
    textoInferior5:{
        fontWeight: "bold",
        fontSize:20,
        color: '#9400D3',
        marginTop:-50,
        marginLeft: 40
    },
    textoInferior6:{
        fontSize: 15,
        fontWeight: "bold",
        color: '#696969',
        marginTop:5,
        marginLeft:10
    },
    iconPrincipal3:{
        paddingLeft: 20,
        paddingRight: 260,
        marginTop:100,
        height:50
    },
    iconPrincipal4:{
        paddingLeft: 5,
        paddingRight: 260,
        marginTop:-140,
        height:50  
    },
    iconPrincipal5:{
        paddingLeft: 5,
        paddingRight: 260,
        marginTop:-120,
        height:50 
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:180,
        marginTop:20,
        backgroundColor: '#white',
        },

    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:150,
        marginTop:-70,
        width:85,
        backgroundColor: '#white',
        },
    parteConta:{
        paddingLeft: 20,
        paddingRight: 260,
        marginTop:100,
        height:30,
        backgroundColor:'white'

    },
    barra:{
        flex:3,
        margin:22,
        marginLeft:5,
        marginTop:10,
        backgroundColor:'#C0C0C0',               
        paddingLeft: 200,
        paddingHorizontal:100,       
        height: 100,
        width: 240,
        borderRadius: 5,
    },

})