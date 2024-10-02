
import './Usercard.css'
import PropTypes from "prop-types"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const userData=[
    {
        name:"Deepika",
        city:"Chennai",
        skills: ["C", "C++", "Python", "Certificate in DAA", "HTML"],
        online: false,
        desig:"Web Developer",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oOF6CrDOU6SLZyGEeGiXrk4ec2XpwBUbjw&s"

    },
   
    {
        name:"Sharanya",
        city:"Coimbatore",
        skills: ["C", "C++", "Python", "Certificate in DAA", "HTML"],
        online: true,
        desig:"Fulllstack",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oOF6CrDOU6SLZyGEeGiXrk4ec2XpwBUbjw&s"

    },
    {
        name:"Sumathi",
        city:"Vellore",
        skills: ["C", "C++", "Python", "Certificate in DAA", "HTML"],
        online: true,
        desig:"Backend Developer",
        //profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oOF6CrDOU6SLZyGEeGiXrk4ec2XpwBUbjw&s"
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJdauKmK3JP7AREOlnMCR8e6f5i1-Ci0cNkA&s"

    }

]
function User(props)
{
    return(
   
        <div className="card-container">
         <span className= {props.online? "pro online":"pro offline"}>{props.online? "Online": "Offline"}</span>
         <img src={props.profile} alt="user"/>
         <h3>{props.name}</h3>
         <h3>{props.city}</h3>
         <p>{props.desig}</p>
         <div>
         <Stack spacing={2} direction="row">
     
      <Button variant="contained" style={{padding:"10px 25px"}}>Messages</Button>
      <Button variant="contained"  style={{padding:"10px 25px"}}>Following</Button>
      
    </Stack>
            
         </div>
         <div className="skills">
             <h4>SKILLS</h4>
             <ul>
                 {props.skills.map((value,index)=>(
                      <li key={index}>{value}</li>
                 ))}
             </ul>
         </div>
        </div>
     
    )
}

const UserCard = () => {
  return (
    <>
    <h1 style={{textAlign :'center', 
      fontSize:'3rem', 
      color:'#6C63FF', 
      textShadow:'2px 2px 5px rgba(0, 0, 0, 0.3)',
      fontFamily: 'cursive',
      marginBottom: '40px'}}>Profile Cards</h1>
  <div className="root-container">
  <div className="row">
   {userData.map((value,index)=>(
    <User key={index} name={value.name} city={value.city} skills={value.skills} online={value.online} profile={value.profile} 
    desig={value.desig} />
   
  ))}
  </div>
  </div>
  </>
);
}
/*
<User name="S.S Deepika" city="Cuddalore" skill={["HTML","CSS","REACT","JAVA","UI/UX"]} 
  status={false} profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJdauKmK3JP7AREOlnMCR8e6f5i1-Ci0cNkA&s"/>*/


  User.propType = {
    name:PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired
  }
export default UserCard