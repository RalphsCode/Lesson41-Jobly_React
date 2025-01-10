\echo 'Delete and recreate jobly db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE jobly;
CREATE DATABASE jobly;
\connect jobly

\i /home/ralphscode/RalphsCode/Springboard/Lessons/Lesson41-Jobly/react-jobly/backend/jobly-schema.sql
\i /home/ralphscode/RalphsCode/Springboard/Lessons/Lesson41-Jobly/react-jobly/backend/jobly-seed.sql

\echo 'Delete and recreate jobly_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE jobly_test;
CREATE DATABASE jobly_test;
\connect jobly_test

\i /home/ralphscode/RalphsCode/Springboard/Lessons/Lesson41-Jobly/react-jobly/backend/jobly-schema.sql
