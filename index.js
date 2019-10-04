/* Your Code Here */

function createEmployeeRecord([first, last, title, pph]) {
  let employee = {
  firstName: first,
  familyName: last,
  title: title,
  payPerHour: pph,
  timeInEvents: [],
  timeOutEvents: []
  }
  return employee
}

function createEmployeeRecords(recordsArrays) {
  let employeeRecords = recordsArrays.map(employee => createEmployeeRecord(employee))
  return employeeRecords
}

function createEvent(dateStamp, eventType) {
  //helper function to create timeIn and timeOut events
  let [day, time] = dateStamp.split(" ")
  let newEvent = {}
    newEvent.type = eventType
    newEvent.hour = parseInt(time)
    newEvent.date = day
  return newEvent
}

let createTimeInEvent = function(dateStamp) {
  //createTimeInEvent.call(employeeObj, dateStamp)
  let [day, time] = dateStamp.split(" ")
  let newEvent = {}
    newEvent.type = "TimeIn"
    newEvent.hour = parseInt(time)
    newEvent.date = day

    this.timeInEvents.push(newEvent)
  return this
}

//createTimeInEvent.call(employeeObj, dateStamp)
function createTimeOutEvent(dateStamp) {
    //create a timeOut event
  let timeOut = createEvent(dateStamp, "TimeOut")
    //add the timeOut event to employee's record
  this.timeOutEvents.push(timeOut)
  return this
}

function hoursWorkedOnDate(dateStr) {
  const {timeInEvents, timeOutEvents} = this
  let start = timeInEvents.find(inEvent => inEvent.date === dateStr)
  let end = timeOutEvents.find(outEvent => outEvent.date === dateStr)

  let hoursWorked = (end.hour - start.hour) / 100
  debugger
  return hoursWorked;
}

function wagesEarnedOnDate(dateStr) {
  const hours = hoursWorkedOnDate.call(this, dateStr)
  let payOwed = hours * this.payPerHour
  return payOwed;
}

function findEmployeebyFirstName(employeesArr, name) {
  let matchFound = employeesArr.find(employee => employee.firstName === name)
  return matchFound;
}

// function findEmployeeByFirstName(employeeObjsArr, firstNameStr) {
//   let matchFound = employeeObjsArr.find(employee => employee.firstName === firstNameStr)
//   return matchFound
//   // if (matchFound) {return employeeObj} else { undefined }
// }

function calculatePayroll(employeesArr) {
  let allWagesOwed = 0

  employeesArr.forEach(employee => {
    allWagesOwed += allWagesFor.call(employee)
  })

  // employeesArr.reduce()

  return allWagesOwed;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// function mo() {
//   let moe = createEmployeeRecord(["moe", "sizlak", "barkeep", 2])
//   // createTimeInEvent(mo, "2015-02-28 1400")
//   // createTimeOutEvent(mo, "2015-02-28 1700")
//   // createTimeInEvent(mo, "2011-11-11 0800")
//   // createTimeOutEvent(mo, "2011-11-11 1600")
//   // createTimeInEvent(mo, "1944-03-15 0900")
//   // createTimeOutEvent(mo, "1944-03-15 1100")
//   return moe;
// }



let mo = createEmployeeRecord(["moe", "sizlak", "barkeep", 2])
document.addEventListener("DOMContentLoaded", () => {

  console.log(mo)

})
