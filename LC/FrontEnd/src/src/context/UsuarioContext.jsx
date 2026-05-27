import { createContext, useContext, useState, useCallback, useMemo } from "react"

const UsuarioContext = createContext(null)

export function UsuarioProvider({ children }) {
    const [usuario, setUsuario] = useState(null)

    const login = useCallback((nome) => setUsuario({ nome }), [])
    const logout = useCallback(() => setUsuario(null), [])

    const value = useMemo(
        () => ({ usuario, login, logout }),
        [usuario, login, logout]
    )

    return (
        <UsuarioContext.Provider value={value} >
            {children}
        </UsuarioContext.Provider>
    )
}

// hook useUsuario() personalizado
export function useUsuario() {
    return useContext(UsuarioContext)
}