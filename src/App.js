import './App.css';
import Axios  from 'axios';
import { useEffect, useState } from 'react';
import StudentList from './components/student/StudentList';
import SearchByName from './components/search/SearchByName';
import SearchByTag from './components/search/SearchByTag';

function calAvr(grades) {
  var total=0
  for(var i=0 ; i<grades.length;i++){
      total+=parseInt(grades[i])
  }
  return (total/grades.length)
}

function App() {
  const [original_students,setOriginal_Students] = useState([])
  const [render_students,setRender_Students] = useState([])
  const [search_name,setSearch_name] = useState("")
  const [search_tag,setSearch_tag] = useState("")

  useEffect(()=>{
    Axios.get("https://api.hatchways.io/assessment/students")
        .then(res=>{
          setOriginal_Students(res.data.students)
          setRender_Students(res.data.students)
        })
  },[])

  useEffect(()=>{
    var result_list=[]
    if(search_name ==""){
      setRender_Students(original_students)
    }else{
      for (var i =0;i<original_students.length;i++){
        var full_name = original_students[i].firstName+" "+original_students[i].lastName
        full_name = full_name.toLowerCase()
        if(full_name.includes(search_name.toLowerCase())){
          result_list.push(original_students[i])
        }
      }
      setRender_Students(result_list)
    }
  },[search_name])

  return (
    <div className="out "> 
          <div className="center">
            <div className="w-full">
              <div className="input-container">
                <SearchByName setInput={setSearch_name}/>
                <SearchByTag setInput={setSearch_tag}/>
              </div>
              
              <div className="student-list-container" >
                <StudentList original_students_list ={original_students} render_students_list = {render_students} calAvr={calAvr}/>
              </div>
            </div>
          </div>
        
      
    </div>
     
    
  );
}

export default App;
