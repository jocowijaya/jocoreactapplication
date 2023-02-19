import './Index.css'; // import app.css
import Employee from './component/Employee'; //import our component file form component folder - employee.js
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() 
{
  //let role= "CASUAL"; // assign value to role 
  const showEmployees = true; // do the check fundction to display info
  const [role, setRole] = useState('Casual'); // set the useState & parse the value 
  const [employees, setEmployees] = useState(

    [
      {
        name: 'Joco', role: 'Intern', img:'https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg',
      },

      {
        name: 'Dion', role: 'Manager', img:'https://images.pexels.com/photos/7402883/pexels-photo-7402883.jpeg',
      },

      {
        name: 'Abby', role: 'Staff', img:'https://images.pexels.com/photos/7897404/pexels-photo-7897404.jpeg',
      },

      {
        name: 'Steve', role: 'Lawyer', img:'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg',
      },

      {
        name: 'Ella', role: 'Developer', img:'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg',
      },

      {
        name: 'Febe', role: 'Admin', img:'https://images.pexels.com/photos/4350178/pexels-photo-4350178.jpeg',
      },

    ]

  );

  return (
    <div className="App">
          {showEmployees ? 
          ( 
            <>

                <input type='text' onChange=
                  {(e) => 
                    {
                      console.log(e.target.value);
                      //role = e.target.value;
                      setRole(e.target.value); // set Role using useState
                    }
                  }
                />
                <div className='flex flex-wrap justify-center'>
                   {employees.map( (a) => {
                      console.log(uuidv4());
                      return (
                        <Employee key={uuidv4()} name={a.name} role={a.role} img={a.img}/>
                      );
                   })}
                </div>
                
            </>
          ) :

              (
                <p>You cannot see the employees</p>
              )  
          }
   
    </div>
  );
}

export default App;
