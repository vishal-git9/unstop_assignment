export const closeBook = (data, slot) => {
  let min = Infinity;
  let start = null;
  let end = null;
  let idsArray = []
  for (let i = 0; i <= data.length - slot; i++) {
    let diff = data[(i + slot - 1)].seatNo - data[i].seatNo;
    console.log(diff)
    if (diff < min) {
      min = diff;
      start = i;
      end = i + slot - 1;
    }
  }

  for (start = 0; start <= end; start++) {

    idsArray.push(data[start]._id)
  }

  console.log(idsArray);
  return idsArray
};

// [3,4,5,6,7,8]