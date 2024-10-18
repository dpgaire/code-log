// Configuration for the form fields
const formConfig = [
  {
    name: "title",
    label: "Title",
    type: "text",
    placeholder: "Enter title",
    fieldType: "input",
    required: true,
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter description",
    type: "text",
    fieldType: "textarea",
    required: true,
  },
  {
    name: "codeSnippet",
    label: "Code",
    placeholder: "Enter code",
    type: "text",
    fieldType: "textarea",
    required: true,
  },
];

const loginConfig = [
  {
    name: "email",
    label: "Email",
    type: "text",
    placeholder: "Your email",
    fieldType: "input",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Your password",
    fieldType: "input",
    required: true,
  },
];

export { formConfig, loginConfig };
