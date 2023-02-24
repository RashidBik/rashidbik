import React,{useState, useEffect} from 'react'
import {projectsData} from '../../data';
import {projectNav} from '../../data';
import Project from './Project';

const Projects = () => {
    const [item, setItem] = useState({name: ''});
    const [project, setProject] = useState([]);
    const [active, setActive] = useState(0);
 

    useEffect(() =>{
        if (item.name === 'all') {
            setProject(projectsData)
       }else{
        const newProject = projectsData.filter(
            (project) => {
                return project.category.toLowerCase() === item.name;
            }
        );
            setProject(newProject);
       }
    },[item]);

    const handleClick = (e, index) =>{
        setItem({name: e.target.textContent.toLowerCase()})
        setActive(index);
    }

    return (
    <div >
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul  className='flex flex-col md:flex-row 
        justify-evenly items-center font-bold'
        >
            {projectNav.map((item,index) =>{
                return (
                    <li onClick={(e)=> {
                        handleClick(e, index)

                    }}
                    className={`${active === index ? 'active' : ''}
                    cursor-pointer capitalize m-4 hover:text-gray-700`}
                    key={index} >{item.name}</li>
                )
            })}
        </ul>
      </nav>
    <section className='grid grid-cols-2  lg:grid-cols-3 gap-y-12 gap-x-8'>
        {
            project.map((item) => {
                return (
                    <Project item={item} key={item.id} />
                )
            })
        }
    </section>
    </div>
  )
}

export default Projects
