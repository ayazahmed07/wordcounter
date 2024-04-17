import inquirer from "inquirer";
import chalk from "chalk";
let question = await inquirer.prompt([{
        name: "Sentence",
        type: "input",
        message: chalk.green("Enter your Sentence to count the words?"),
    }]);
const countWords = question.Sentence.trim().split(" ");
console.log(countWords);
console.log(`"Your sentence word count is ${countWords.length} words"`);
