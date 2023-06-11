export const closeBook = (data, slot) => {
  let min = Infinity;
  let start = null;
  let end = null;
  let idsArray = []
  console.log(data)
  for (let i = 0; i <= data.length - slot; i++) {
    let diff = data[(i + slot - 1)].seatNo - data[i].seatNo;
    if (diff < min) {
      min = diff;
      start = i;
      end = i + slot - 1;
    }
  }

//   [3,5,6,7]

  while (start<=end) {
    idsArray.push(data[start]._id)
    start++
  }

  console.log(start)
  console.log(end)

  console.log(idsArray);
  return idsArray
};

// [3,4,5,6,7,8]