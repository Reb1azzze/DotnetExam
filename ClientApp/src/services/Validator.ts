import React from 'react';

const Validator = (user:{fio:string,age:number,sum:number,passport:string, sud:string,
    work:string,purpose:number,credits:string,deposit:string,autoAge:number,infoPassport:string}) => {
    if(user.fio === "") return "Введите ФИО";
    if(user.age<21 || user.age > 72) return "Допустимый возраст 21-72";
    if(isNaN(user.autoAge)) return "Введите корректный возраст автомобиля";
    if(isNaN(user.age)) return "Введите корректный возраст";
    if(user.sum > 10000000) return "Максимальная сумма кредита 10кк";
    if(isNaN(user.sum)) return "Введите корректную сумму кредита";
    if(user.passport === "")return "Введите паспортные данные";
    if(user.infoPassport === "")return "Введите паспортные данные";
    if(user.sud === "-1") return "Выберите сведения о судимости";
    if(user.work === "-1") return "Укажите ваше трудоустройство";
    if(user.purpose === -1) return "Укажите цель взятия кредита";
    if(user.credits === "-1") return "Укажите наличие других кредитов";
   
    return "success";
};

export default Validator;