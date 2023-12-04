'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Displayresult from '@/components/displayresult'
function Page() {

  const [Domaindata, setDomaindata] = useState(null);
  const SearchParams = useSearchParams()
  const domain = SearchParams.get('domain')
  const suffix = SearchParams.get('suffix')

  console.log('domain', domain)
  console.log(suffix)
  const data = {
    domain: domain,
    suffix: suffix
  }


  function getData() {
    fetch('/api/checkdomain', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('data.creation_datetime', data.creation_datetime);
        setDomaindata(data);
      })
      .catch(error => {
        console.error('请求失败:', error);
      });
  }

  useEffect(() => {
    console.log('useEffect')
    getData()
  }, [])
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div>
        searchresult
        {
          Domaindata &&
          <Displayresult domain={Domaindata} />
        }
      </div>
    </div>
  )
}

export default Page 


