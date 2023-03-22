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

      <View style={stylesForm.inputDateContainer}>
        <TextInput 
          placeholder="Día" 
          style={stylesForm.inputDate} 
          keyboardType="phone-pad"
          onChangeText={(text) =>
            setEmployeeData({ ...employeeData, day: text })
          }
        />
        <Text style={stylesForm.diagonal}>/</Text>
        <TextInput 
          placeholder="Mes" 
          style={stylesForm.inputDate} 
          keyboardType="phone-pad"
          onChangeText={(text) =>
            setEmployeeData({ ...employeeData, month: text })
          }
        />
        <Text style={stylesForm.diagonal}>/</Text>
        <TextInput 
          placeholder="Año" 
          style={stylesForm.inputDate} 
          keyboardType="phone-pad"
          onChangeText={(text) =>
            setEmployeeData({ ...employeeData, year: text })
          }
        />
      </View>

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