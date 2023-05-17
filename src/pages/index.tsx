import React from 'react'
import  {Redirect} from 'umi'
export default function Index() {
  return (
    <div>
      <Redirect to='/film'></Redirect>
    </div>
  )
}
