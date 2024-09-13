



export let printFormattedDates = () => {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    let formattedDates = [];
    let currentDate = new Date();
  
    for (let i = 0; i < 7; i++) {
      let nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
  
      let day = days[nextDate.getDay()];
      let month = months[nextDate.getMonth()];
      let date = nextDate.getDate().toString().padStart(2, '0');
  
      let formattedDate = `${day} ${month} ${date}`;
      formattedDates.push(formattedDate);
    }
  
    return (formattedDates);
  }
  

export let findSubString = (mainStr, subStr) => {
  if(!mainStr || !subStr) return null;
  if(!mainStr.length) return null;
  if(!subStr.length) return null;

  if(subStr.length > mainStr.length) return null;

  let p=0;

  while(p < subStr.length){
    if(mainStr[p].toLowerCase() != subStr[p].toLowerCase()) return null;
    p++;
  }

  return mainStr;
}


export let findLocations = (locationArray, str) => {
  let arr = [];

  locationArray.forEach(item => {
      if(findSubString(item, str)) arr.push(item)
  })

  return arr;
}

export let findBookings = (bookings, str) => {
  let arr = [];
  
  bookings.forEach(item => {
    if(findSubString(item.data.hospitalName, str)) arr.push(item);
  })
  
  return arr;
}