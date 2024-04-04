import inquirer from "inquirer";
import chalk from "chalk";

let todoList =[];
let condition =true
console.log(chalk.green.bold("\n \t Welcome to Code with arish-todo-list Application\n"));

while(condition){
    let addTask =await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:chalk.blueBright("Enter Your New Task :"),
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${ addTask.task}Task add into todo-List successfully`);
    let addMoreTask =await inquirer.prompt([
        {
            name:"addMore",
            type:"confirm",
            message:chalk.blackBright("Do you want to add more task?"),
            default:"false"
        }
    ]);
    condition = addMoreTask.addMore
}
console.log("your updated Todo-List :", todoList);
