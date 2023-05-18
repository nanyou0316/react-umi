import React, { useState } from 'react'
import { request } from 'umi'

export default function Login() {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  return (
    <div>
      username:<input value={username} onChange={(el)=>setUsername(el.target.value)} type='text'></input><br/>
      password:<input value={password} onChange={(el)=>setPassword(el.target.value)} type='password'></input><br/>
      <button onClick={()=>{
        request('/user/login',{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            username,
            password
          })
        }).then(res=>console.log("/user/login:",res)
        )
      }}>提交</button>
    </div>
  )
}
