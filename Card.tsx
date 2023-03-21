import { Text, View, Image } from 'react-native';
import { stylesCard } from './stylescard';

export default function Card() {
    return (
        <>
            <View style={stylesCard.container}>
                <Image source={require('./profileimage.png')} style={stylesCard.image}></Image>
                <Text style={stylesCard.descriptionContainer}><Text style={stylesCard.description}>Nombre:</Text>  Michael Jordan  </Text>
                <Text style={stylesCard.descriptionContainer}><Text style={stylesCard.description}>Correo:</Text>  mono@hotmail.com  </Text>
                <Text style={stylesCard.descriptionContainer}><Text style={stylesCard.description}>Teléfono:</Text>  9993572946  </Text>
            </View>
        </>
    );
}