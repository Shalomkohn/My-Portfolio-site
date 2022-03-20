import wordBeaterImg from '../word-beater-img.png'
import myPicture from "../my-image-large.jpeg"

const projectsArray = [
    {
    id: 1,
    title: 'WordBeater Game ',
    date: 'Feb/2022',
    img: myPicture,
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
                        <img className='projectImg' src={project.img} alt="can not show image" />
                        <a href={project.aTagHref} className='projectLink'>Look Up The Site</a>
                        <a className='projectSourceCodeATag' href={project.srcCodeHref}>See The Source Code</a>
                    </div>        
                )
            })}
        </div>
    )
}

export default MyProjects