nest g resource practice-exercises
nest g class practice-exercises/domain/practice-exercise --no-spec --flat


mkdir -p src/practice-exercises/infrastructure/persistence/relational/mappers
mkdir -p src/practice-exercises/infrastructure/persistence/relational/repositories
nest g class practice-exercises/infrastructure/persistence/practice-exercise.repository --no-spec --flat



nest g class practice-exercises/infrastructure/persistence/relational/mappers/practice-exercise.mapper --no-spec --flat
nest g class practice-exercises/infrastructure/persistence/relational/repositories/practice-exercise.repository --no-spec --flat
//Move entities to relational

nest g class practice-exercises/infrastructure/persistence/relational/relational-persistence.module --no-spec --flat


// move folder into modules