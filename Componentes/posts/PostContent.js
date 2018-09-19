import React from 'react';
import {Text, View, Image, Linking, WebView} from 'react-native';
import HTMLView from 'react-native-render-html';
import entities from 'entities';


const PostContent = ({ post }) => {
    //Desconstruimos las variables de post por comodidad

    const { title, better_featured_image, excerpt } = post;

    //Desconstruimos las variables de estilos para comodidad (Tam)

    const { PostContent, headerContentStyle, headerTextStyle, imageStyle} = post;

    return (
        <View style={PostContent}>
            <Text style={headerTextStyle}> {entities.decodeHTML(title.rendered)}>
            </Text>
            <Image 
                style={imageStyle}
                source={{Uri: better_featured_image.media_details.sizes.medium.source_url }} 
            />
            <Text>{entities.decodeHTML(excerpt.rendered).replace(/<(?:.│\n)*?>/gm, '')}</Text>
        </View>
    );
};

const styles = {
    PostContent:{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
    }

}

