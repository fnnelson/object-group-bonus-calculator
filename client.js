// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ', employees);



// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//

// Write a declared function that takes in one Employee object (as an argument to the function), and return a new object with the following properties. Note these properties are different than the ones you start with!

/** 
 * The Bonus Calculation Function
Write a declared function that takes in one Employee object (as an argument to the function), and return a new object with the following properties. Note these properties are different than the ones you start with!

The name property should contain the employee's name.
The bonusPercentage property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
The totalCompensation property should be the adjusted annual compensation (base annual + bonus)
The totalBonus should be the employee's total bonus rounded to the nearest dollar.
 */

/**
 * Individual Bonus Rules
Those who have a rating of a 2 or below should not receive a bonus.
Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
No bonus can be above 13% or below 0% total.
 */

let atticus = employees[0];
// console.log(atticus)



function calculateIndividualEmployeeBonus(employee) {
  // your logic here
  console.log("in the function");

  let bonusPercentage = 0;

  if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  } else if (employee.reviewRating == 3) {
    bonusPercentage = 4;
  } else if (employee.reviewRating == 4) {
    bonusPercentage = 6;
  } else if (employee.reviewRating == 5) {
    bonusPercentage = 1;
  }

  if (employee.employeeNumber.length == 4) {
    bonusPercentage += 5;
    // console.log('should be: 0.09:', bonusPercentage);
  }

  if (employee.annualSalary > 65000) {
    bonusPercentage -= 1;
    // console.log(bonusPercentage);
  }

  if (bonusPercentage > 13) {
    bonusPercentage = 13;
  } else if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }
  console.log(bonusPercentage);

  const bonusAsDecimal = bonusPercentage / 100;


  employee.bonusPercentage = bonusAsDecimal;

  let totalBonus = bonusAsDecimal * employee.annualSalary;
  employee.totalBonus = totalBonus;

  let totalCompensation = (1 * employee.annualSalary) + (totalBonus);
  employee.totalCompensation = totalCompensation;

  let newEmployee = {
    name: employee.name,
    bonusPercentage: bonusAsDecimal,
    totalCompensation: totalCompensation,
    totalBonus: Math.floor(totalBonus)
  }
  // let totalCompensation = bonusPercentage 

  return newEmployee;


}

// Tester
let testingAtticus = calculateIndividualEmployeeBonus(atticus);
console.log(testingAtticus);


function calculateAllEmployeesBonuses(arrayOfEmployees) {
  // your logic here
  console.log("in the function");
  let updatedArrayOfEmployees = [];
  for (let person of arrayOfEmployees) {

    let bonusPercentage = 0;

    if (person.reviewRating <= 2) {
      bonusPercentage = 0;
    } else if (person.reviewRating == 3) {
      bonusPercentage = 4;
    } else if (person.reviewRating == 4) {
      bonusPercentage = 6;
    } else if (person.reviewRating == 5) {
      bonusPercentage = 1;
    }

    if (person.employeeNumber.length == 4) {
      bonusPercentage += 5;
      // console.log('should be: 0.09:', bonusPercentage);
    }

    if (person.annualSalary > 65000) {
      bonusPercentage -= 1;
      // console.log(bonusPercentage);
    }

    if (bonusPercentage > 13) {
      bonusPercentage = 13;
    } else if (bonusPercentage < 0) {
      bonusPercentage = 0;
    }
    console.log(bonusPercentage);

    const bonusAsDecimal = bonusPercentage / 100;

    person.bonusPercentage = bonusAsDecimal;

    let totalBonus = bonusAsDecimal * person.annualSalary;
    person.totalBonus = totalBonus;

    let totalCompensation = (1 * person.annualSalary) + (totalBonus);
    person.totalCompensation = totalCompensation;

    let newObject = {
      name: person.name,
      bonusPercentage: bonusAsDecimal,
      totalCompensation: totalCompensation,
      totalBonus: Math.floor(totalBonus)
    }
    updatedArrayOfEmployees.push(newObject);
  }
  return updatedArrayOfEmployees;
}

// Tester
let testingAllEmployees = calculateAllEmployeesBonuses(employees);
console.log(testingAllEmployees);