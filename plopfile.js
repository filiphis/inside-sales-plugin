export default function (plop) {
  const basePath = process.env.INIT_CWD || process.cwd();

  plop.setGenerator("generate component", {
    description:
      "Cria uma pasta contendo os arquivos e a estrutura base de um componente.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Nome do component:",
      },
    ],
    actions: [
      {
        type: "add",
        path: `${process.cwd()}/{{pascalCase name}}/index.tsx`,
        templateFile: "plop-templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: `${process.cwd()}/{{pascalCase name}}/types.ts`,
        templateFile: "plop-templates/componentTypes.ts.hbs",
      },
      {
        type: "add",
        path: `${process.cwd()}/{{pascalCase name}}/styles.tsx`,
        templateFile: "plop-templates/componentStyles.tsx.hbs",
      },
    ],
  });
}
