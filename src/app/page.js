import Image from 'next/image'
import { Fira_Sans_Condensed } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/Components/Header'
import Body from '@/Components/Body'


export async function  getServerSideProps() {
  const data = await fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyAJ_TRxLePr0fo7IPd1mTWyUggQZ-AQ5qk&cx=561f6a3ff44b4403e&q=graphketing');
  let NewData = await data.json();
  console.log(NewData , "newDAta")
  return {
    props: {
      result: NewData
    }
  }

}
export default function Home({result}) {
  console.log(result , 'ooo')
  return (

    <>
    <Header />
  
    <Body />
    </>
  )
}
