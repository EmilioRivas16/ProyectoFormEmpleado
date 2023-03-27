import React, { useContext, useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { stylesCard } from './stylescard';
import { EmployeeContext } from './EmployeeContext';

export default function Card() {
    
    const { employeeData } = useContext(EmployeeContext);
    const isCardLocked = employeeData && employeeData.isCardLocked;

    const [name, setName] = useState(employeeData.name);
    const [email, setEmail] = useState(employeeData.email);
    const [puesto, setPuesto] = useState(employeeData.puesto);
    const [phone, setPhone] = useState(employeeData.phone);
    const [day, setDay] = useState(employeeData.day);
    const [month, setMonth] = useState(employeeData.month);
    const [year, setYear] = useState(employeeData.year);
    const [image, setImage] = useState(employeeData.image ? { uri: employeeData.image } : require('./profileimage.png'));

    useEffect(() => {
        if (isCardLocked) {
            setName(name);
            setEmail(email);
            setPuesto(puesto);
            setPhone(phone);
            setDay(day);
            setMonth(month);
            setYear(year);
            setImage(image);
        } else {
            setName(employeeData.name);
            setEmail(employeeData.email);
            setPuesto(employeeData.puesto);
            setPhone(employeeData.phone);
            setDay(employeeData.day);
            setMonth(employeeData.month);
            setYear(employeeData.year);
            setImage(employeeData.image ? { uri: employeeData.image } : require('./profileimage.png'));
        }
    }, [employeeData.name, employeeData.email, employeeData.puesto, employeeData.phone, employeeData.day, employeeData.month, employeeData.year, employeeData.image, isCardLocked]);

    return (
    <View style={stylesCard.container}>
        <Image source={image} style={stylesCard.image} />
        <Text style={stylesCard.descriptionContainer}>
            <Text style={stylesCard.description}>Nombre:</Text> {isCardLocked ? name : employeeData.name}
        </Text>
        <Text style={stylesCard.descriptionContainer}>
            <Text style={stylesCard.description}>Correo:</Text> {isCardLocked ? email : employeeData.email}
        </Text>
        <Text style={stylesCard.descriptionContainer}>
            <Text style={stylesCard.description}>Puesto:</Text> {isCardLocked ? puesto : employeeData.puesto}
        </Text>
        <Text style={stylesCard.descriptionContainer}>
            <Text style={stylesCard.description}>Teléfono:</Text> {isCardLocked ? phone : employeeData.phone}
        </Text>
        <Text style={stylesCard.descriptionContainer}>
            <Text style={stylesCard.description}>Birthday:</Text> {isCardLocked ? day : employeeData.day} / {isCardLocked ? month : employeeData.month} / {isCardLocked ? year : employeeData.year}
        </Text>
    </View>
    );
}