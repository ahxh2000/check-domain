'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Displayresult from '@/components/displayresult'
const page = () => {

  const [domaindata, setDomaindata] = useState(null);
  const searchParams = useSearchParams()
  const domain = searchParams.get('domain')
  const suffix = searchParams.get('suffix')

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
          domaindata &&
          <Displayresult domain={domaindata} />
        }
      </div>
    </div>
  )
}

export default page
