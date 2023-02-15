import './Index.css'; // import app.css
import Employee from './component/Employee'; //import our component file form component folder - employee.js
import { useState } from 'react';

function App() 
{
  //let role= "CASUAL"; // assign value to role 
  const showEmployees = true; // do the check fundction to display info
  const [role, setRole] = useState('Casual'); // set the useState & parse the value 
  return (
    <div className="App bg-amber-400">
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
                <Employee name='Dion'  />
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
