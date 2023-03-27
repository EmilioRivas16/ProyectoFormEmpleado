import React from 'react';

export interface EmployeeData {
    name: string;
    email: string;
    puesto: string;
    phone: string;
    day: string;
    month: string;
    year: string;
    image: string;
    isCardLocked: boolean;
}

interface EmployeeContextType {
    employeeData: EmployeeData;
    setEmployeeData: React.Dispatch<React.SetStateAction<EmployeeData>>;
}

export const EmployeeContext = React.createContext<EmployeeContextType>({
    employeeData: { name:'',email:'',puesto:'',phone:'',day:'',month:'',year:'',image:'', isCardLocked: false},
    setEmployeeData: () => {},
});
