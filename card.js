#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");

// Define options for Boxen
const options = {
  padding: {
    top: 1,
    bottom: 1,
    right: 1,
    left: 2,
  },
  margin: {
    top: 1,
    left: 2,
    bottom: 1,
  },
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white("Umair Ahmed /"),
  handle: chalk.red("AND Digital"),
  work: chalk.white("Product developer at Covea"),
  twitter: chalk.cyan("https://twitter.com/umair170"),
  github: chalk.cyan("https://github.com/ahmedu007"),
  linkedin: chalk.cyan("https://linkedin.com/in/umair-ahmed-0222b377/"),
  web: chalk.cyan("https://www.umair.dev/"),
  npx: chalk.white("npx umair_ahmed"),
  labelWork: chalk.white.bold("      Work:"),
  labelTwitter: chalk.white.bold("   Twitter:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelWeb: chalk.white.bold("       Web:"),
  labelCard: chalk.white.bold("      Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
