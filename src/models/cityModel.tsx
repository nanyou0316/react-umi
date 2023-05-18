interface IAcangeCityAction {
  type:string,
  payload:any
}
export default {
  namespace:'city',
  state:{
    cityName:"北京",
    cityId:'110100'
  },
  reducers:{
    changeCity(precStaet:any,action:IAcangeCityAction){
      console.log("action:",action);
      return {
        ...precStaet,
        ...action.payload
      }
      
    }
  }
}