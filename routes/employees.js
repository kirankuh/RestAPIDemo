const express = require('express');
const mongoose = require("mongoose");

const Employee = mongoose.model('Employee',{
    name: { type: String },
    id: { type: Number },
    age: { type: Number }
});

const router = express.Router();

router.get('/', async (req, res) => {
    const allEmployees = await Employee.find({});
    if(allEmployees.length == 0) res.send("No data found!");
    else
    res.json(allEmployees);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findOne({
      id: id,
    });
    if(employee)  
          return res.json(employee);
        else return res.send(`No employee found with the id ${id}`);
});

router.post('/', async (req, res) => {
    let employee = await Employee.findOne({
      id: req.body.id,
    }); 

    if(employee) return res.send("Employee already exists with this ID!");
        
    let newEmployee = new Employee({
        name: req.body.name,
        age:req.body.age,
        id: req.body.id
    })
      
    newEmployee.save(function(err,result){
        if (err){
            console.log(err);
        }
        else{
            console.log(result)
        }
    })

    res.send("success");
 
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;

    Employee.findOneAndUpdate({id: id}, req.body, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully updated.');
    });
    
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findOne({
      id: id,
    });

    if (!employee) {
      return res.send("No employee found with that ID");
    }
    await Employee.deleteOne({
      id: id,
    });
    res.json({
      message: 'Employee has been deleted',
    });

});

module.exports = router;