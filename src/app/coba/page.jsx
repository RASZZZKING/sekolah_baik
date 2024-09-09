import React from 'react'

const page = async() => {
  const response = await fetch("http://localhost:8000/canteen/products")
  const data = await response.json()
  console.log("🚀 ~ page ~ data:", data)
  

  
  return (
    <div>page</div>
  )
}

export default page