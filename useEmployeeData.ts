import { useState } from 'react';
import { EmployeeData } from './EmployeeContext';

export default function useEmployeeData(
    initialEmployeeData: EmployeeData
    ) : { employeeData: EmployeeData; setEmployeeData: React.Dispatch<React.SetStateAction<EmployeeData>> } {
    const [employeeData, setEmployeeData] = useState<EmployeeData>(
    initialEmployeeData
);

return { employeeData, setEmployeeData };
}