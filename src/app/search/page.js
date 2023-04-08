
import SearchHeader from '@/Components/Search/SearchHeader'
import Head from 'next/head'
import React from 'react'



export default function page({ searchParams }) {

  return (
    <>

      <Head>
        <title>hello</title>
        {/* <title>{Data?.queries.nextPage[0].searchTerm}- Google Search</title> */}
      </Head>
      <SearchHeader param={searchParams} />
    </>
  )
}
