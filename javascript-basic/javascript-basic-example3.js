let values = {
    branchStudent: [
        { id: 1, branchId: 1, studentId: 1 },
        { id: 2, branchId: 3, studentId: 2 },
        { id: 3, branchId: 3, studentId: 1 },
        { id: 4, branchId: 1, studentId: 3 }
    ],
    branch: [
        { id: 1, name: "CSE" },
        { id: 4, name: "IT" }
    ],
    student: [
        { id: 1, name: "Jay" },
        { id: 2, name: "Sanjay" },
        { id: 3, name: "Rajesh" }
    ]
}
 
const getBranch=(id)=>
{
    const branch = values.branch.find(_branch=>_branch.id === id)
    return branch?branch.name:null
}
const getStudent=(id)=>
{
    const branch = values.student.find(_branch=>_branch.id === id)
    return branch?branch.name:null
}
const branchStudent = values.branchStudent.map(_branchStudent =>
 { return {
     ..._branchStudent,
     branchName:getBranch(_branchStudent.branchId),
     studentName:getStudent(_branchStudent.studentId )
     }
    })
console.log(branchStudent)
// function studentCheck(item,values){
//     let students=values.student
//     return  students.find((val)=>{
//        if(val.id===item){
//         return val.name
//        }
//    })
// }
// function branchCheck(item,values){
//     let branches=values.branch
//    return  branches.find((val)=>{
//        if(val.id===item){
//         return val.name
//        }
//    })
// }

// for (let key in values){

//     let arr= values[key].map((item,key)=>{
//        let obj;
//        let count=0;

//       let setBranch = branchCheck(item.branchId,values)
//       let setStudent = studentCheck(item.studentId,values)
       
//        if(setBranch && setStudent  ){
//          obj={
//             ...item,
//             branchName:setBranch.name,
//             studentName:setStudent.name
//          }
//          count+=1
//        }
//         if(setBranch !== '' && setBranch !== undefined && count===0){
//             console.log('setBranch only',setBranch)
//         obj={
//             ...item,
//             branchName:setBranch.name
//          }
//        }
//         if(setStudent !==''  && setStudent !== undefined && count===0){
//             console.log('setStudent only',setStudent)
//         obj={
//             ...item,
//             studentName:setStudent.name
//          }
//        }
//         return obj
//     })
// console.log(arr)
//     break;
// }

// const a=undefined or a=null

// a.property will crash

// obj={
//     ...item,
//     branchName:values.branch[count].name,
//     studentName:values.student[count].name
//  }
