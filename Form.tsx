import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Button, Image, Alert } from 'react-native';
import { stylesForm } from './stylesform';
import { EmployeeContext } from './EmployeeContext';
import { SelectList } from 'react-native-dropdown-select-list'
import * as ImagePicker from 'expo-image-picker';

export default function Form() {
  const { employeeData, setEmployeeData } = useContext(EmployeeContext);
  const [selected, setSelected] = useState("");

  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPhone, setErrorPhone] = useState('')
  const [errorPuesto, setErrorPuesto] = useState('')
  const [errorFecha, setErrorFecha] = useState('')
  const [errorImage, setErrorImage] = useState('')

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (errorName !== '') {
      timer = setTimeout(() => {
        setErrorName('');
      }, 2000);
    }
    if (errorEmail !== '') {
      timer = setTimeout(() => {
        setErrorEmail('');
      }, 2000);
    }
    if (errorPhone !== '') {
      timer = setTimeout(() => {
        setErrorPhone('');
      }, 2000);
    }
    if (errorPuesto !== '') {
      timer = setTimeout(() => {
        setErrorPuesto('');
      }, 2000);
    }
    if (errorFecha !== '') {
      timer = setTimeout(() => {
        setErrorFecha('');
      }, 2000);
    }
    if (errorImage !== '') {
      timer = setTimeout(() => {
        setErrorImage('');
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [errorName, errorEmail, errorPhone, errorPuesto, errorFecha, errorImage]);

  const handleAlertBlocked = () => {
    Alert.alert(
      'Tarjeta bloqueada',
      'Ya no puede ser editada',
      [
        {
          text: 'Aceptar'
        },
      ],
      { cancelable: false }
    );
  };

  const handleAlertUnblocked = () => {
    Alert.alert(
      'Tarjeta desbloqueada',
      'Ya puede ser editada',
      [
        {
          text: 'Aceptar'
        },
      ],
      { cancelable: false }
    );
  };

  const regexnonumber = /\d/;
  const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexhasnumber = /^[0-9]+$/;

  const handleLockCard = () => {
    
    if ((employeeData.name === '' || regexnonumber.test(employeeData.name)) || 
    (employeeData.email === '' || !regexemail.test(employeeData.email)) ||
    (employeeData.phone === '' || !regexhasnumber.test(employeeData.phone)) ||
    (employeeData.puesto === '') ||
    (employeeData.day === '' || employeeData.month === '' || employeeData.year === '' ||
    !regexhasnumber.test(employeeData.day) || !regexhasnumber.test(employeeData.month) ||
    !regexhasnumber.test(employeeData.year)) || employeeData.image === '') 
    {
      if (employeeData.name === '' || regexnonumber.test(employeeData.name)) {
        setErrorName('Hay un error en el campo name');
      }
      if (employeeData.email === '' || !regexemail.test(employeeData.email)) {
          setErrorEmail('Hay un error en el campo email');
      }
      if (employeeData.phone === '' || !regexhasnumber.test(employeeData.phone)) {
        setErrorPhone('Hay un error en el campo teléfono');
      }
      if (employeeData.puesto === '') {
        setErrorPuesto('Hay un error en el campo puesto');
      }
      if (employeeData.day === '' || employeeData.month === '' || employeeData.year === '' ||
      !regexhasnumber.test(employeeData.day) || !regexhasnumber.test(employeeData.month) ||
      !regexhasnumber.test(employeeData.year)) {
        setErrorFecha('Hay un error en el campo fecha de nacimiento');
      }
      if (employeeData.image === '') {
        setErrorImage('Hay un error en el campo imagen');
      }
    } else {
        setEmployeeData({ ...employeeData, isCardLocked: true });
        handleAlertBlocked();
  }


  };

  const handleUnlockCard = () => {
    setEmployeeData({ ...employeeData, isCardLocked: false });
    handleAlertUnblocked();
  };

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
      {errorName !== '' && <Text style={{ textAlign: 'center', color: 'red', marginTop: -20, marginBottom: 10 }}>{errorName}</Text>}
      <TextInput
        style={stylesForm.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        onChangeText={(text) =>
          setEmployeeData({ ...employeeData, email: text })
        }
      />
      {errorEmail !== '' && <Text style={{ textAlign: 'center', color: 'red', marginTop: -20, marginBottom: 10 }}>{errorEmail}</Text>}
      <SelectList
        placeholder="Seleccione el puesto"
        boxStyles={{marginBottom: 30}}
        setSelected={(val: any) => 
          setSelected(val)
        } 
        data={data} 
        save="value"
      />
      {errorPuesto !== '' && <Text style={{ textAlign: 'center', color: 'red', marginTop: -20, marginBottom: 10 }}>{errorPuesto}</Text>}
      <TextInput
        style={stylesForm.input}
        placeholder="Número telefónico"
        keyboardType="phone-pad"
        onChangeText={(text) =>
          setEmployeeData({ ...employeeData, phone: text })
        }
      />
      {errorPhone !== '' && <Text style={{ textAlign: 'center', color: 'red', marginTop: -20, marginBottom: 10 }}>{errorPhone}</Text>}
      <View style={stylesForm.inputDateContainer}>
        <TextInput 
          placeholder="Día"
          maxLength={2} 
          style={stylesForm.inputDate} 
          keyboardType="phone-pad"
          onChangeText={(text) =>
            setEmployeeData({ ...employeeData, day: text })
          }
        />
        <Text style={stylesForm.diagonal}>/</Text>
        <TextInput 
          placeholder="Mes" 
          maxLength={2} 
          style={stylesForm.inputDate} 
          keyboardType="phone-pad"
          onChangeText={(text) =>
            setEmployeeData({ ...employeeData, month: text })
          }
        />
        <Text style={stylesForm.diagonal}>/</Text>
        <TextInput
          placeholder="Año" 
          maxLength={4} 
          style={stylesForm.inputDate} 
          keyboardType="phone-pad"
          onChangeText={(text) =>
            setEmployeeData({ ...employeeData, year: text })
          }
        />
      </View>
      {errorFecha !== '' && <Text style={{ textAlign: 'center', color: 'red', marginTop: -20, marginBottom: 10 }}>{errorFecha}</Text>}
      <View style={stylesForm.input}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
      {errorImage !== '' && <Text style={{ textAlign: 'center', color: 'red', marginTop: -20, marginBottom: 10 }}>{errorImage}</Text>}
      <View style={stylesForm.buttonsContainer}>
        <TouchableOpacity 
          style={[stylesForm.button, employeeData.isCardLocked && stylesForm.disabledButton]}
          onPress={handleLockCard}>
          <Text style={stylesForm.textButton}>Bloquear tarjeta</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[stylesForm.button, !employeeData.isCardLocked && stylesForm.disabledButton]}
        onPress={handleUnlockCard}>
          <Text style={stylesForm.textButton}>Desbloquear tarjeta</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}