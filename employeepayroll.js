class EmployeePayrollData {
    get  () { return this._id;}
    set id(id)  {
        this._id = id;
    }
get name() { return this._name;}
set name(name) {
    let nameRegex = RegExp['^[A-Z]{1}[a-zA-Z\\s]{$2,}$']
    if (nameRegex.test(name))
    this._name = name;
    else throw "Name is Incorrect!";
}
get profilePic() { return this._profilePic;}
setprofilePic(profilePic){
    this._profilePic = profilePic;
}

get department() {return this._department;}
set department(department) {
    this._department = department;
}

get salary() {return this._salary;}
set _salary(salary) {
    this._salary = salary;
}

get note() {return this._note;}
set note(note) {
    this._note = note;
}

get startDate() {return this._startDate;}
set startDate(startDate) {
    this._startDate = startDate;
}
tostring() {
    const option = { year: 'numeric',month:'long',day: 'numeric'};
    const empDate = !this. startDate ? "undefined" :
    this.startDate.toLocaleDateString("en-us", option);
    return "id=" +this.id+ ",name='" +this.name+",gender='" +this.gender+",profilePic='" + this.profilePic+", department='" + this.department+",salary='" + this.salary+", startDate=" + empDate+ ", note+" +this.note;

}
}


window.addEventListener('DOMContentLoaded',(event)=>{
    const name = document.querySelector('#name');
 const textError = document.querySelector('.text-error');
name.addEventListener ('input', function() {
    if(name.nodeValue.length == 0) {
        textError.textContent ="";
        return;
    }
    try {
        (new EmployeePayrollData()).name = name.nodeValue;;
        textError.textContent = "";
     }catch  (e) {
         textError.textContent = e;
     }
});
const salary = document.querySelector('#salary');
const output = document.querySelector(',salary_output');
output.textContent = salary.nodeValue;
salary.addEventListener('input',function() {
    output.textContent = salary.nodeValue;
});
});

const save = () => {
try {
    let employeePayrollData = createEmployeePayroll();
} catch (e) {
    return;
}
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text_error', e);
        throw e;
    }

    employeePayrollData.profilePic = getSelectValues('[name= profile]').pop();
    employeePayrollData.gender = getSelectValues('[name= gender]').pop();
    employeePayrollData.salary = getSelectValues('[name= salary]').pop();
    employeePayrollData.notes = getSelectValues('[name= notes]').pop();
    employeePayrollData.department = getSelectValues('[name= department]').pop();
    let date = getValueById ('#day')+" "+getValueById('#month')+" "+getValueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.tostring());
    return employeePayrollData;

}

const getInputValues = (propertyValue) => {
let selItems = [];
allItems.array.forEach(item => {
    if (item.checked) selItems.push(item.value); 
    });
    return selItems;
}


const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    }catch(e) {
        return;
    }
}

function createAndUpdateStorage (employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList !=  undefined) {
        employeePayrollList.push (employeePayrollData);

    }else{
        employeePayrollList = [employeePayrollData]
    }
    alert(employeePayrollList.tostring());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}


const resetForm = () => {
    setValue('#name', ' ');
    unselectedValues ('[name=profile]');
    unselectedValues ('[name=gender]');
    unselectedValues ('[name=department]');
    setValue('#salary', ' ');
    setValue('#notes', ' ');
    setValue('#day', ' 1');
    setValue('#month', 'January ');
    setValue('#year', '2020 ');
}


const unselectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}
const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}



