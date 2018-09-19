import React, { Component } from 'react';
import {
  View,
  StyleSheet,
 ScrollView,
  Text,
  Modal,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  TouchableHighlight
} from 'react-native';
 import ImageElement from './ImageElement';
 import axios from 'react-native-axios';

export default class GalleryScreen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modalVisible:false,
            modalImage:{uri:'https://posdatadesdehonduras.files.wordpress.com/2018/07/mejia-rivas2.png'},
            urls: [],
            images:
            [
                
                require('../img/arucas.jpg'),
                require('../img/catedral.jpg'),
                require('../img/maspalomas.jpg'),
                require('../img/telde.jpg'),
                require('../img/tenerife.jpg'),
                require('../img/tenerifeDesdeArriba.jpg'),
    
            ],
        };
    }

    getImagesURIS = () => {
        var url =
          "https://public-api.wordpress.com/rest/v1.1/sites/rutacincohn.com/posts";
        var res = [
          "https://posdatadesdehonduras.files.wordpress.com/2018/09/cecilia.png"
        ];
    
        return axios.get(url).then(function(response) {
          for (const post of response.data.posts) {
            var keys = Object.keys(post.attachments);
            for (const key of keys) {
              res.push(post.attachments[key]);
            }
          }
          return res;
        });
      };
    
      componentWillMount = () => {
        this.getImagesURIS().then(
          function(data) {
            this.setState(function() {
              return { urls: data };
            });
          }.bind(this)
        );
      };
    
   
    setModalVisible(visible,keyImage){
        this.setState({modalImage: this.state.images[keyImage]});
        this.setState({modalVisible: visible});


    }
    getImage(){
        return this.state.modalImage;
    }

    render() {

      let images =this.state.urls.map((val, key)=> {
        return //<TouchableWithoutFeedback key={key} 
       //             onPress={()=>{this.setModalVisible(true,key)}}>
                    <View style={styles.imagewrap}>
                        <ImageElement imgsource={ {uri:val.URL}}></ImageElement>
                    </View>
         //       </TouchableWithoutFeedback>
    });

    return (

        <ScrollView >
            <View style={styles.container} >
                {/* 
                <Modal style={styles.modal} animationType={"fade"}
                        transparent={true} visible={this.state.modalVisible} 
                        onRequestClose={()=>{}}>
                        <Text style={styles.text} onPress={()=>{this.setModalVisible(false)}}>
                            Cerrar
                        </Text>
                        <ImageElement imgsource={this.state.modalImage}></ImageElement>
                </Modal>*/}
                {images}
                
                </View>
            </ScrollView>
    
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:'#eee',
       
    },
    imagewrap:{
        margin:2,
        padding:2,
        height:(Dimensions.get('window').height/3)-12,
        width:(Dimensions.get('window').width/2)-4,
        backgroundColor:'#fff'


    },
    imagen: {
        flex: 1,
        resizeMode: 'cover',
        padding: 0
    },
    modal:{
        flex:1,
        padding:40,
        backgroundColor: 'rgba(0,0,0, 0.9)'
    },
    text:{
        color:'#fff',
    }
});
