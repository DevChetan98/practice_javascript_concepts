// Q.1. write sql query to display maximum salary from emp table?
// Q.2. write a SQL Query to display Second highest salary from emp table?
// Q.3. write a SQL Query to display name of employee with second highest salary from emp table
// A. SELECT name FROM employee_details WHERE salary in(SELECT MAX(salary) FROM `employee_details` WHERE salary!=(SELECT max(salary) FROM employee_details));
// Q.4. write a SQL Query to display count of employee with according to dept from emp table
// A. SELECT department , COUNT(*) from employee_details GROUP BY (department);
// Q.5. Write a query to display all the dept names where no.of emps are less then 2.
// SELECT department,COUNT(*) FROM `employee_details` GROUP by department HAVING COUNT(*)<2;
// Q.6. us employee ka name find karna hai jo aise department me kaam karta hai jaha par 2 se kam deparatment hai
// SELECT department, name FROM `employee_details` WHERE department IN(SELECT department FROM employee_details GROUP by department HAVING COUNT(*)<2);
// Q.7. write a query to display highest salary department wise and name of emp who is taking that salary.
// SELECT name,department,salary FROM employee_details WHERE salary IN(SELECT MAX(salary) FROM employee_details GROUP BY department);