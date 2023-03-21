import React from 'react';

export interface EmployeeData {
    name: string;
    email: string;
    phone: string;
}

interface EmployeeContextType {
    employeeData: EmployeeData;
    setEmployeeData: React.Dispatch<React.SetStateAction<EmployeeData>>;
}

export const EmployeeContext = React.createContext<EmployeeContextType>({
    employeeData: { name: '', email: '', phone: '' },
    setEmployeeData: () => {},
});