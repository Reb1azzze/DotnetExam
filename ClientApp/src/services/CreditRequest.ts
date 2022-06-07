import axios from "axios";

const CreditRequest = (user:{fio:string,age:number,sum:number,passport:string, 
    sud:string,work:string,purpose:number,credits:string,deposit:string,autoAge:number }) => {
    return axios.post("/user", user);
    
};


export default CreditRequest;