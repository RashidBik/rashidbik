import React,{useState, useEffect} from 'react'
// import {projectsData} from '../../data';
import Project from './Project';
import supabase from '../../connection/env'

const projectNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

const Projects = () => {
    const [item, setItem] = useState({name: 'all'});
    const [project, setProject] = useState([]);
  const [active, setActive] = useState(0);
  
   const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
 
    useEffect(() =>{      
          async function fetchData()
    {
      setLoading(true);
      const { data, error } = await supabase.from('project').select();

      if (error) {
        setError(error)
          setData(null)
        setLoading(false)
      } else
      {
          setError(null)
        if (item.name === 'all') {
            setProject(data)
       }else{
        const newProject = data.filter(
            (project) => {
                return project.category.toLowerCase() === item.name;
            }
        );
            setProject(newProject);
        }
        setLoading(false)
      }
         
    }

    fetchData();
    }, [item]);
  
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
          project &&  project.map((item) => {
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
