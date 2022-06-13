import wordBeaterImg from '../word-beater-img.png'

const projectsArray = [
    {
        id: 1,
        title: 'WordBeater Game ',
        date: 'Feb/2022',
        img: wordBeaterImg,
        aTagHref: 'https://main.dpv635jgbcxbv.amplifyapp.com/',
        srcCodeHref: 'https://gist.github.com/Shalomkohn/8fc80a8019b0ada6465f1b6d05ffc6c4',
    }
]

const MyProjects = () => {

    return(
        <div className="myProjectsDiv">
            {projectsArray.map(project => {
                return(
                    <div key={project.id} className='project'>
                        <h3 className='projectName'>{project.title}</h3>
                        <p className='projectDate'>{project.date}</p>
                        <img className='projectImg' src={project.img} alt="project image" />
                        <a href={project.aTagHref} className='projectLink btn'>Look Up The Site</a>
                        <a className='projectSourceCodeATag' href={project.srcCodeHref}>See The Source Code</a>
                    </div>        
                )
            })}
            <div className='project'>
                <h3 className='projectName'>Another cool project being worked on right now...</h3>
            </div>  
        </div>
    )
}

export default MyProjects