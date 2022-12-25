import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home(){
    const serverHost = 'http://localhost:5000/';
    const [person, setPerson] = useState();
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [username, setUsername] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();

    useEffect(() => {
        axios
        .get(
            serverHost + 'API/g/person'
        )
        .then(
            response => {
                setPerson(response.data);
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )
    }, []);

    const handleChangeFirstName = (e) => setFirstName(e.target.value);
    const handleChangeLastName = (e) => setLastName(e.target.value);
    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangeCity = (e) => setCity(e.target.value);
    const handleChangeState = (e) => setState(e.target.value);
    
    const handlePost = (event) => {
        event.preventDefault();
        axios
        .post(
            serverHost + 'API/p/person', 
            {
                firstname:firstname.charAt(0).toUpperCase() + firstname.slice(1),
                lastname:lastname.charAt(0).toUpperCase() + lastname.slice(1),
                username:username.toLowerCase(),
                city:city.charAt(0).toUpperCase() + city.slice(1),
                state:state.charAt(0).toUpperCase() + state.slice(1),
            }
        )
        .then(
            window.location.reload()
        )
        .catch(
            error => {
                console.log(error);
            }
        )
    }

    const handleDelete = (id, event) => {
        event.preventDefault();
        axios
            .delete(
                serverHost + `API/d/person/${id}`
            )
            .then(
                window.location.reload()
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
                <form onSubmit={(event)=>handlePost(event)} className="needs-validation" noValidate>
                    <div className="form-row mt-5">
                        <div className="col-10 mb-3">
                            <label htmlFor="firstname">First Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="firstname" 
                                id="firstname" 
                                placeholder="First Name" 
                                onChange={handleChangeFirstName}
                                required />
                        </div>
                        <div className="col-10 mb-3">
                            <label htmlFor="lastname">Last Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="lastname" 
                                id="lastname" 
                                placeholder="Last Name"
                                onChange={handleChangeLastName}
                                required />
                        </div>
                        <div className="col-10 mb-3">
                            <label htmlFor="username">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="@">@</span>
                                </div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="username" 
                                    id="username" 
                                    placeholder="Username" 
                                    aria-describedby="@"
                                    onChange={handleChangeUsername}
                                    required />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-10 mb-3">
                            <label htmlFor="city">City</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            name="city" 
                            id="city" 
                            placeholder="City"
                            onChange={handleChangeCity} 
                            required />
                        </div>
                        <div className="col-10 mb-3">
                            <label htmlFor="state">State</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            name="state" 
                            id="state" 
                            placeholder="State"
                            onChange={handleChangeState}
                            required />
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit Form</button>
                </form>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table text-center">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    person && person.map((pers, i)=>{
                                      return(
                                        <tr key={i}>  
                                            <td>{pers.firstname}</td>    
                                            <td>{pers.lastname}</td>    
                                            <td>{pers.username}</td>    
                                            <td>{pers.city}</td>    
                                            <td>{pers.state}</td>    
                                            <td>
                                                <a 
                                                    href={`e/${pers.id}`}
                                                    className='btn btn-primary'
                                                >Edit</a>
                                                <button 
                                                    onClick={
                                                        event => {
                                                            handleDelete(pers.id, event)
                                                        }
                                                    }
                                                    className='btn btn-danger'
                                                    >Delete</button>
                                            </td>    
                                        </tr>
                                      );  
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}