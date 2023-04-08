import Image from 'next/image'
import { Fira_Sans_Condensed } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/Components/Header'
import Body from '@/Components/Body'

export default function Home() {
  return (

    <>
    <Header />
  
    <Body />
    </>
  )
}
