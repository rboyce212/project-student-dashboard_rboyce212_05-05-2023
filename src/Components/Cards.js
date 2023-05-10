import React from "react";
import "../App.css";
import { studentsData } from "../data/data";

// const name =
//   studentsData.names.preferredName +
//   studentsData.names.middleName +
//   studentsData.names.surname;
// function fullName(name) {
//   let splitName = name.split(" ");
//   if (splitName.length >= 3) {
//     for (let i = 1; i < splitName.length - 1; i++) {
//       splitName[i] = splitName[i].charAt(0) + ".";
//     }
//   }
//   return splitName.join(" ");
// }
// console.log(fullName(name));

export const Cards = () => {
  return (
    <>
      <div className="cards-container">
        {studentsData.map((data, key) => {
          return (
            <div key={key}>
              <img src={data.profilePhoto} alt={data.names.preferredName} />
              {data.names.preferredName +
                " " +
                data.names.middleName +
                " " +
                data.names.surname}
              <br />
              {data.username}
              <br />
              {data.dob}
            </div>
          );
        })}
      </div>
    </>
  );
};
