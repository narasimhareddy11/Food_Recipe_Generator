import React from 'react';
import Select from "react-select";
import './index.css';

const FormComponent = ({ search, research, mealtype, diettype, dishtype, cuisinetype, getsubmit, mealtypeoptions, dietoptions, dishtypeoptions, cuisinetypeoptions, sortRecipes }) => {
    return (
        <form className='form-container' onSubmit={getsubmit}>
            <div className='form-group'>
                <label htmlFor='search' className='label'>Search:</label>
                <input className='form-input' type="text" id='search' placeholder='Search' value={search} onChange={research}/>
            </div>

            <div className='form-group'>
                <label htmlFor='mealtype' className='label'>Meal Type:</label>
                <Select className='select-menu' options={mealtypeoptions} onChange={mealtype} />
            </div>

            <div className='form-group'>
                <label htmlFor='diettype' className='label'>Diet Type:</label>
                <Select className='select-menu' options={dietoptions} onChange={diettype}/>
            </div>

            <div className='form-group'>
                <label htmlFor='dishtype' className='label'>Dish Type:</label>
                <Select className='select-menu' options={dishtypeoptions} onChange={dishtype}/>
            </div>

            <div className='form-group'>
                <label htmlFor='cuisinetype' className='label'>Cuisine Type:</label>
                <Select className='select-menu' options={cuisinetypeoptions} onChange={cuisinetype}/>
            </div>

            <div className='form-group'>
                <label htmlFor='sort' className='label'>Sort By:</label>
                <Select className='select-menu' options={[
                    { value: 'name', label: 'Name' },
                    { value: 'calories', label: 'Calories' }
                ]} onChange={(selectedOption) => sortRecipes(selectedOption.value)} />
            </div>

            <button className='submit-button' type='submit'>Search</button>
        </form>
    );
}

export default FormComponent;
