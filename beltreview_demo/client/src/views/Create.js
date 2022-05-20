import React, {useState} from "react";


const Create = (props) => {
    const [form, setForm] = useState({
        name:"",
        minutes:null,
        servings: null,
        calories: null,
        category: "", 
        imgURL: "",
        steps:[""],
        ingredients:[
            {amount: null, name:"", measurement:""}
        ]
    })
    const onAddStep = (event)=>{
        event.preventDefault();
        console.log("click add step");
        const copyForm = {...form};
        copyForm.steps.push("")
        setForm(copyForm);
    }

    const onRemoveStep = (event, i)=>{
        event.preventDefault();
        copyForm.steps.splice(i,1)
        event.preventDefault()
        setForm(copyForm)
    }

    const onChangeStep = (event, i)=>{
        console.log(event.target.value)
        
    }

    return (
        <div>
           
           <form className="d-block w-75 mx-auto">
               <div className="form-group d-block w-50 mx-auto">
                   <input type="text" name="name" className="form-control" placeholder="name of dish" />
               </div>
               
               <div className="row my-1 w-75 mx-auto">
                   <div className="col">
                       <input type="number" name="minutes" className="form-control"/>
                   </div>
                    <div className="col">
                       <input type="number" name="servings" className="form-control"/>
                   </div>
                    <div className="col">
                       <input type="number" name="calories" className="form-control"/>
                   </div>
               </div>

                <div className="row my-1 w-75 mx-auto">
                   <div className="col">
                       <input type="text" name="category" className="form-control"/>
                   </div>
                    <div className="col">
                       <input type="text" name="servings" className="form-control"/>
                   </div>
               </div>
               
               <h2>ingredients:</h2>
               <h2>steps:</h2>
               {
                   form.steps.map((step, i)=>{
                       return <div className="input group my-1 mx-auto w-75">
                                <span key={i}> Step {i+1}</span>
                                <textarea onChange={(event)=>onChangeStep(event, i)} value={step} className="form-control" aria-label="With textarea"></textarea>
                                <button className="btn btn-sm btn-danger" onClick={(event)=>onRemoveStep(event, i)}>x</button>

                       </div>
                   })
               }
           </form>
           
           name

            minutes, servings, calories

            category, imgURL

            the other complicated stuff

        </div>
    )

}