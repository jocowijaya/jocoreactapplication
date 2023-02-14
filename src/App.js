import './App.css';
import Employee from './component/Employee';
import { useState } from 'react';

function App() 
{
  //let role= "CASUAL"; // assign value to role 
  const showEmployees = true; // do the check fundction to display info
  const [role, setRole] = useState('Casual'); // set the useState & parse the value 
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

                <Employee name='Joco' role='Intern' />
                <Employee name='Dion' role='FT Staff' />
                <Employee name='Abby'  role={role}/>
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
