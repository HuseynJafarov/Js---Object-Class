// // stu1 icinde qrupu p130a beraber olan teacherin adini ve yawini ekrana cixarmaq
// let stu1 = {
//   name: "Huseyn",
//   surname: "Jafarov",
//   age: 23,
//   phoneNumber: [12345, 987654],
//   groups: [
//     {
//       name: "P130",
//       room: "Siruus",
//       teachers: [
//         {
//           name: "Cavid",
//           age: 28,
//         },
//         {
//           name: "Rovshen",
//           age: "22",
//         },
//       ],
//     },
//     {
//       name: "V127",
//       room: "Pluton",
//       teachers: ["Cavid", "Dunya"],
//     },
//   ],
// };

// for (const item of stu1.groups) {
//   if (item.room == "Siruus") {
//     console.log(item.name);
//   }
// }

// let teacherFullData = () => {
//   for (const item of stu1.groups) {
//     if (item.name == "P130") {
//       for (const itemTeacher of item.teachers) {
//         if (itemTeacher.name == "Rovshen") {
//           return `${itemTeacher.name} - ${itemTeacher.age}`;
//         }
//       }
//     }
//   }
// };
// console.log(teacherFullData());

// function setGroupTeacher(groupName) {
//   let teacherData = teacherFullData();
//   return `${teacherData} ${groupName}`;
// }
// let group = "P120";
// console.log(setGroupTeacher(group));

// for (const item of stu1.phoneNumber) {
//   if (item == 12345) {
//     console.log(stu1.name);
//   }
// }

// let isExist = stu1.phoneNumber.includes(987654);
// if (isExist) {
//   console.log("var");
// } else {
//   console.log("Yoxdur");
// }

// let stu2 = {
//   name: "Seid",
//   surname: "Nuraliyev",
//   age: 33,
// };

// let stu3 = {
//   name: "Azer",
//   surname: "Dunyamaliyev",
//   age: 20,
// };

// let students = [stu1, stu2, stu3];

// for (const item of students) {
//     // console.log(item["name"]);
//     console.log(item.name + " " + item.surname);
// }

// let stu1 = {
//   id: 1,
//   name: "Togrul",
//   surname: "Quluzade",
// };
// let stu2 = {
//   id: 2,
//   name: "Maqa",
//   surname: "Abdullayev",
// };
// let stu3 = {
//   id: 3,
//   name: "Eli",
//   surname: "Binnetov",
// };
// let stu4 = {
//   id: 4,
//   name: "Orxan",
//   surname: "Ekberov",
// };

// let group = {
//   name: "P130",
//   capacity: 4,
//   students: [],
//   addStudent: function (stu) {
//     //find method alternative
//     // let student = this.students.filter((m) => m.id == stu.id);

//     // if (student.length != 0) {
//     //   console.log("Already exits");
//     //   return;
//     // }

//     let student = this.students.find((m) => m.id == stu.id);
//     if(student != undefined){
//         console.log("Already exits");
//         return;
//     }
//     if(this.students.length != this.capacity){
//         this.students.push(stu);
//         return;
//     }
//     console.log("Qrupda bosh yer yoxdu");

//   },
// };
// console.log(group.students);
// group.addStudent(stu1)
// group.addStudent(stu2)
// group.addStudent(stu3)
// group.addStudent(stu4)

// function Book(name, author) {
//   this.name = name;
//   this.author = author;
// }
// function getFullData(){
//     console.log(name + " " + author);
// }

// let book = new Book("Xosrov","Nizami")
// Book.prototype.pageCount = 55;

// Book.prototype.getAuthor = function(){
//     console.log(author);
// }
// console.log(book);

// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   getFullName() {
//     console.log(`${this.name} ${this.surname}`);
//   }
// }

// class Employee extends Person{

// }

// let employee = new Employee("Huseyn","Jafarov")
// employee.getFullName()
// //console.log(employee.surname);

// let group = {
//     name: "P130",
//     capacity: 5,
//     students:[],
//     addStudent: function (stu){
//         if(this.students.length != this.capacity){
//             this.students.push(stu)
//             return;
//         }
//         console.log("Qrupda bosh yer yoxdu");
//     }
// }
// group.addStudent("Orxan")
// group.addStudent("Togrul");
// group.addStudent("Seid");
// group.addStudent("Cavidan");
// group.addStudent("Eshqin");
// group.addStudent("Cavidan");

// console.log(group.students);