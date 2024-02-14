import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./css/App.css";
import Footer from "./component/footer";
import ListEmpleados from "./component/ListEmpleados";


function App() {
  let empleados = [
    { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://cdn-icons-png.freepik.com/256/3135/3135789.png" },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://cdn-icons-png.freepik.com/256/3135/3135789.png" },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://cdn-icons-png.freepik.com/256/3135/3135789.png" },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" },
    { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"},
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://cdn-icons-png.freepik.com/256/3135/3135789.png" },
    { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://cdn-icons-png.freepik.com/256/3135/3135789.png" },
    { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://cdn-icons-png.freepik.com/256/3135/3135789.png" },
    { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"},
  ]
  
  

  return (
    <>
    <Container className="mainpage">


      <ListEmpleados empleados={empleados}/>
    </Container>
    <Footer/>
     
    </>
    
  )
}

export default App
