# Form builder

## About the project

This project is a starter form builder to be able to build a dynamic form. The goal is to be able to render this form so that a user can then use it to submit data.

Currently, the form builder consists of the following fields

- Image (Display of image only, a user should not be able to enter their own values)
- Text (Display of text only, a user should not be able to enter their own values)
- Radio buttons (For user input)
- Checkboxes (For user input)

When pressing the "Save Form" button, the form is displayed as an array in a `console.log()`.

## Task:

- Read through the code and see if you find any things you think are good or things that could have been improved. Note and bring to the next meeting.
- Create a new field type for the form builder for an input field of type text. To then be able to render this field in a form, a label and a placeholder are needed. This data needs to be part of the array that is printed to the console when you click "Save Form".
- Render the form from the form builder. For example, if you added an image and radio buttons, these fields should be rendered so that a user can see and fill in their own values.
- Build functionality to submit the dynamically rendered form with the values entered by a user. A `console.log(formValues)` is sufficient.
