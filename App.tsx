import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { stylesApp } from './stylesapp';
import Form from './Form';
import Card from './Card';
import { EmployeeContext, EmployeeData } from './EmployeeContext';

export default function App() {
  const [employeeData, setEmployeeData] = useState<EmployeeData>({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <ScrollView>
      <View style={stylesApp.container}>
        <EmployeeContext.Provider value={{ employeeData, setEmployeeData }}>
          <Form></Form>
          <Card></Card>
        </EmployeeContext.Provider>
      </View>
    </ScrollView>
  );
}