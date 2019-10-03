/* Your Code Here */

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

function createEmployeeRecord(empArray) {
  let record = {
    firstName: empArray[0],
    familyName: empArray[1],
    title: empArray[2],
    payPerHour: empArray[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return record
}

function createEmployeeRecords(arrayOfEmpArrays) {
  let empRecords = arrayOfEmpArrays.map(empArray => createEmployeeRecord(empArray))
  return empRecords
}

function createTimeInEvent(dateStamp) {
  let timeInRecord = {
    type: "TimeIn",
    hour: parseInt(dateStamp.split(" ")[1], 10),
    date: dateStamp.split(" ")[0]
  }
  this.timeInEvents.push(timeInRecord)
  return this
}

function createTimeOutEvent(dateStamp) {
  let timeOutRecord = {
    type: "TimeOut",
    hour: parseInt(dateStamp.split(" ")[1], 10),
    date: dateStamp.split(" ")[0]
  }
  this.timeOutEvents.push(timeOutRecord)
  return this
}

function hoursWorkedOnDate(date) {
  let parsedDate = date.split(" ")[0]
  let timeInRec = this.timeInEvents.find((timeInRecord) => timeInRecord.date === parsedDate)
  let timeOutRec = this.timeOutEvents.find((timeOutRecord) => timeOutRecord.date === parsedDate)
  return (timeOutRec.hour - timeInRec.hour)/100
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeebyFirstName(arrayOfEmpRecs, firstName) {
  return arrayOfEmpRecs.find(empRec => empRec.firstName === firstName)
}

function calculatePayroll(arrayOfEmpRecs) {
  let totalPayRoll = arrayOfEmpRecs.reduce(function(memo, emp) {
    return memo + allWagesFor.call(emp)
  },0)
  return totalPayRoll
}
