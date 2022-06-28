import wordBeaterImg from '../word-beater-img.png'
import NCFurnitureImg from '../NC-furniture-img.png'

const projectsArray = [
    {
        id: 1,
        title: 'NC Furniture',
        date: 'Jun/2022',
        img: NCFurnitureImg,
        aTagHref: 'https://main.dy2o65319qp3n.amplifyapp.com',
        srcCodeHref: 'https://github.com/Shalomkohn/North-capital-furniture',
    },
    {
        id: 2,
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
                        <div>
                            <h3 className='projectName'>{project.title}</h3>
                            <p className='projectDate'>{project.date}</p>
                        </div>
                        <img className='projectImg' src={project.img} alt="project image" />
                        <div>
                            <a href={project.aTagHref} target="_blank" className='projectLink btn'>Look Up Site</a>
                            <a className='projectSourceCodeATag' href={project.srcCodeHref} target="_blank">Source Code</a>
                        </div>
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