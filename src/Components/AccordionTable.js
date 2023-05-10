// import { studentsData } from "../data/data";
// import Table from "react-bootstrap/Table";

// function AccordionTable() {
//   return (
//     <div className="AccordionTable">
//       <Table striped bordered hover size="sm">
//         <thead>
//           <tr>
//             <th>Codewars:</th>
//             <th>Scores</th>
//             <th>Certifications</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <div>
//               <td>Current Total: studentsData.codewars.current["total"]</td>
//             </div>
//             <div>
//               <td>
//                 Assignments: studentsData.cohort.scores["assignments"] * 100
//               </td>
//             </div>
//             <div>
//               <td>Resume: studentsData.certifications["resume"]</td>
//             </div>
//           </tr>
//           <tr>
//             <div>
//               <td>Last Week: {studentsData.codewars.current.lastWeek}</td>
//             </div>
//             <div>
//               <td>Projects: {studentsData.cohort.scores.projects * 100}%</td>
//             </div>
//             <div>
//               <td>LinkedIn: {studentsData.certifications.linkedin}</td>
//             </div>
//           </tr>
//           <tr>
//             <div>
//               <td>Goal: {studentsData.codewars.goal.total}</td>
//             </div>
//             <div>
//               <td>
//                 Assessments: {studentsData.cohort.scores.assessments * 100}%
//               </td>
//             </div>
//             <div>
//               <td>
//                 Mock Interview: {studentsData.certifications.mockInterview}
//               </td>
//             </div>
//           </tr>
//           <tr>
//             <div>
//               <td>
//                 Percent of Goal Achieved:{" "}
//                 {(studentsData.codewars.current.total /
//                   studentsData.codewars.goal.total) *
//                   100}
//                 %
//               </td>
//             </div>
//             <td> </td>
//             <td>GitHub: {studentsData.certifications.github}</td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default AccordionTable;
