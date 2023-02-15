function Employee(props)
{
        return (
            <>
                <h3>Employee {props.name}</h3>
                <p>{props.role ? props.role : 'No Role'}</p> 
                {props.role ? 
                    (<p class="role"> {props.role}</p>) 
                    :
                    (<p class="norole"> NO ROLE</p>)
                } 
            </>
            
        );
}

export default Employee