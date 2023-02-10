# RestAPIDemo

setup:

npm install
npm run

Endpoints:

* To read all employee data (GET)
http://localhost:3000/api/employees/

* To save employee details (POST)
curl -d "name=kiran&age=28&id=1" -X POST http://localhost:3000/api/employees

* To fetch employee by ID (GET)
http://localhost:3000/api/employees/1

* To update employee by ID (PUT)
curl -d "{"newData":"name=kiran&age=29&id=1"}" -X PUT http://localhost:3000/api/employees/1

* To delete employee by ID (DELETE)
curl -X DELETE http://localhost:3000/api/employees/1


