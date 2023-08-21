import React, { useContext, useState } from 'react'
import styles from './AgeModal.module.css'
import AppContext from '../../context/AppContext'

const AgeModal = ({ showModal }) => {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const { age, setAge, setShowModal } = useContext(AppContext)

  const calculateAge = birthdate => {
    const today = new Date()
    const diff = today - birthdate
    const ageDate = new Date(diff)
    return ageDate.getUTCFullYear() - 1970
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const birthdate = new Date(`${year}-${month}-${day}`)
    const calculatedAge = calculateAge(birthdate)
    setAge(calculatedAge)
    setShowModal(false)
  }

  return (
    <div className={`${styles.modal} ${showModal ? styles.show : ''}`}>
      <div className={styles.modalContent}>
        <h2>Olá! Que bom te ver aqui.</h2>
        <span>Para continuar, informe a sua data de nascimento</span>
        <div className={styles.selectModal}>
          <form onSubmit={handleSubmit}>
            <div className={styles.selectContent}>
              <select value={day} onChange={e => setDay(e.target.value)}>
                <option value="">Dia</option>
                {Array.from({ length: 31 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
              <select value={month} onChange={e => setMonth(e.target.value)}>
                <option value="02">Mês</option>
                {Array.from({ length: 12 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
              <select value={year} onChange={e => setYear(e.target.value)}>
                <option value="1900">Ano</option>
                {Array.from(
                  { length: new Date().getFullYear() - 1900 + 1 },
                  (_, index) => (
                    <option key={1900 + index} value={1900 + index}>
                      {1900 + index}
                    </option>
                  )
                )}
              </select>
            </div>
            <div>
              <button type="submit" >
                Calcular idade
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AgeModal
