---
inject: true
to: src/domain/<%= h.inflection.transform(name, ['pluralize', 'underscore', 'dasherize']) %>/infrastructure/persistence/relational/mappers/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>.mapper.ts
after: new <%= name %>Entity\(\)
---
persistenceEntity.<%= property %> = domainEntity.<%= property %>;