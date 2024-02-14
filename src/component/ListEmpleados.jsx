import CardEmpleado from "./CardEmpleado";

const ListEmpleados = ({ empleados }) => {
  return (
    <section className="mt-5">
      {empleados.map((empleado, i) => (
        <CardEmpleado
          key={i}
          empleadoNombre={empleado.fullName}
          empleadoTitulo={empleado.title}
          empleadoDepartamento={empleado.department}
          empleadoImg={empleado.pic}
        ></CardEmpleado>
      ))}
    </section>
  );
};

export default ListEmpleados;
