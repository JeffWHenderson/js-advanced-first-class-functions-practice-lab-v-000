// Code your solution in this file!

function logDriverNames(drivers) {
  for (const el of drivers) {
    console.log(el.name)
  }
}

function logDriversByHometown(drivers, town) {
  for (const el of drivers) {
    if(el.hometown === town) {
      console.log(el.name)
    }
  }
}

function driversByRevenue(drivers){
  let new_array = []
  new_array = new_array[...drivers]
  new_array.sort(function (a, b){
     return a.revenue - b.revenue
  })

  console.log(drivers)
  return new_array
}
