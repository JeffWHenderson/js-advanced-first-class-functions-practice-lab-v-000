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
  new_array = []

  return drivers
}