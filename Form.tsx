import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { stylesForm } from './stylesform';

export default function Form() {
  return (
    <View>

      <TextInput style={stylesForm.input} placeholder="Nombre del empleado" keyboardType='default'/>
      <TextInput style={stylesForm.input} placeholder="Correo electrónico" keyboardType='email-address'/>
      <TextInput style={stylesForm.input} placeholder="Número telefónico" keyboardType='phone-pad'/>
      
      <View style={stylesForm.buttonsContainer}>
        <TouchableOpacity style={stylesForm.button}>
          <Text style={stylesForm.textButton}>Bloquear tarjeta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesForm.button}>
          <Text style={stylesForm.textButton}>Desbloquear tarjeta</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
}