import { createContext, useContext, useState, type ReactNode } from 'react'
import { languageData, type Language } from '../data/languageData'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  currentLang: typeof languageData[Language]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("TR")
  const currentLang = languageData[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, currentLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
