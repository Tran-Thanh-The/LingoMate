# 10ielts

# Before commit any thing to github, please run the following command to check the code style:

```bash
npm run lint -- --fix
```

# If want to generate a new resource for new model, you can use the following command:

```bash
npm run generate:resource:relational -- --name=ResourceName
```

Example:

```bash
npm run generate:resource:relational -- --name=Category
```

# If want to add a new property to an existing model, you can use the following command:

```bash
npm run add:property:to-relational
```