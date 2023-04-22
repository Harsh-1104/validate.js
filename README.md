# validate.js
this module provide a validation automation with just simple step and in very easy way .
## Authors

- [@Harsh-1104](https://github.com/Harsh-1104)

## Features

- Auto validation
- Provide css for error and Success
- applicable to all platform (made up in JS)

## Installation

Install my-project with npm

```bash
  npm install validation-110403
```

## Demo

- Install Package [ validate-110403 ] from npm
- There are 3 types of function 
- 1 -> nullfield_validation (That checks null field)
- 2 -> oninput_validation (That checks field value based on Regex on input)
- 3 -> onfocusout_validation (That checks field value on focusout)
- now giv some id to input field like `<input type="text" id="name" placeholder=""/>`
- and also define a div with id `err_[fieldname]`
  `<div id="err_name"></div>`
- ### Here id of input and error msg div should me match.
- example : `name -> err_name | email -> err_email`
- also give data-type attributes to input field for on input validation
- like `<input type="password" id="password" data-type="password" / >`
- here 5 regex are availabel till now 1 `name`,`email`,`password`,`phone`,`message`
- now this all function will check and return output in flag so to check whether the particular field has proper and validate data you just need to check `if(objFlag.flag_name == 0)` for name and so on.It will return 0 if all data are proper and validated and in other cases it will return 1 and also so the particular error.

## Sample project 
visit [@Harsh-1104](https://github.com/Harsh-1104) and check validate.js repo in that refer index.html to know how to use this in code.

