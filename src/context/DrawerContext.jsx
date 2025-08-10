import { createContext, useContext } from 'react'

export const DrawerContext = createContext({ open: false })

export const useDrawer = () => useContext(DrawerContext)