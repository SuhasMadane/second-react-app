let list = ["suhas","suraj","vaibhav","tejas","tejas"];
let list1 = list; //but it is not a clone it just like another name of same array 
                  //i.e,another reference pointing to same array or same array have two pointers
let list2 = [...list]; //here list2 is proper clone of list
console.log(list2);                 
let doc = {empid:105,empname:"suhas",salary:5000.00,dept:"development"};
let doc1 = doc; //but it is not a clone it just like another name of same object 
                //i.e,another reference pointing to same object or same object have two pointers
let doc2 = {...doc};//here doc2 is proper clone of doc
console.log(doc2);