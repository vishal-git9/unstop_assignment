export const closeBook = (data, slot) => {
  let idsArray = []
  let seatNumber = ""
  const rowArr = ["row",0,0,0,0,0,0,0,0,0,0,0,0]
  for (let i = 0; i < data.length; i++) {
    rowArr[Math.ceil(data[i].seatNo/7)]++
  }

  let {start,end} = checkRowWise(data,rowArr,slot)
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
  while (start<=end) {
    idsArray.push(data[start]._id)
    seatNumber+= data[start].seatNo + " "
    start++
  }
  return {idsArray,seatNumber}
};


function checkRowWise(arr, rows, slot) {
  let min = Infinity;
  let rowsIndex = 1;
  let end = null;
  let start = null;
  let count  = 0
  for (let i = 0; i <= arr.length - slot; i++) {
    if(rows[rowsIndex]===0){
      console.log("0")
      rowsIndex++
    }
    if (rows[rowsIndex] >= slot) {
      let diff = arr[(i + slot - 1)].seatNo - arr[i].seatNo;
      if (diff < min) {
        min = diff;
        start = i;
        end = i + slot - 1;
      }
    } else {
      count++
      if (rows[rowsIndex] === count) {
        console.log("bye")
        count = 0
        rowsIndex++
      }
    }
  }

  return {start,end}

}


function checkCloser(data,slot){
  let min = Infinity;
  let start = null;
  let end = null;
  const rowArr = ["row",0,0,0,0,0,0,0,0,0,0,0,0]
  for (let i = 0; i <= data.length - slot; i++) {
    // 6,7
    // 8 9 10 11 12 13 14
    rowArr[Math.ceil(data[i].seatNo/7)]++
    let diff = data[(i + slot - 1)].seatNo - data[i].seatNo;
    if (diff < min) {
      min = diff;
      start = i;
      end = i + slot - 1;
    }
  }
  return {start,end}
}