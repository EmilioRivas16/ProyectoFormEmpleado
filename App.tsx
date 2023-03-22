import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { stylesApp } from './stylesapp';
import Form from './Form';
import Card from './Card';
import { EmployeeContext, EmployeeData } from './EmployeeContext';
import useEmployeeData from './useEmployeeData';

export default function App() {
  const initialEmployeeData: EmployeeData = {
    name: '',
    email: '',
    phone: '',
    day:'',
    month:'',
    year:''
  };
  const { employeeData, setEmployeeData } = useEmployeeData(initialEmployeeData);
  
  return (
    <ScrollView>
      <View style={stylesApp.container}>
        <EmployeeContext.Provider value={{ employeeData, setEmployeeData }}>
          <Form />
          <Card />
        </EmployeeContext.Provider>
      </View>
    </ScrollView>
    );
  }