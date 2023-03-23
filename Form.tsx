import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Button, Image } from 'react-native';
import { stylesForm } from './stylesform';
import { EmployeeContext } from './EmployeeContext';
import { SelectList } from 'react-native-dropdown-select-list'
import * as ImagePicker from 'expo-image-picker';

export default function Form() {
  const { employeeData, setEmployeeData } = useContext(EmployeeContext);
  const [selected, setSelected] = useState("");

  const data = [
    {key:'1', value:'Gerente'},
    {key:'2', value:'Desarrollador Jr'},
    {key:'3', value:'Desarrollador Sr'},
    {key:'4', value:'Soporte'},
    {key:'5', value:'Líder de proyecto'}
  ]

  useEffect(() => {
    setEmployeeData({ ...employeeData, puesto: selected });
  }, [selected]);

  const [image, setImage] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setEmployeeData({ ...employeeData, image: result.assets[0].uri });
    }
};

  
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

      <SelectList
        placeholder="Seleccione el puesto"
        boxStyles={{marginBottom: 10}}
        setSelected={(val: any) => 
          setSelected(val)
        } 
        data={data} 
        save="value"
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

      <View style={{  alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>

    </View>
  );
}