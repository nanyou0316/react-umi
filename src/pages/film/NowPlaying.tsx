import React, { useEffect, useState } from 'react';
import {useHistory} from 'umi'
import { request } from '@/.umi/plugin-request/request';
interface IItem {
  filmId:number,
  name:string,
  poster:string
}
interface IgoDetail {
  (id: number): void;
}
export default function NowPlaying(props:any) {
  const history=useHistory()
  const [list, setList] = useState([]);
  useEffect(() => {
    request(
      'https://m.maizuo.com/gateway?cityId=330100&pageNum=1&pageSize=10&type=1&k=9024294',
      {
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16833584094408599245750273","bc":"330100"}',
          'X-Host': 'mall.film-ticket.film.list',
        },
      },
    ).then((res) => {
      if (res.status === 0) {
        setList(res.data.films);
      } else {
        setList([]);
      }
    });
  }, []);
  
  let goDetail:IgoDetail
  goDetail=(id)=>{
    // console.log(props);
    // props.history.push(`/detail/${id}`)
    history.push(`/detail/${id}`)
  }
  return (
    <div>
      <ul>
        {list.map((item:IItem) => (
          <li key={item.filmId} onClick={() => goDetail(item.filmId)}>
            <img
              style={{ width: '100px' }}
              alt={item.name}
              src={item.poster}
            ></img>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
