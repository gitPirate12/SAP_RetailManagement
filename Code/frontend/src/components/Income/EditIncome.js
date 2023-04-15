import React from 'react'

function EditIncome() {
  
  
  
  
  
  return (
    <FormStyled onSubmit={handleSubmit}>
             
    {error && <p className='error'>{error}</p>}
    <div className="input-control">
        <input
            type="text"
            value={title}
            name={'title'}
            placeholder="Income Title"
            onChange={handleInput('title')}
        />                   
    </div>
    <div className="input-control">
        <input 
            type="text"
            value={amount}
            name={'amount'}
            placeholder={"Income Amount"}
            onChange={handleInput('amount')}
        />                    
    </div>

    <div className="input-control">
        <DatePicker
        id='date'
        placeholderText="Enter A Date"
        selected={date}
        dateFormat="dd/MM/yyyy"
        onChange={(date) => {
            setInputState({...inputState, date: date})
        }}
        />
    </div>
    <div className="selects input-control">
        <select required value={category} name='category' id='category' onChange={handleInput('category')}>
            <option value="" disabled>Select Category</option>
            <option value="receivables">Receivable</option>
            <option value="refunds">Refund</option>
            <option value="capital">Capital Injection</option>
            <option value="loan">Loan</option>
            <option value="other">Other</option>
        </select>
    </div>
    <div className="selects input-control">
    <select required value={type} name='type' id='type' onChange={handleInput('type')}>
        <option value="" disabled>Select Type</option>
        <option value="Cash">Cash</option>
        <option value="Credit">Credit</option>
    </select>
    </div>
    <div className="input-control">
        <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols={30} rows={4} onChange={handleInput('description')}></textarea>
    </div>
    <div className="submit-btn">
        <Button 
        icon={plus}
        name={'Add Income'}
        bPad={'.8rem 1.6rem'}
        bRad={'30px'}
        color={'#0B2447'}
        ></Button>
    </div>

</FormStyled>
  )
}

export default EditIncome
