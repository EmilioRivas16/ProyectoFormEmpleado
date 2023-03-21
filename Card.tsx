import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';
import { stylesCard } from './stylescard';
import { EmployeeContext } from './EmployeeContext';

export default function Card() {
    const { employeeData } = useContext(EmployeeContext);

    return (
    <View style={stylesCard.container}>
        <Image source={require('./profileimage.png')} style={stylesCard.image} />
        <Text style={stylesCard.descriptionContainer}>
            <Text style={stylesCard.description}>Nombre:</Text> {employeeData.name}
        </Text>
        <Text style={stylesCard.descriptionContainer}>
            <Text style={stylesCard.description}>Correo:</Text> {employeeData.email}
        </Text>
        <Text style={stylesCard.descriptionContainer}>
            <Text style={stylesCard.description}>Teléfono:</Text> {employeeData.phone}
        </Text>
    </View>
    );
}
