import { backgroundColor, borderColor } from './data';

export function actionList(list = [], selectedAction="ANY") {
  let obj ;
  if(selectedAction==='ANY'){
   obj= list.reduce((acc, item) => {
      acc[item.action] =
        acc[item.action] === undefined ? 1 : acc[item.action] + 1;
      return acc;
    }, {});
  }else{
    obj= list.reduce((acc, item) => {
      if(item.action===selectedAction)
        acc[item.action] =acc[item.action] === undefined ? 1 : acc[item.action] + 1;
      return acc;
    }, {});
  }
 const labels= [];
 const data= [] ;
  for (let key in obj) {
    labels.push(key);
    data.push(obj[key]);
  }
  const ans={}
  ans.labels=labels;
  
  ans.datasets = [
    {
      label: 'Total',
      data:data,
      backgroundColor: backgroundColor.slice(0, labels.length),
      borderColor: borderColor.slice(0, labels.length),
      borderWidth: 1,
    }
  ];
  return ans;
}
export function dishesList(list = [], selectedAction="ANY", selectedDish="ANY") {
  let obj;

  if(selectedAction==='ANY'){
    obj = list.reduce((acc, item) => {
      acc[item.dish] = acc[item.dish] === undefined ? 1 : acc[item.dish] + 1;
      return acc;
    }, {});
  }else{
     if(selectedDish==='ANY'){
      obj = list.reduce((acc, item) => {
        acc[item.dish] = acc[item.dish] === undefined ? 1 : acc[item.dish] + 1;
        return acc;
      }, {});
     }else{
      obj = list.reduce((acc, item) => {
        if(item.action===selectedAction)
         acc[item.dish] = acc[item.dish] === undefined ? 1 : acc[item.dish] + 1;
        return acc;
      }, {});
     }
    
  }
 const labels= [];
 const data= [] ;
  for (let key in obj) {
    labels.push(key);
    data.push(obj[key]);
  }
  const ans={}
  ans.labels=labels;
  
  ans.datasets = [
    {
      label: 'Total',
      data:data,
      backgroundColor: backgroundColor.slice(0, labels.length),
      borderColor: borderColor.slice(0, labels.length),
      borderWidth: 1,
    }
  ];
  return ans;
}
export function stationList(list = [], selectedAction="ANY", selectedStation="ANY") {
  let obj;
  console.log('selectedStation= ', selectedStation)
  if(selectedAction==='ANY'){
    obj = list.reduce((acc, item) => {
      acc[item.station] =
      acc[item.station] === undefined ? 1 : acc[item.station] + 1;
      return acc;
    }, {});
  }else{
     if(selectedStation==='ANY'){
      obj = list.reduce((acc, item) => {
        acc[item.station] =
      acc[item.station] === undefined ? 1 : acc[item.station] + 1;
        return acc;
      }, {});
     }else{
      obj = list.reduce((acc, item) => {
        if(item.action===selectedAction)
         acc[item.station] =
      acc[item.station] === undefined ? 1 : acc[item.station] + 1;
        return acc;
      }, {});
     }
    
  }
  const labels= [];
  const data= [] ;
   for (let key in obj) {
     labels.push(key);
     data.push(obj[key]);
   }
   const ans={}
   ans.labels=labels;
   
   ans.datasets = [
     {
       label: 'Total',
       data:data,
       backgroundColor: backgroundColor,
       borderColor: borderColor,
       borderWidth: 1,
     }
   ];
   return ans;
}

