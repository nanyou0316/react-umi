import React from 'react';
import { useEffect } from 'react';
import { request } from 'umi';
export default function ComingSoon() {
  useEffect(() => {
    request(
      '/api/mmdb/movie/v3/list/hot.json?ct=%E6%9D%AD%E5%B7%9E&ci=50&channelId=4',
    ).then((res) => console.log('res:', res));
  }, []);
  return <div>ComingSoon</div>;
}
