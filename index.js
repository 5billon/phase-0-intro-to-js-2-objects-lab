let employee = {
    name: "Joe Man",
    streetAddress: "123 Rose Rd",
};

function updateEmployeeWithKeyAndValue(Joe, key, value) {
    return {
        ...Joe,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(Joe, key, value) {
    Joe[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(Joe, key, value) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(Joe, key) {
    delete employee[key];
    return employee;
}