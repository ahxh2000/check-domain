'use client'

import { useState  } from 'react'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

 
  function handleSubmit(event) {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)
    const domain = formData.get('Domain')
    const suffix = formData.get('suffix')
   
    const data = {
      domain: domain,
      suffix: suffix
    }
 
    router.push(`/searchresult?domain=${domain}&suffix=${suffix}`);
   console.log('form submitted');
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Check Domain avalable
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"  onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Domain" className="block text-sm font-medium leading-6 text-gray-900">
                Domain
              </label>
              <div className="mt-2">
                <input
                  id="Domain"
                  name="Domain"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="suffix" className="block text-sm font-medium leading-6 text-gray-900">
                  Suffix
                </label>
              </div>
              <div className="mt-2">
                <select name="suffix" id="suffix">
                  <option value="com">com</option>
                  <option value="net">net</option>
                  <option value="me">me</option>
                  <option value="xyz">xyz</option>
                  <option value="info">info</option>
                  <option value="io">io</option>
                  <option value="ai">ai</option>
                  <option value="biz">biz</option>
                  <option value="us">us</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Check Domain
              </button>
            </div>
          </form>


        </div>
      </div>
    </>
  )
}
