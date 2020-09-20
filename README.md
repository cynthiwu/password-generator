# A Simple Password Generator with Javascript

Explore the [project page](https://github.com/cynthiwu/password-generator)

View it live on [github-pages](https://cynthiwu.github.io/password-generator/)

## Table of Contents
- [About The Project](#about-the-project)
  - [Acceptance Criteria](#acceptance-criteria)
  - [The JavaScript](#the-javascript) 


## About The Project

The goal of this project was to create a simple browser application that generates a random password based on user criteria. The UI leverages HTML and CSS and is powered by Javascript. 

![Project Snapshot](./Assets/03-javascript-homework-demo.png)

### Acceptance Criteria

The below were the acceptance criteria for this project:

* A random password be generated upon clicking the "Generate Password" button.
* Once the button is clicked, the user is presented with a set of criteria: prompt for character length, confirmation of the inclusion of at least one character type (i.e., lowercase letters, uppercase letters, numbers, special characters or symbols).
* Character length has a mandated range between 8 and 128 characters.
* Once user criteria is collected, then a random password is generated to match that criteria. 
* Final password is written on the page, or as an alert.

### The JavaScript
My approach to writing the JavaScript for this project is outlined below.

*  I created a set of functions/methods to randomly select characters based on user criteria. These functions utilize the Math.random function and the ASCII table, pulling random symbols based on range size and placement in the table. This excludes the special symbol generator, which pulls randomly from the symbols variable I created. 
* Within the generatePassword function, I started by asking the user to verify their password criteria with a a prompt and set of confirmations. I looped the prompt and confirmation variables to ensure that the user's responses were within predetermined limits. 
* To generate the password, I first created an empty password variable to store the working string (i.e., newPassword) and a charCount variable to ensure we hit the user's desired passwordLength.
* To push the characters to the newPassword variable, I created a loop which calls a character generating function based on the user's criteria. The random character generated was then added to the newPassword string and a counter number to the charCount. The charCount ensures that we at least hit the mininum number of characters selected by the user. 
* The final step was to slice the newPassword to fit the passwordLength. This method ensures that we have included at least one character for all character types selected by the user. 

## Usage

This project can be used by anyone who wishes to generate random passwords to protect access to personal accounts and/or sensitive data. This includes employees within a given organization, or the general public utilizing public applications. 

### Demo

Watch the gif below to see how to select password criteria and generate a random password.  

![Password Generator Demo](./Assets/demo.gif)


### Built With

* This project was built using [Bootstrap](https://getbootstrap.com/).
* HTML code was validated using the [W3C Markup Validation Service](https://validator.w3.org/).


## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact

Cynthia Wu - [@cynthia21wu](https://twitter.com/cynthia21wu) - cynthia21wu@gmail.com

Project Link: [https://github.com/cynthiwu/password-generator](https://github.com/cynthiwu/password-generator)
