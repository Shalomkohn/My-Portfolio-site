

const ContactMe = () => {

    const info = [
        {
            id: 1,
            icon: <a href="https://twitter.com/Shalom_Dev"><i className="fa-brands fa-twitter contactLogo"></i></a>,
            text: <a href="https://twitter.com/Shalom_Dev">@Shalom_Dev</a>,
        },
        {
            id: 2,
            icon: <a href="tel:+15167341188"><i className="fa-solid fa-phone contactLogo"></i></a>,
            text: <a href="tel:+15167341188">+1 516-734-1188</a>,
        },
        {
            id: 3,
            icon: <a href="https://www.linkedin.com/in/shalom-ber-kohn-525988233/"><i className="fa-brands fa-linkedin contactLogo"></i></a>,
            text:<a href="https://www.linkedin.com/in/shalom-ber-kohn-525988233/">linkedin</a>,
        },
        {
            id: 4,
            icon:  <a href="mailto:sbk5775@gmail.com"><i className="fa-solid fa-envelope contactLogo"></i></a>,
            text: <a href="mailto:sbk5775@gmail.com">sbk5775@gmail.com</a>,
        },
        {
            id: 5,
            icon:  <a href="https://github.com/Shalomkohn"><i className="fa-brands fa-github contactLogo"></i></a>,
            text: <a href="https://github.com/Shalomkohn">github</a>,
        }
    ]
    return(
        <div className="contactInfoDiv">

            {info.map( contact => {
                return(
                    <ul key={contact.id} className="contactInfoUl">
                        <li className="infoLi infoLiImg">{contact.icon}</li>
                        <li className="infoLi infoLiText">{contact.text}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default ContactMe