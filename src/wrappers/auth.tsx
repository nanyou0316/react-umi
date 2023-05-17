import { Redirect } from 'umi'

export default (props:any) => {
  // const { isLogin } = useAuth();
  if (localStorage.getItem('token')) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}