const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const courses = [
    {id: 101, name: 'course101'},
    {id: 201, name: 'course201'},
    {id: 301, name: 'course301'}
];

app.get('/', (req, res) => {
    res.status(200).send('Hello!!!!!');
});

app.get('/api/courses', (req, res) => {
    res.status(200).send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('Invalid Id');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const {error} = validateCourse(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('Invalid Id');

    const {error} = validateCourse(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('Invalid Id');

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});

//common function used for validation
function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

module.exports = app;
//const port = process.env.PORT || 3000;
//app.listen(port, () => console.log(`listening on port ${port}......`));