import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const { initialName, initialType, initialDescription, initialSkill1, initialSkill2, initialSkill3, onSubmitProp } = props;
    const {nameError, typeError, descriptionError} = props


    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    const [description, setDescription] = useState(initialDescription);
    const [skill1, setSkill1] = useState(initialSkill1);
    const [skill2, setSkill2] = useState(initialSkill2);
    const [skill3, setSkill3] = useState(initialSkill3);


    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, type, description, skill1, skill2, skill3});
    }
        
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Pet Name:</label><br />
                    <input 
                        type="text" 
                        name="name" value={name} 
                        onChange={(e) => { setName(e.target.value) }} />
                        {nameError}
                </p>
                <p>
                    <label>Pet Type:</label><br />
                    <input 
                        type="text" 
                        name="type" value={type} 
                        onChange={(e) => { setType(e.target.value) }} />
                        {typeError}
                </p>
                <p>
                    <label>Pet Description:</label><br />
                    <input 
                        type="text" 
                        name="description" value={description} 
                        onChange={(e) => { setDescription(e.target.value) }} />
                        {descriptionError}
                </p>
                <p>
                    <label>Skill 1:</label><br />
                    <input 
                        type="text" 
                        name="skill1" value={skill1} 
                        onChange={(e) => { setSkill1(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 2:</label><br />
                    <input 
                        type="text" 
                        name="skill2" value={skill2} 
                        onChange={(e) => { setSkill2(e.target.value) }} />
                </p>
                <p>
                    <label>Skill 3:</label><br />
                    <input 
                        type="text" 
                        name="skill3" value={skill3} 
                        onChange={(e) => { setSkill3(e.target.value) }} />
                </p>
                <input type="submit" value="Add Pet"/>
            </form>
        </div>
    )
}