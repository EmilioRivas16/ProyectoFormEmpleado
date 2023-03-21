import React, { useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { stylesForm } from './stylesform';
import { EmployeeContext } from './EmployeeContext';

export default function Form() {
  const { employeeData, setEmployeeData } = useContext(EmployeeContext);

  return (
    <View>
      <TextInput
        style={stylesForm.input}
        placeholder="Nombre del empleado"
        keyboardType="default"
        onChangeText={(text) =>
          setEmployeeData({ ...employeeData, name: text })
        }
      />
      <TextInput
        style={stylesForm.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        onChangeText={(text) =>
          setEmployeeData({ ...employeeData, email: text })
        }
      />
      <TextInput
        style={stylesForm.input}
        placeholder="Número telefónico"
        keyboardType="phone-pad"
        onChangeText={(text) =>
          setEmployeeData({ ...employeeData, phone: text })
        }
      />

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