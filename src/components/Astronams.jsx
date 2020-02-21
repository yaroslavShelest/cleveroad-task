import React from "react";
import {Table  } from "react-bootstrap";

const Astronams = ({astronams}) => {
     if( !astronams){
          return null
     }
  return (
    <>
     <h1>Астронавты на МКС:</h1>
           <Table striped bordered hover>
           <thead>
             <tr>
               <th>#</th>
               <th>Имя астронавта</th>
               <th>ISS</th>
             </tr>
           </thead>
           { astronams.map( one  => ( <tbody key={one.name + 'key'}>
             <tr>
               <td> <i className="fas fa-user-astronaut"></i> </td>
               <td>{one.name}</td>
           <td>{one.craft}</td>
             </tr>
           </tbody>
                ))
               }
         </Table>
     <b>Всего на МКС сейчас находится {astronams.length} человека .</b>
    </>
  );
};

export default Astronams;
