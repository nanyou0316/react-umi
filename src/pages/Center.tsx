import React from 'react';
import { NavBar, Space, Toast } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { connect, useHistory } from 'umi';
 const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline />
      </Space>
    </div>
  )

  const back = (props:any) => props.history.push('/city')
    // Toast.show({
    //   content: '点击了返回区域',
    //   duration: 1000,
    // })
function Center(props:any) {
  console.log("props:",props);
  
  return (
    <div>
        <NavBar back={props.cityName}  backArrow={false} right={right} onBack={()=>back(props)}>
          标题
        </NavBar>
    </div>
  );
}
Center.wrappers = ['@/wrappers/auth'];
export default connect((state:any)=>state.city)(Center);
