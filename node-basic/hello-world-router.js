let express = require('express')
let app = express()
app.use(express.json())

let port = 3000;

app.get('/hello', function (req, res) {
    res.send(`Hello FR8 ${req.query.name}`)
})

app.post('/student',function (req, res) {
    
    try{
        let values = req.body
        const getBranch = (id) => {
            const branch = values.branch.find(_branch => _branch.id === id)
            return branch ? branch.name : null
        }
        const getStudent = (id) => {
            const students = values.student.find(_branch => _branch.id === id)
            return students ? students.name : null
        }
        const branchStudent = values.branch_student.map(_branchStudent => { return { ..._branchStudent, branchName: getBranch(_branchStudent.branchId), studentName: getStudent(_branchStudent.studentId) } })
    
        res.send({ branchStudentMap: branchStudent })

    }catch(err){
        res.send(err)
        console.log('error',err)
    }
})

app.listen(port, () => {
    console.log('your server is running on port number 3000')
})