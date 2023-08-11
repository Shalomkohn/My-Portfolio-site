import { projectsArray } from '../projectsData';

const MyProjects = () => {


    return (
        <>
            <div className="myProjectsDiv">
                {projectsArray.map(project => {
                    return (
                        <div key={project.id} className='project'>
                            <div>
                                <h3 className='projectName'>{project.title}</h3>
                                <p className='projectDate'>{project.date}</p>
                            </div>
                            <img className='projectImg' src={project.img} alt="project image" />
                            <div>
                                {project.aTagHref && <a href={project.aTagHref} target="_blank" className='projectLink btn'>Look Up Site</a>}
                                {project.srcCodeHref && <a className='projectSourceCodeATag' href={project.srcCodeHref} target="_blank">Source Code</a>}
                            </div>
                        </div>
                    )
                })}
                <div className='project' style={{ height: '300px' }}>
                    <h3 className='projectName'>Another cool project being worked on right now...</h3>
                </div>
            </div>
            <footer className="footer" style={{ position: 'relative', right: '15px' }}>
                <p className="copyWrite" >Copyright &copy; 2023 Shalom Kohn</p>
            </footer>
        </>
    )
}

export default MyProjects