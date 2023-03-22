import React from 'react';

export interface EmployeeData {
    name: string;
    email: string;
    phone: string;
    day: string;
    month: string;
    year: string;
}

interface EmployeeContextType {
    employeeData: EmployeeData;
    setEmployeeData: React.Dispatch<React.SetStateAction<EmployeeData>>;
}

export const EmployeeContext = React.createContext<EmployeeContextType>({
    employeeData: { name:'',email:'',phone:'',day:'',month:'',year:'' },
    setEmployeeData: () => {},
});