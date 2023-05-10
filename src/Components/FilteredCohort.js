import { useState } from "react";
import { studentsData } from "../data/data";
import "../App.css";

// Defines a state variable and uses the useState hook to set the initial value to the studentsData array.
export const FilteredCohort = () => {
  const [filteredStudentsData, setFilteredStudentsData] =
    useState(studentsData);

  // The filterByCohort function filters the studentsData array returning only the students with the matching cohortCodes property.
  const filterByCohort = (selectedCohort) => {
    setFilteredStudentsData(
      studentsData.filter(
        ({ cohort: { cohortCode } }) => cohortCode === selectedCohort
      )
    );
  };

  // Sorting studentsData by cohortStartDate to get the buttons in chronological order.
  const sortedStudentsData = [...studentsData].sort(function (a, b) {
    return new Date(b.cohortStartDate) - new Date(a.cohortStartDate);
  });

  // Creates a new array that uses the map method to extract the cohort codes from the studentsData array. Then creates a new Set object from the mapped array removing any duplicates, returning only unique cohort codes.
  const uniqueCohorts = Array.from(
    new Set(
      sortedStudentsData.map(({ cohort: { cohortCode, cohortStartDate } }) => ({
        cohortCode,
        cohortStartDate
      }))
    )
  );

  const cohorts = uniqueCohorts
    .sort(function (a, b) {
      return new Date(b.cohortStartDate) - new Date(a.cohortStartDate);
    })
    .map(({ cohortCode }) => cohortCode);
  console.log("cohorts" + cohorts);
  console.log("unique" + uniqueCohorts);

  function removeDuplicates(cohorts) {
    return cohorts.filter((item, index) => cohorts.indexOf(item) === index);
  }
  const cohortButtons = removeDuplicates(cohorts);

  // This function resets the state variable setting it equal to the studentsData array, thus showing all students again.
  const showAllStudents = () => {
    setFilteredStudentsData(studentsData);
  };

  // function to format date as "Month day, year"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  // Creates a filter functioning button for all cohorts combined (All Students), followed by each of the cohort codes. Still need to arrange them chronologically and separate the season and year with a space.
  return (
    <div className="FilteredCohort">
      <button onClick={showAllStudents}>All Students</button>
      <div>
        {cohortButtons.map((cohort) => {
          return (
            <button
              key={cohort}
              value={cohort}
              onClick={(e) => filterByCohort(e.target.value)}
            >
              {cohort}
            </button>
          );
        })}
      </div>
      <ul className="profile-containers">
        {filteredStudentsData.map((studentData) => {
          const {
            profilePhoto,
            names: { preferredName, middleName, surname },
            username,
            dob,
            cohort: { cohortCode, cohortStartDate },
            id
          } = studentData;
          let middleNameAbbreviated = middleName
            ? `${middleName.charAt(0)}.`
            : "";
          return (
            <li key={id}>
              <div>
                <img className="photo" src={profilePhoto} alt="profile" />
              </div>
              <div>
                Name:{" "}
                <strong>
                  {preferredName} {middleNameAbbreviated} {surname}
                </strong>
              </div>
              <div>Email: {username}</div>
              <div>Birthday: {formatDate(dob)}</div>
              <div>
                Cohort: {cohortCode} Starts: {cohortStartDate}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
