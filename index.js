/* Your Code Here */

let createEmployeeRecord = (employeeArray) => {
  return {
    firstName: employeeArray[0],
    familyName: employeeArray[1],
    title: employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

const createEmployees = (employeesArray) => {
  return employeesArray.map(employeeArray => {
    return createEmployeeRecord(employeeArray);
  });
}

const createEmployeeRecords = (employeesArray) => {
  return employeesArray.map(employeeArray => {
    return createEmployeeRecord(employeeArray);
  });
}

const createPunch = function(inOrOut, dateStamp) {
  return {
    type: inOrOut,
    hour: Number(dateStamp.slice(-4)),
    date: dateStamp.slice(0, -5)
  }
}

const createTimeInEvent = function(dateStamp) {
  const punch = createPunch("TimeIn", dateStamp);
  this.timeInEvents.push(punch);
  return this;
}

const createTimeOutEvent = function(dateStamp) {
  const punch = createPunch("TimeOut", dateStamp);
  this.timeOutEvents.push(punch);
  return this;
}

const hoursWorkedOnDate = function(date) {
  const timeIn = this.timeInEvents.find(punch =>{
    return punch.date === date;
  }).hour;

  const timeOut = this.timeOutEvents.find(punch =>{
    return punch.date === date;
  }).hour;

  return (timeOut - timeIn)/100;
}

const wagesEarnedOnDate = function(date) {
  const hours = hoursWorkedOnDate.call(this, date);
  const rate = this.payPerHour;
  return hours * rate;
}

const findEmployeebyFirstName = function(srcArray, firstName) {
  return srcArray.find(employee => {
    return employee.firstName === firstName;
  })
}

const calculatePayroll = function(employees) {
  let totalWages = []
  for(const employee of employees){
    // console.log(employee)
    const allWages = allWagesFor.call(employee)
    totalWages.push(allWages)
  }
  return totalWages.reduce((memo, current) => {
    return memo + current
  })
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
