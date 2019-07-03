let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function names(arr){
    for (let i = 0; i < arr.length -1; i++){
        console.log("Name: " + students[i].name + ", Cohort: " + students[i].cohort);
    }
}

names(students)

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function printUsers(){
    for (var user in users){
        console.log(user.toUpperCase())
        for(var i = 0; i < users[user].length; i++){
            var num = i + 1;
            var str_sum = users[user][i].first_name.length + users[user][i].last_name.length;
            var full_name = (num + " - " + users[user][i].last_name + ", " + users[user][i].first_name + " - " + str_sum);
            var cap_str = full_name.toUpperCase();
            console.log(cap_str)
        }
    }
  }
  printUsers()
//  dictionary with a list of dictionaries
//  hard code : EMPLOYEES
// iterate through the array
// count how many characters that are in each users first name and last name
// console.log the how many people are in the array, first name, last name, and how manay characters are in the users first and last name