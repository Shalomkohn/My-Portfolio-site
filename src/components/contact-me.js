

const ContactMe = () => {

    const info = [
        {
            id: 1,
            icon: <a href="https://twitter.com/Shalom_Dev"><i className="fa-brands fa-twitter contactLogo btn"></i></a>,
            text: <a href="https://twitter.com/Shalom_Dev" className="btn">@Shalom_Dev</a>,
        },
        {
            id: 2,
            icon: <a href="https://www.linkedin.com/in/shalom-ber-kohn-525988233/"><i className="fa-brands fa-linkedin contactLogo btn"></i></a>,
            text:<a href="https://www.linkedin.com/in/shalom-ber-kohn-525988233/" className="btn">linkedin</a>,
        },
        {
            id: 3,
            icon:  <a href="mailto:sbk5775@gmail.com"><i className="fa-solid fa-envelope contactLogo btn"></i></a>,
            text: <a href="mailto:sbk5775@gmail.com" className="btn">sbk5775@gmail.com</a>,
        },
        {
            id: 4,
            icon:  <a href="https://github.com/Shalomkohn"><i className="fa-brands fa-github contactLogo btn"></i></a>,
            text: <a href="https://github.com/Shalomkohn" className="btn">github</a>,
        }
    ]
    return(
        <div className="contactInfoDiv">

            {info.map( contact => {
                return(
                    <ul key={contact.id} className="contactInfoUl">
                        <li className="infoLi infoLiImg">{contact.icon}</li>
                        <li className="infoLi infoLiText btn">{contact.text}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default ContactMe