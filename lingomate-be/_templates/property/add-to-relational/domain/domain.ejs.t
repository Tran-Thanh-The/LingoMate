---
inject: true
to: src/domain/<%= h.inflection.transform(name, ['pluralize', 'underscore', 'dasherize']) %>/domain/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>.ts
after: export class <%= name %> {
---

@ApiProperty()
<%= property %>: <%= type %>;
