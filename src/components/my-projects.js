import wordBeaterImg from '../word-beater-img.png'
import NCFurnitureImg from '../NC-furniture-img.png'
import samsCaulkingImg from '../sams-caulking-img.png'
import universalContractingImg from '../universal-contracting.png'
import kiddushroomImg from '../kiddushroom-img.png'
import kingDavidMassageImg from '../king-david-massage.png'
import cyberCliffImg from '../cybercliff-img.png'

const projectsArray = [
    {
        id: 1,
        title: 'CyberCliff',
        date: 'may / 2023',
        img: cyberCliffImg,
        aTagHref: 'https://cybercliff.com'
    },
    {
        id: 2,
        title: 'King David Massage',
        date: 'Feb / 2023',
        img: kingDavidMassageImg,
        aTagHref: 'https://shalomkohn.github.io/king-david-massage',
        srcCodeHref: 'https://github.com/Shalomkohn/king-david-massage',
    },
    {
        id: 3,
        title: 'KiddushRoom',
        date: 'dec / 2022',
        img: kiddushroomImg,
        aTagHref: 'https://kiddushroom.com',
        srcCodeHref: 'https://github.com/Shalomkohn/kiddushroom-frontend',
    },
    {
        id: 4,
        title: 'Universal Contracting Group',
        date: 'oct / 2022',
        img: universalContractingImg,
        aTagHref: 'https://universalcontracting.group',
        srcCodeHref: 'https://github.com/Shalomkohn/universal-contracting-group',
    },
    {
        id: 5,
        title: 'Sams Shower Caulking',
        date: 'jul / 2022',
        img: samsCaulkingImg,
        aTagHref: 'https://shalomkohn.github.io/sams-caulking/',
        srcCodeHref: 'https://github.com/Shalomkohn/sams-caulking',
    },
    {
        id: 6,
        title: 'NC Furniture (Practice Page)',
        date: 'Jun / 2022',
        img: NCFurnitureImg,
        aTagHref: 'https://shalomkohn.github.io/North-capital-furniture/',
        srcCodeHref: 'https://github.com/Shalomkohn/North-capital-furniture',
    },
    {
        id: 7,
        title: 'WordBeater Game',
        date: 'Feb / 2022',
        img: wordBeaterImg,
        aTagHref: 'https://shalomkohn.github.io/new-5-second-game/',
        srcCodeHref: 'https://gist.github.com/Shalomkohn/8fc80a8019b0ada6465f1b6d05ffc6c4',
    }
]

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
                                <a href={project.aTagHref} target="_blank" className='projectLink btn'>Look Up Site</a>
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