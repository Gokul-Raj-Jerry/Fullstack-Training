let employees = [{id:101, name:"Rahul",salary:45000},
{id:102, name:"Sonia",salary:55000}]


let createEmployee = (emp)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let flag = true;
            employees.push(emp)
            flag?resolve("Data Inserted Successfully"):reject("Failure")
        }, 4000);
    });
}
let displayData = ()=>{
    setTimeout(()=>{
        let rows="";
        for( employee of employees){
            rows = rows + `<tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.salary}</td>
            </tr>` 
        }
        document.getElementById('tbody_Data').innerHTML = rows
    },1000)
}
createEmployee({id:103, name:"Priyanka", sal:65000}).then((msg)=>{
    displayData()
}).catch(()=>{})
