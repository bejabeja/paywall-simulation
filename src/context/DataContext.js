'use client';

import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [selectedPlan, setSelectedPlan] = useState(null)


    return <DataContext.Provider value={{ selectedPlan, setSelectedPlan }}>
        {children}
    </DataContext.Provider>
}