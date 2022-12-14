// import React, { useEffect } from 'react';
// import { Box, Text } from '@chakra-ui/react';
// import { getRunnFetch } from '../utils/getRunnFetch';

// const getPeopleData = async () => {
//   try {
//     const people = await getRunnFetch(`people`, {
//       include_projects: true,
//       include_placeholders: true,
//     });
//     return people;
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// const getActualsData = async () => {
//   const date = new Date();
//   const dd = String(date.getDate()).padStart(2, '0');
//   const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
//   const yyyy = date.getFullYear();
//   const firstDay = `${yyyy}-${mm}-${dd}`;

//   try {
//     const actuals = await getRunnFetch(`actuals?start=${firstDay}`);
//     return actuals;
//   } catch (error) {
//     console.error(error.message);
//   }
// };
// const getAssignmentsData = async () => {
//   try {
//     const assignment = await getRunnFetch(`assignments`);
//     return assignment;
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// export const Runn = () => {
//   const [email, setEmail] = React.useState('');
//   const [currentUser, setCurrentUser] = React.useState();
//   const [people, setPeople] = React.useState();
//   const [personId, setPersonId] = React.useState();
//   const [actuals, setActuals] = React.useState();
//   const [assignments, setAssignments] = React.useState();

//   chrome.identity.getProfileUserInfo({ accountStatus: 'ANY' }, function (info) {
//     if (info.email) {
//       setEmail(info.email);
//     }
//   });

//   const getData = async () => {
//     const peopleData = await getPeopleData();
//     setPeople(peopleData);
//     const actualsData = await getActualsData();
//     setActuals(actualsData);
//     const assignmentsData = await getAssignmentsData();
//     setAssignments(assignmentsData);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     if (people && email && currentUser) {
//       setCurrentUser(people.find((person) => person.email === email));
//     }
//   }, [people, email, currentUser]);

//   //   useEffect(() => {
//   //     if (currentUser) {
//   //       console.log(currentUser.projects.name);
//   //       //  setPersonId(currentUser.projects.name);
//   //     }
//   //   }, [people, email, currentUser]);

//   return (
//     <Box>
//       <Text>
//         <a href={'https://app.runn.io/'} target="_blank" rel="noreferrer">
//           Its Friday 😊 Don't forget to fill in your timesheet! 📝
//         </a>
//       </Text>

//       <Text>
//         <a href={'https://app.runn.io/'} target="_blank" rel="noreferrer">
//           You still need to fill in your timesheet! 🚨
//         </a>
//       </Text>
//     </Box>
//   );
// };
