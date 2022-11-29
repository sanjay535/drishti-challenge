import { backgroundColor, borderColor } from './data';

export function actionList(list = []) {
  const obj = list.reduce((acc, item) => {
    acc[item.action] =
      acc[item.action] === undefined ? 1 : acc[item.action] + 1;
    return acc;
  }, {});
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
      backgroundColor: [
        'rgba(138, 63, 252, 0.2)',
        'rgba(255, 126, 182, 0.2)',
        'rgba(111, 220, 140, 0.2)',
        'rgba(210, 161, 6, 0.2)',
        'rgba(186, 78, 0, 0.2)',
        'rgba(51, 177, 255, 0.2)',
        'rgba(250, 77, 86, 0.2)',
        'rgba(8, 189, 186, 0.2)',
      ],
      borderColor: [
        'rgba(138, 63, 252, 1)',
        'rgba(255, 126, 182, 1)',
        'rgba(111, 220, 140, 1)',
        'rgba(210, 161, 6, 1)',
        'rgba(186, 78, 0, 1)',
        'rgba(51, 177, 255, 1)',
        'rgba(250, 77, 86, 1)',
        'rgba(8, 189, 186, 1)',
      ],
      borderWidth: 1,
    }
  ];
  return ans;
}
export function dishesList(list = []) {
  const obj = list.reduce((acc, item) => {
    acc[item.dish] = acc[item.dish] === undefined ? 1 : acc[item.dish] + 1;
    return acc;
  }, {});
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
      backgroundColor: [
        'rgba(138, 63, 252, 0.2)',
        'rgba(255, 126, 182, 0.2)',
        'rgba(111, 220, 140, 0.2)',
        'rgba(210, 161, 6, 0.2)',
        'rgba(186, 78, 0, 0.2)',
        'rgba(51, 177, 255, 0.2)',
        'rgba(250, 77, 86, 0.2)',
        'rgba(8, 189, 186, 0.2)',
      ],
      borderColor: [
        'rgba(138, 63, 252, 1)',
        'rgba(255, 126, 182, 1)',
        'rgba(111, 220, 140, 1)',
        'rgba(210, 161, 6, 1)',
        'rgba(186, 78, 0, 1)',
        'rgba(51, 177, 255, 1)',
        'rgba(250, 77, 86, 1)',
        'rgba(8, 189, 186, 1)',
      ],
      borderWidth: 1,
    }
  ];
  return ans;
}
export function stationList(list = []) {
  const obj = list.reduce((acc, item) => {
    acc[item.station] =
      acc[item.station] === undefined ? 1 : acc[item.station] + 1;
    return acc;
  }, {});
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
