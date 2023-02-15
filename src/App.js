import './Index.css'; // import app.css
import Employee from './component/Employee'; //import our component file form component folder - employee.js
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
                <div className='flex flex-wrap justify-center'>
                    <Employee name='Joco' role='Intern' img="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg" />
                    <Employee name='Dion' img="https://images.pexels.com/photos/7402883/pexels-photo-7402883.jpeg" />
                    <Employee name='Abby'  role={role} img="https://images.pexels.com/photos/7897404/pexels-photo-7897404.jpeg"/> 
                    <Employee name='Steve' role='Intern' img="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg" />
                    <Employee name='Ella'  img="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg"/>
                    <Employee name='Febe'  role={role} img="https://images.pexels.com/photos/4350178/pexels-photo-4350178.jpeg"/> 
                    <Employee name='Ikasu' role='Intern' img="https://images.pexels.com/photos/7897404/pexels-photo-7897404.jpeg"/>
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
