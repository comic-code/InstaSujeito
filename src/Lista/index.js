import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class Lista extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data
    }

    this.mostraLikes = this.mostraLikes.bind(this);
    this.like = this.like.bind(this);
    this.carregaIcone = this.carregaIcone.bind(this)
  }

  mostraLikes(likers) {
    let feed = this.state.feed;
  
    if(feed.likers <= 0) {
      return;
    }

    return(
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida' }
      </Text>
    )
  }

  like() {
    let feed = this.state.feed;

    if(feed.likeada === true) {
      this.setState({
        feed: {
          ...feed,
          likeada: false,
          likers: feed.likers - 1
        }
      })
    } else {
      this.setState({
        feed: {
          ...feed,
          likeada: true,
          likers: feed.likers + 1
        }
      })
    }
  }

  carregaIcone(likeada) {
    return likeada ? require('../img/likeada.png') : require('../img/like.png');
  }

  render() {
    return(
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          
          <Image
            style={styles.fotoPerfil}
            source={{uri: this.state.feed.imgperfil}}
          />

          <Text style={styles.nomeUsuario}>
            {this.state.feed.nome}
          </Text>
        </View>
        
        <Image
          style={styles.fotoPublicacao}
          source={{uri: this.state.feed.imgPublicacao}}  
        />

        <View style={styles.areaBtn}> 
          <TouchableOpacity onPress={this.like}>
            <Image 
              style={styles.icon}
              source={this.carregaIcone(this.state.feed.likeada)}
            />
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Image 
              style={styles.icon}
              source={require('../img/send.png')}
            />
          </TouchableOpacity>
        </View>

        {this.mostraLikes(this.state.feed.likers)}

        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>
            {this.state.feed.nome}
          </Text>

          <Text style={styles.descRodape}>
            {this.state.feed.descricao}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  areaFeed: {

  },

  nomeUsuario: {
    fontSize: 18,
    textAlign: 'left',
    color: '#000',
    marginLeft: 10
  },

  fotoPerfil: {
    width: 36,
    height: 36,
    borderRadius: 25
  },

  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },

  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: 'center',
    resizeMode: 'cover'
  },

  areaBtn: {
    flexDirection: 'row',
    padding: 5
  },

  icon: {
    width: 30,
    height: 30,
    margin: 5
  },

  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  likes: {
    fontWeight: 'bold',
    marginLeft: 8
  },

  descRodape: {
    paddingLeft: 5,
    fontSize: 15
  },

  nomeRodape: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 8
  }
});