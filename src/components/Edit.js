import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit(){
    const serverHost = 'http://localhost:5000/';
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [username, setUsername] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(
            serverHost + `API/g/person/${id}`
        )
        .then(
            response => {
                setFirstName(response.data[0].firstname);
                setLastName(response.data[0].lastname);
                setUsername(response.data[0].username.split("@")[1]);
                setCity(response.data[0].city);
                setState(response.data[0].state);
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )
    }, []);

    const handleChangeFirstName = event => setFirstName(event.target.value);
    const handleChangeLastName = event => setLastName(event.target.value);
    const handleChangeUsername = event => setUsername(event.target.value);
    const handleChangeCity = event => setCity(event.target.value);
    const handleChangeState = event => setState(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        axios
        .post(
            serverHost + `API/e/person/${id}`, {
                firstname:firstname.charAt(0).toUpperCase() + firstname.slice(1),
                lastname:lastname.charAt(0).toUpperCase() + lastname.slice(1),
                username:username.toLowerCase(),
                city:city.charAt(0).toUpperCase() + city.slice(1),
                state:state.charAt(0).toUpperCase() + state.slice(1),
            }
        )
        .then(
            response => {
                navigate('/');
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )
    }

    return(
        <div className="d-flex flex-row p-5">
            <div className="container">
                <form onSubmit={event=>handleSubmit(event)} className="needs-validation" noValidate>
                    <div className="form-row mt-5">
                        <div className="col mb-3">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" className="form-control" name="firstname" id="firstname" placeholder="First Name" onChange={handleChangeFirstName} value={firstname} required/>
                        </div>
                        <div className="col mb-3">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" className="form-control" name="lastname" id="lastname" placeholder="Last Name" onChange={handleChangeLastName} value={lastname} required/>
                        </div>
                        <div className="col mb-3">
                            <label htmlFor="username">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="@">@</span>
                                </div>
                                <input type="text" className="form-control" name="username" id="username" onChange={handleChangeUsername} placeholder="Username" value={username} aria-describedby="@" required/>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col mb-3">
                            <label htmlFor="city">City</label>
                            <input type="text" className="form-control" name="city" id="city" placeholder="City" onChange={handleChangeCity} value={city} required/>
                        </div>
                        <div className="col mb-3">
                            <label htmlFor="state">State</label>
                            <input type="text" className="form-control" name="state" id="state" placeholder="State" onChange={handleChangeState} value={state} required/>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit form</button>
                    <button onClick={()=>navigate('/')} className="btn btn-danger">Back</button>
                </form>
            </div>
        </div>
    );
}