import React from 'react';
import { Redirect, useLocation } from 'umi';

export default function _layout(props:any) {
  const location=useLocation()
  if(location.pathname==='/film'||location.pathname==='/film/'){
    return <Redirect to='/film/nowplaying'></Redirect>
  } else if (location.pathname!=='/film/comingsoon'&&location.pathname!=='/film/nowplaying') {
    return <Redirect to='/404'></Redirect>
  }
  return (
    <div>
      <div style={{width:'100%',height:'30vh',background:'pink'}}>
      </div>
      {props.children}
    </div>
  );
}
