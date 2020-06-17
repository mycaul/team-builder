import React from 'react'

export default function Form(props) {
    const {
        values, 
        onInputChange,
        onSubmit
    } = props
    
    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>JOIN!!</h2>
                <button>Submit</button>
            </div>

            <div className='form-group inputs'>
                <h4>Add Some More Info</h4>
                <label>Name:&nbsp;
                    <input
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                    />
                </label>
                <label>Email:&nbsp;
                    <input 
                        id='emailInput'
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}                    
                    />
                </label>
                <label>Role:&nbsp;
                    <select 
                        name='role'
                        value={values.role}
                        onChange={onInputChange}
                    >
                        <option value=''>Job?</option>
                        <option value='FL STACK'>Full-Stack Dev</option>
                        <option value='Social Media Infleuencer'>Social Media Influencer</option>
                        <option value='UI Design'>Graphic Design</option>
                    </select>
                </label>
            </div>
        </form>
    )
}