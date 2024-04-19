#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let question: {Sentence : string } =  await inquirer.prompt([{
name: "Sentence",
type: "input",
message: chalk.redBright("Enter your Sentence to count the words?"),

}]);

const countWords = question.Sentence.trim().split(" ");

console.log(countWords);

console.log(chalk.blue(`"Your sentence word count is ${countWords.length} words"`));
