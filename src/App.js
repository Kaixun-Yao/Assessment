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
  const [students,setStudents] = useState([])//store student list 
  const [search_tag,setSearch_tag] = useState("")//store search by tag input
  const [search_name,setSearch_name] = useState("")//store search by tag input

  //fetch data
  useEffect(()=>{
    Axios.get("https://api.hatchways.io/assessment/students")
        .then(res=>{
          setStudents(res.data.students)
        })
  },[])


  return (
    <div className="out "> 
      <div>
      <div className="input-container w-full">
        <SearchByName setInput={setSearch_name}/><br/>
        <SearchByTag setInput={setSearch_tag}/>
      </div>
        <div className="center">
          <div className="w-full">
            <StudentList student_list ={students} calAvr={calAvr} search_tag = {search_tag} search_name = {search_name}/>
          </div>
        </div>
      </div>
    </div>
     
    
  );
}

export default App;
