import React, { Component, useEffect, useState } from 'react';
import { request, useParams } from 'umi';
interface IParams {
  id: string;
}
interface IInfo {
  poster: string;
  synopsis: string;
  // [propname:string]:any
}
function Detail(props: any) {
  const params: IParams = useParams();
  console.log('params:', params);

  const [info, setInfo] = useState<IInfo>({ poster: '', synopsis: '' });
  useEffect(() => {
    // const id = props.match.params.id;
    const id = params.id;
    request('https://m.maizuo.com/gateway?filmId=' + id + '&k=7004210', {
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16833584094408599245750273","bc":"340800"}',
        'X-Host': 'mall.film-ticket.film.info',
      },
    }).then((res) => {
      setInfo(res.data.film);
    });
  }, []);
  return (
    <div>
      <img style={{ width: '200px' }} alt={info.poster} src={info.poster}></img>
      <p>{info.synopsis}</p>
    </div>
  );
}

export default Detail;
