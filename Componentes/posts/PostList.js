import React, {Component} from 'react';
import axios from 'axios';
import PostContent from '../posts/PostContent';

import {
  ScrollView ,
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight
} from 'react-native';
import { getPosts } from '../../src/Posts';
import Article from '../../Componentes/Article';

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = { articles: [], refreshing: true };
        this.fetchNews = this.fetchNews.bind(this);
      }
      // Called after a component is mounted
      componentDidMount() {
        this.fetchNews();
       }
    
      fetchNews() {
        getPosts()
          .then(articles => this.setState({ articles, refreshing: false }))
          .catch(() => this.setState({ refreshing: false }));
      }
    
      handleRefresh() {
        this.setState(
          {
            refreshing: true
        },
          () => this.fetchNews()
        );
      }

    render(){
        return (
    
        <FlatList
            data={this.state.articles}
            renderItem={({ item }) => 
            <Article article= {item}  />}
            keyExtractor={(item, index) => item.ID}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh.bind(this)}
      />
  );

}
}