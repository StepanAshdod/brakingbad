import React from 'react'
import Items from './Items'
import Spinner from '../ui/Spinner'
import './Persons.css'

const Persons = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <Items key={item.char_id} item={item}></Items>
      ))}
    </section>
  )
}

export default Persons