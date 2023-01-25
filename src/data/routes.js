import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Learn from "../pages/Learn";
import Contact from "../pages/Contact";


export const routes = [
    {
        path:"/",
        component: <Home/>,
        label: "Inicio",
        showMenu:false,
    },
    {
        path:"/sobre-mi",
        component: <About/>,
        label: "Sobre mí",
        showMenu:true,
    },
    {
        path:"/proyectos",
        component: <Projects/>,
        label: "Proyectos",
        showMenu:true,
    },
    {
        path:"/aprende",
        component: <Learn/>,
        label: "Aprendé",
        showMenu:true,
    },
    {
        path:"/contacto",
        component: <Contact/>,
        label: "Contacto",
        showMenu:true,
    },
]