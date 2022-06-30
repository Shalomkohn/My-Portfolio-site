import wordBeaterImg from '../word-beater-img.png'
import NCFurnitureImg from '../NC-furniture-img.png'
import samsCaulkingImg from '../sams-caulking-img.png'

const projectsArray = [
    {
        id: 1,
        title: 'Sams Shower Caulking',
        date: 'jul/2022',
        img: samsCaulkingImg,
        aTagHref: 'https://dev8171.dtiqg5g6eferp.amplifyapp.com',
        srcCodeHref: 'https://github.com/Shalomkohn/sams-caulking',
    },
    {
        id: 2,
        title: 'NC Furniture',
        date: 'Jun/2022',
        img: NCFurnitureImg,
        aTagHref: 'https://main.dy2o65319qp3n.amplifyapp.com',
        srcCodeHref: 'https://github.com/Shalomkohn/North-capital-furniture',
    },
    {
        id: 3,
        title: 'WordBeater Game ',
        date: 'Feb/2022',
        img: wordBeaterImg,
        aTagHref: 'https://main.dpv635jgbcxbv.amplifyapp.com/',
        srcCodeHref: 'https://gist.github.com/Shalomkohn/8fc80a8019b0ada6465f1b6d05ffc6c4',
    }
]

const MyProjects = () => {

    return(
        <>
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
                <div className='project' style={{height: '300px'}}>
                    <h3 className='projectName'>Another cool project being worked on right now...</h3>
                </div>  
            </div>
            <footer className="footer" style={{position: 'relative', right: '15px'}}>
                <p className="copyWrite" >Copyright &copy; 2022 Shalom Kohn</p>
            </footer> 
        </>
    )
}

export default MyProjects