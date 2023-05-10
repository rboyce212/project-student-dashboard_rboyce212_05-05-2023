/* import "../App.css";

export const filteredStartDates = (studentsData) => {
  let unique_values = [
    ...new Set(studentsData.map((item) => item.cohort.cohortStartDate))
  ];
  return unique_values;
};
console.log(filteredStartDates());



export const Filters = () => {
  let filteredStartDates = (studentsData) => {
    let uniqueDates = studentsData
      .map((item) => item.cohort.cohortStartDate)
      .filter(
        (value, index, current_value) => current_value.indexOf(value) === index
      );
    return uniqueDates;
  };
console.log(filteredStartDates(studentsData));



import { studentsData } from "../data/data";

let cohortStartDate = "studentsData.cohort.cohortStartDate";
const key = cohortStartDate;
const filteredStartDatesByID = [
  ...new Map(studentsData.map((item) => [item[key], item])).values()
];
console.log(filteredStartDatesByID);




  return filteredStartDatesByID;
};
*/
