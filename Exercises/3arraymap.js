const studentDatas = {                                  // varaible declaration (studentData is an object)
    branchStudents:[                                 // array of elements
        { id: 1, branchId: 1, studentId: 1 },
        { id: 2, branchId: 2, studentId: 2 },
        { id: 3, branchId: 2, studentId: 1 },
        { id: 4, branchId: 1, studentId: 3 }
    ],
    branches: [
        { id: 1, name: "CSE" },
        { id: 2, name: "IT" }
    ],
    students: [
        { id: 1, name: "Jay" },
        { id: 2, name: "Sanjay" },
        { id: 3, name: "Rajesh" }
    ]
};
const branchDetails = studentData.branch.find(function(data){
        return data;              
    }
    );
 
const studentDetails = studentData.student.find(function(data){
    return data;
})

const details = studentDatas.branchStudents.map(function(data){
 return {                                        
        id:data.id, 
        branchId:data.branchId,
        branchName:branchDetails.name, 
        studentId:data.studentId,
        studentName:studentDetails.name,
     };
 })

 const branchStudentMaper = function(data){
    return {                                        
           id:data.id, 
           branchId:data.branchId,
           branchName:branchDetails.name, 
           studentId:data.studentId,
           studentName:studentDetails.name,
        };
    }
//  console.log('branch: ',branchDetails); 
//  console.log('student: ',studentDetails)
console.log('branchstudentMap: ', details);