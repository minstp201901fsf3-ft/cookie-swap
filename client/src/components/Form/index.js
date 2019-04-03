import React from "react";
import "./style.css";

export function Input(props) {
  return (
    <div className="row">
        <div className="input-field col s6">
             <input type="text" 
             {...props}
            //  value={props.value} onChange={props.onChange} 
            />
             <label htmlFor={props.id}>{props.name}</label>
        </div>
    </div>
  );
}

export function EmailInput(props) {
  return (
    <div className="row">
        <div className="input-field col s6">
             <input type="email" className="validate"
             {...props}
            />
             <label htmlFor={props.id}>{props.name}</label>
             <span className="helper-text" data-error="Please enter a Valid Email Id" data-success=""></span>
        </div>
    </div>
  );
}

export function PasswordInput(props) {
    return (
      <div className="row">
          <div className="input-field col s6">
               <input type="password" 
               {...props}
              //  value={props.value} onChange={props.onChange} 
              />
               <label htmlFor={props.id}>{props.name}</label>
          </div>
      </div>
    );
  }
   

