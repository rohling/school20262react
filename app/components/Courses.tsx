import CourseCard from "./CourseCard";

const courses = [{href: "coursehtml", image: "/img/html.svg", title: "Curso de HTML", description: "Conheça o curso de HTML que é o melhor..."},{href: "coursecss", image: "/img/css.svg", title: "Curso de CSS", description: "Conheça o curso de CSS que é ..."},{href: "coursejs", image: "/img/js.svg", title: "Curso de JavaScript", description: "Conheça o curso de JavaScript que é..."},{href: "coursegames", image: "/img/games.svg", title: "Curso de Games", description: "Conheça o curso de Games que é..."},{href: "coursedesing", image: "/img/design.svg", title: "Curso de Design", description: "Conheça o curso de Design que é..."},{href: "courserobot", image: "/img/robot.svg", title: "Curso de Robótica", description: "Conheça o curso de Robótica que é..."}]; 

export default function Courses() {
    return (
        <main id="courses" className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
           {courses.map((course) => (
            <CourseCard key={course.href} href={course.href} image={course.image} title={course.title} description={course.description} />
           ))}
        </main>
    )
}