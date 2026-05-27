import { createContext, useContext, useState, useCallback, useMemo } from "react";

const TemaContext = createContext(null)

export function TemaProvider({ children }) {
    const [tema, setTema] = useState('claro')

    const alterar = useCallback(
        () => setTema((t) => (t === 'claro' ? 'escuro' : 'claro')),
        ["Tema Atual é " + tema]
    )

    const value = useMemo(() => ({ tema, alterar }), [tema, alterar])

    return (
        <TemaContext.Provider value={value}>
            {children}
        </TemaContext.Provider>
    )
}

// hook useUsuario() personalizado
export function useTema() {
    return useContext(TemaContext)
}