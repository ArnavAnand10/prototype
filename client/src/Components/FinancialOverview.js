import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';



export const FinancialOverview = () => {


    const incomeDefaultValues = {
        title: "",
        amount: "",
        date: "",
    }

    const expenseDefaultValues = {
        title: "",
        amount: "",
        date: "",
    }

    const [incomeData, setIncomeData] = useState(incomeDefaultValues);
    const [expenseData, setExpenseData] = useState(expenseDefaultValues);
    const [liabilityData, setLiabilityData] = useState(expenseDefaultValues);

    function onIncomeChange(e) {
        setIncomeData({ ...incomeData, [e.target.name]: e.target.value });
    }

    function onExpenseChange(e) {
        setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
    }

    function onLiabilityChange(e) {
        setLiabilityData({ ...liabilityData, [e.target.name]: e.target.value });
    }





    return (
        <div className=" financial-overview" >
            <div className="bg-white m-8 flex flex-col gap-2 px-8 py-8 rounded-lg form-container" >
                <h1 className='text-3xl font-medium mb-4' >Income</h1>
                <TextField id="outlined-basic" onChange={(e) => {
                    onIncomeChange(e);
                }} name="title" label="Title" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => {
                    onIncomeChange(e);
                }} name="amount" label="Amount in Rs" type='number' prefix='Rs' variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => {
                    onIncomeChange(e);
                }} name="date" type='date' variant="outlined" />
                <Button onClick={() => console.log(incomeData)} sx={{
                    marginTop: "10px"
                }} variant='contained'>Save</Button>

            </div>

            <div className="bg-white m-8 flex flex-col gap-2  px-6  py-8  rounded-lg form-container" >
                <h1 className='text-3xl font-medium mb-4' >Expenses</h1>
                <TextField id="outlined-basic" onChange={(e) => {
                    onExpenseChange(e)
                }} label="Title" name="title" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => {
                    onExpenseChange(e)
                }} label="Amount in Rs"  name="amount" type='number' variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => {
                    onExpenseChange(e)
                }} type='date' name="date" variant="outlined" />
                <Button onClick={() => console.log(expenseData)} sx={{
                    marginTop: "10px"
                }} variant='contained'>Save</Button>
            </div>

            <div className="bg-white m-8 flex flex-col gap-2  px-6  py-8  rounded-lg form-container" >
                <h1 className='text-3xl font-medium mb-4' >Liabilities</h1>
                <TextField id="outlined-basic" onChange={(e) => {
                    onLiabilityChange(e)
                }} label="Title" name="title" variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => {
                    onLiabilityChange(e)
                }} label="Amount in Rs" name="amount" type='number' variant="outlined" />
                <TextField id="outlined-basic" onChange={(e) => {
                    onLiabilityChange(e)
                }} type='date' name="date" variant="outlined" />
                <Button onClick={() => console.log(liabilityData)} sx={{
                    marginTop: "10px"
                }} variant='contained'>Save</Button>
            </div>
        </div>
    )
}