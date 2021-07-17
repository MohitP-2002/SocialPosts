import React,{useState} from 'react';

import Popup from './popup'

const Signup = ()=>{
   const [userReg, setUserReg] = useState({
        username:"",
        email:"",
        password:"",
        cpassword:""
    });
 const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUserReg({...userReg, [name] : value})
     }
     const [record, setRecords] = useState([])
     const handleSubmit = (e) =>{
         e.preventDefault(); 

        const newUser = {...userReg, id:new Date().getTime().toString()}
         console.log(record);
         setRecords([...record, newUser ])
         console.log(record)
         setUserReg({ username:"",
         email:"",
         password:"",
         cpassword:""});
         alert('Account has been created successfully');
     }
    return(
        <div class="signup-form" >
    <form action="/examples/actions/confirmation.php" method="post" class="form-horizontal" onSubmit={handleSubmit} >
      	<div class="row">
        	<div class="col-8 offset-4">
				<h2>Sign Up</h2>
			</div>	
      	</div>			
        <div class="form-group row">
			<label class="col-form-label col-4">Username</label>
			<div class="col-8">
                <input type="text" autocomplete="off" onChange={handleInput} class="form-control" name="username" required="required" id="username" value={userReg.username}/>
            </div>        	
        </div>
		<div class="form-group row">
			<label class="col-form-label col-4">Email Address</label>
			<div class="col-8">
                <input type="email"  autocomplete="off" onChange={handleInput}  class="form-control" name="email" required="required" id="email" value={userReg.email}/>
            </div>        	
        </div>
		<div class="form-group row">
			<label class="col-form-label col-4">Password</label>
			<div class="col-8">
                <input type="password"  autocomplete="off" onChange={handleInput} class="form-control" name="password" required="required" id="password" value={userReg.password}/>
            </div>        	
        </div>
		<div class="form-group row">
			<label class="col-form-label col-4">Confirm Password</label>
			<div class="col-8">
                <input type="password" autocomplete="off" onChange={handleInput} class="form-control" name="cpassword" required="required" id="cpassword" value={userReg.cpassword}/>
            </div>        	
        </div>
		<div class="form-group row">
			<div class="col-8 offset-4">
	
				<button type="submit" class="btn btn-primary btn-lg" >Sign Up</button>
			</div>  
		</div>		      
    </form>
    {/*<Popup trigger={buttonPop} setTrigger={setButPop}>
     <h2>“Account has
been created successfully”</h2>
    </Popup>*/}
</div>
    )
}
export default Signup;