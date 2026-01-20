import { BsStars } from 'react-icons/bs';
import profile from '../assets/PassportSizePhoto.jpg';
import Footer from '../components/footer';
import { Typewriter } from 'react-simple-typewriter';
const summary = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = './Karthikeyan_CV.pdf';
    link.download = 'Karthikeyan_Saminathan_CV.pdf';
    link.click();
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919952721940", "_blank");
  };
  return (
    <>
      <div className='summary-container'>
        <div className="summary-content">
          <p>
            <span className="summary-greetings">
              Hello !
              <i className="corner tl"></i>
              <i className="corner tr"></i>
              <i className="corner bl"></i>
              <i className="corner br"></i>
            </span>
          </p>
          <h1>I'm <span className='summary-name'>Karthikeyan Saminathan,</span></h1>
          <h1 className="summary-role">
            <Typewriter
              words={['Full Stack .NET Developer', 'Azure DevOps Engineer', 'Problem Solver']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
          <p className="summary-desc">Highly skilled in C#, ASP.NET Core, and .NET MVC, with proven expertise in Microsoft Azure cloud solutions. Adept at designing and developing scalable, secure, and high-performance applications. Passionate about delivering end-to-end solutions with modern front-end and back-end technologies</p>
          <div className='btn-section'>
            <button className="btn-hire-me" onClick={downloadCV}>Download<span className='underscore'>_</span>CV</button>
            <button className="btn-whatsapp" onClick={openWhatsApp}>Whatsapp</button>
          </div>
        </div>
        <div className="summary-photo">
          <div className="circle-ring"></div>
          <img src={profile} alt="profile" />
          <span className="dot dot-orange"><BsStars/></span>
          <span className="dot dot-black"><BsStars/></span>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default summary
