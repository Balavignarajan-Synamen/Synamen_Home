// PersonCard.js (Child component)
function ChildProps({ student }) {
  return (
    <div>
      {student.map((s, index) => ( 
     <div key={index}>
     <h2>Hello, I am {s.name}.</h2>
      <p>I am {s.age} years old.</p>
      <p>I live in {s.city}.</p>
      </div>
      ))}
      </div>
  );
}

export default ChildProps;
