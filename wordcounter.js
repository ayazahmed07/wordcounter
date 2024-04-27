#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function exitanimation(text) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise((resolve) => setTimeout(resolve, 10));
    }
}
let condition = true;
while (condition) {
    let question = await inquirer.prompt([
        {
            name: "Sentence",
            type: "input",
            message: chalk.blue("Enter your Sentence to count the words?"),
            validate: function (input) {
                if (input.trim() === "") {
                    return chalk.red.bold("Please write your sentence!!");
                }
                return true;
            },
        },
    ]);
    const countWords = question.Sentence.trim().split(" ");
    console.log(countWords);
    let wordCountmessage;
    if (countWords.length === 1) {
        wordCountmessage = "1 word";
    }
    else {
        wordCountmessage = `${countWords.length} words`;
    }
    console.log(chalk.gray.bold(`"Your sentence word count is ${wordCountmessage} "`));
    const continuecon = await inquirer.prompt({
        name: "question",
        message: "Do you want to continue?",
        type: "confirm",
        default: true
    });
    condition = continuecon.question;
    if (!condition) {
        await exitanimation(chalk.yellow("-----------------------------------------------"));
        await exitanimation(chalk.yellow.bold.italic(`\nThank you for using word counter App!\n\t Ayaz Ahmed\n`));
        await exitanimation(chalk.yellow("-----------------------------------------------\n"));
    }
}
