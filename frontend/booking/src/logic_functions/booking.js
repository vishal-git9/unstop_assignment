export const closeBook = (data, slot) => {
  let idsArray = [] // arr to store the ids of seats to be booked
  let seatNumber = "" // storing the booked seats
  const rowArr = ["row",0,0,0,0,0,0,0,0,0,0,0,0] // made a simple arr to monitor each row elements count
  for (let i = 0; i < data.length; i++) {
    rowArr[Math.ceil(data[i].seatNo/7)]++ // increasing the count of each row
  }
  let {start,end} = checkRowWise(data,rowArr,slot) // calling the row wise first
  // if there is no rowwise seats available
  if(start===null || end === null){
    let {start,end}  = checkCloser(data,slot)
    while (start<=end) {
      idsArray.push(data[start]._id)
      seatNumber+= data[start].seatNo + " "
      start++
    }
    return {idsArray,seatNumber}
  }

  // if there is a row wise seats available
  while (start<=end) { // pushing the ids into the idArr
    idsArray.push(data[start]._id)
    seatNumber+= data[start].seatNo + " "
    start++
  }
  return {idsArray,seatNumber} // returing the idsArr and seatNumbers that are booked
};


function checkRowWise(arr, rows, slot) {
  let min = Infinity;
  let rowsIndex = 1;
  let end = null;
  let start = null;
  let count  = 0
  for (let i = 0; i <= arr.length - slot; i++) {
    while(rows[rowsIndex]===0){ // while row has no seats available we move ahead
      rowsIndex++
    }
    if (rows[rowsIndex] >= slot) { // if we have seats equal or more than we will book closest in that row
      let diff = arr[(i + slot - 1)].seatNo - arr[i].seatNo;
      if (diff < min) {
        min = diff;
        start = i;
        end = i + slot - 1;
      }
    } else { // else we simply pass on to the next row
      count++
      if (rows[rowsIndex] === count) {
        count = 0
        rowsIndex++
      }
    }
  }
  return {start,end} // return the index of starting seat and ending seat to be booked

}


function checkCloser(data,slot){
  let min = Infinity;
  let start = null;
  let end = null;
  for (let i = 0; i <= data.length - slot; i++) { // comparing the smallest diff and booking that seat irrespective of the same row
    let diff = data[(i + slot - 1)].seatNo - data[i].seatNo;
    if (diff < min) {
      min = diff;
      start = i;
      end = i + slot - 1;
    }
  }
  return {start,end} // return the index of starting seat and ending seat to be booked
}