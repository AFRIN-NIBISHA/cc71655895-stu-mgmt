import StudentCard from "../components/StudentCard";

const dummyStudents = [
    {
        id:1,
        name:"Afrin Nibisha",
        roll:"4004",
        department:"Computer science",
        email:"afrinnibisha65@gmail.com"
    },
    {
        id:2,
        name:"Antony Benhur",
        roll:"4005",
        department:"Mathematics",
        email:"antonybenhur65@gmail.com"
    }
];

function Home() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dummyStudents.map((student)=>(
                <StudentCard key={student.id}student={student}/>
            ))}
        </div>
    );
}
export default Home;