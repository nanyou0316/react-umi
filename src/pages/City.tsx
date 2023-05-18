import React, { Fragment, useRef, useState } from 'react';
import { useEffect } from 'react';
import { connect, request } from 'umi';
import { Button, IndexBar, List } from 'antd-mobile';
import { IndexBarRef } from 'antd-mobile/es/components/index-bar';
function City(props: any) {
  const [cities, setCities] = useState<Array<any>>([]);

  useEffect(() => {
    request('https://m.maizuo.com/gateway?k=9788042', {
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16833584094408599245750273"}',
        'X-Host': 'mall.film-ticket.city.list',
      },
    }).then((res) => {
      let cityData = res.data.cities;
      const newList = [];
      const letterArr: string[] = [];
      for (let i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i));
      }
      for (let i = 0; i < letterArr.length; i++) {
        if (
          cityData.filter(
            (item: any) =>
              item.pinyin.substring(0, 1).toUpperCase() === letterArr[i],
          ).length === 0
        ) {
          continue;
        }
        newList.push({
          type: letterArr[i],
          items: cityData.filter(
            (item: any) =>
              item.pinyin.substring(0, 1).toUpperCase() === letterArr[i],
          ),
        });
      }
      console.log('newList:', newList);
      setCities(newList);
    });
  }, []);
  function changeCity(item: any): void {
    console.log('item:', item);
    if (props.cityName !== item.name) {
      props.dispatch({
        type: 'city/changeCity',
        payload: {
          cityName: item.name,
          cityId: item.cityId,
        },
      });
    }

    props.history.go(-1);
  }
  const indexBarRef = useRef<IndexBarRef>(null);
  return (
    <Fragment>
      <div>
        <Button
          color="primary"
          fill="solid"
          onClick={() => props.history.go(-1)}
        >
          返回
        </Button>
      </div>
      <div style={{ height: window.innerHeight }}>
        <IndexBar ref={indexBarRef}>
          {cities.map((group) => {
            const { type, items } = group;
            return (
              <IndexBar.Panel index={type} title={type} key={type}>
                <List>
                  {items.map((item: any, index: number) => (
                    <List.Item key={index} onClick={() => changeCity(item)}>
                      {item.name}
                    </List.Item>
                  ))}
                </List>
              </IndexBar.Panel>
            );
          })}
        </IndexBar>
      </div>
    </Fragment>
  );
}
export default connect((state: any) => state.city)(City);
