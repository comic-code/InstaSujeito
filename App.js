import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, StatusBar } from 'react-native';

import Lista from './src/Lista';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: false, 
          likers: 0
         },
        {
          id: '2', 
          nome: 'Matheus', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 1
        },
        { 
          id: '5', 
          nome: 'Guilherme', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32
        }
      ]
    }
  }
    
  render() {
    return(
      <>
        <StatusBar backgroundColor='#fafafa' barStyle='dark-content'/>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('./src/img/logo.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.send}
                source={require('./src/img/send.png')}
              />
            </TouchableOpacity>
          </View>
      
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={this.state.feed}
            renderItem={({ item }) => {
              return(
                <Lista data={item} />
              )
            } }
          />
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,

    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1
  },

  send: {
    width: 23,
    height: 23
  }
})