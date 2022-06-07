import React, {useEffect} from 'react';
import {useState} from "react";
import Validator from "../services/Validator";
import CreditRequest from "../services/CreditRequest";

const CreditForm = () => {
    const [fio, setFio] = useState("");
    const [age, setAge] = useState(NaN);
    const [sud, setSud] = useState("-1");
    const [passport, setPassport] = useState("");   
    const [work, setWork] = useState("-1");
    const [purpose, setPurpose] = useState(-1);
    const [deposit, setDeposit] = useState("");
    const [credits, setCredits] = useState("-1");
    const [sum, setSum] = useState(NaN);
    const [autoAge, setAutoAge] = useState(-1);
    const [message, setMsg] = useState("");
    const [infoPassport, setInfoPassport] = useState("");
    const [answer,setAnswer] = useState(0.0);

    const Validation = () => {
        setMsg(Validator({fio,age,sum,passport,sud,work,purpose,credits,deposit,autoAge,infoPassport}))
    }
    
    
    
    useEffect(() => {
        if(message === "success"){
           showAnswer()
        }},[message])
    
    const showAnswer = () => {
        setMsg("");
        CreditRequest({fio,age,sum,passport,sud,work,purpose,credits,deposit,autoAge,infoPassport})
            .then(res => {alert (res.data)})
    }
    
    return (
        <div className='CreditForm'>
            <h1 className='m-3'>Credit</h1>
            <input className={"MyInput my-2"} maxLength={30} placeholder={" ФИО"} onInput={e => setFio(e.currentTarget.value)}/>
            <input className={"MyInput my-2"} maxLength={30} placeholder={" Ваш возраст"} onInput={e => setAge(parseInt(e.currentTarget.value))}/>
            <input className={"MyInput my-2"} maxLength={30} placeholder={" Сумма желаемого кредита"} onInput={e => setSum(parseInt(e.currentTarget.value))}/>
            <input className={"MyInput my-2"} maxLength={30} placeholder={" Паспортные данные(Серия, Номер)"} onInput={e => setPassport(e.currentTarget.value)}/>
            <input className={"MyInput my-2"} maxLength={30} placeholder={" Кем выдан, когда"} onInput={e => setInfoPassport(e.currentTarget.value)}/>
            
            <select value={sud} onChange={e => setSud(e.currentTarget.value)}>
                <option hidden value={-1}>Сведения о судимости</option>
                <option value={"dependency"}>Есть справка об отсутсвии судимости</option>
                <option value={0}>Нет справки об отсутствии судимости</option>
            </select>
            
            <select value={work} onChange={e => setWork(e.currentTarget.value)}>
                <option hidden value={-1}>Трудоустройство</option>
                <option value={14}>Трудоустроен по трудовому договору</option>
                <option value={12}>Собственное ИП</option>
                <option value={8}>Фрилансер</option>
                <option value={"dependency"}>Пенсионер</option>
                <option value={0}>Безработный</option>
            </select>
            
            <select value={purpose} onChange={e => setPurpose(parseInt(e.currentTarget.value))}>
                <option hidden value={-1}>Цель</option>
                <option value={14}>Потребительский кредит</option>
                <option value={8}>Недвижимость</option>
                <option value={12}>Перекредитование</option>
            </select>
            
            <select value={credits} onChange={e => setCredits(e.currentTarget.value)}>
                <option hidden value={-1}>Наличие других кредитов</option>
                <option value={"dependency"}>Нет других кредитов</option>
                <option value={0}>Есть другие кредиты</option>
            </select>
            
            <select value={deposit} onChange={e => setDeposit(e.currentTarget.value)}>
                <option value={0}>Нет залога</option>
                <option value={14}>Недвижимость</option>
                <option value={"dependency"}>Автомобиль</option>
                <option value={12}>Поручительство</option>
            </select>
            
            <input type={deposit==="dependency"?"active":"hidden"}className={`MyInput my-3`} 
                   placeholder={"Возраст автомобиля"} onInput={e => setAutoAge(parseInt(e.currentTarget.value))}/>
            <b className={`ErrorMsg ${message==="success"?"d-none":"text-danger"}`}>{message}</b>
            <button className={'mt-1 mx-auto btn btn-success'} onClick={Validation}>Отправить</button>
        </div>
    );
};

export default CreditForm;