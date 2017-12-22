// Code your solution in this file!

// function logDriverNames(drivers) {
//   for (const el of drivers) {
//     console.log(el.name)
//   }
// }
//
// function logDriversByHometown(drivers, town) {
//   for (const el of drivers) {
//     if(el.hometown === town) {
//       console.log(el.name)
//     }
//   }
// }
//
// function driversByRevenue(drivers){
//   let new_array = [...drivers]
//
//   new_array.sort(function (a, b){
//      return a.revenue - b.revenue
//   })
//
//   return new_array
// }

function driversByName(drivers) {
  let new_array = [...drivers]

  new_array.sort(function (a, b){
     return a.name - b.name
  })

  console.log(new_array[0].name - new_array[1].name)//new_array)
}
