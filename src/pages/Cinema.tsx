import React, { useEffect } from 'react';
import { Button, Space } from 'antd-mobile';
import { connect } from 'umi';
function Cinema(props: any) {
  useEffect(() => {
    if (props.list.length === 0) {
      props.dispatch({
        type: 'cinemaModel/getList',
        payload: props.city,
      });
    } else {
      console.log('走缓存。。。。。。。。');
    }
  }, []);
  return (
    <div>
      <Button
        color="primary"
        fill="solid"
        onClick={() => {
          props.history.push('/city');
          props.dispatch({
            type: 'cinemaModel/clearList',
          });
        }}
      >
        城市：{props.city.cityName}
      </Button>
      <div>
        <ul>
          {props.list.map((item: any) => (
            <li key={item.cinemaId}>
              <p>名字：{item.name}</p>
              <p>地址：{item.address}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default connect((state: any) => {
  return { city: state.city, list: state.cinemaModel.list };
})(Cinema);
