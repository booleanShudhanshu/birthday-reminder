import React,{useState} from "react";

const List = ({people}) => {
    const [wish, setWish] = useState(false)

    const {name,image,dob} = people;
    const calculateAge = (dob) => {
        let today = new Date();
        let birthDate = new Date(dob);
        var current_age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if(m < 0 || ( m === 0 && today.getDate() < birthDate.getDate())) {
            current_age = current_age-1;
        }
        return current_age;
    }
    const age = calculateAge(dob);
    
    return (
        
        <>
            <div className="m-4 p-3 person">
                <img src={image} alt="name" />
                <div>
                <h5>{name}</h5>
                <p>{age} years</p>
                <p>DOB: {dob}</p>
                <button className={`remove ${wish? 'btn-success': ''}`} onClick={()=>setWish(true)}>{wish ? "Wished" : "Wish"}</button>
                </div>
            </div>
        </>
    )
}

export default List;