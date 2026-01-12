import { useState } from "react";
import { BsFillMortarboardFill, BsBriefcaseFill, BsArrowRightCircleFill } from "react-icons/bs";
import { } from "react-icons/bs";
const experience = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="professional-container">
            <h2 className="heading">
                My Academic and <br />Professional <span className="blue-text">Journey</span>
            </h2>

            <div className="exp-container">

                {/* EDUCATION */}
                <div className="exp-box">
                    <div className="inner-heading">
                        <span className="exp-icon"><BsFillMortarboardFill /></span><p>Education</p>
                    </div>

                    <div className="exp-content">
                        <p className="period">2019 - 2021</p>
                        <h4 className="title">Master in Computer Applications (MCA)</h4>
                        <h3 className="company-name">SASTRA Deemed University - Thanjavur</h3>
                    </div>

                    <div className="exp-content">
                        <p className="period">2016 - 2019</p>
                        <h4 className="title">Bachelor in Computer Applications (BCA)</h4>
                        <p className="company-name">SASTRA Deemed University - Kumbakonam</p>
                    </div>
                </div>

                {/* WORK EXPERIENCE */}
                <div className="exp-box">
                    <div className="inner-heading">
                        <span className="exp-icon"><BsBriefcaseFill /></span><p>Work Experience</p>
                    </div>

                    {/* COMCAST */}
                    <div className="exp-content">
                        <p className="period">July 2025 – Present</p>
                        <h4 className="title">Development Engineer II</h4>
                        <h3 className="company-name"> Comcast India Engineering Center (CIEC)</h3>
                        {/* 
                        <p className="role-desc">
                            Actively contributing to the development of scalable and reliable enterprise solutions that power Comcast’s advertising platforms.
                            I focus on building clean, maintainable systems while continuously improving performance and user experience.
                        </p>

                        <ul>
                            <li><span className="desc-title">Application Development:</span> Building scalable features using React and .NET with a focus on maintainability and performance.</li>
                            <li><span className="desc-title">Issue Resolution:</span> Proactively resolving production issues and enhancing system stability.</li>
                            <li><span className="desc-title">Collaboration:</span> Working closely with cross-functional teams to deliver high-quality solutions.</li>
                            <li><span className="desc-title">DevOps Exposure:</span> Supporting CI/CD pipelines and improving deployment efficiency using Azure DevOps.</li>
                        </ul> */}
                    </div>

                    {/* KALAVAI */}
                    <div className="exp-content">
                        <p className="period">June 2024 – July 2025</p>
                        <h4 className="title">Senior Developer</h4>
                        <h3 className="company-name">KalavAI Digital Private Limited – The Viswa Group</h3>

                        {/* <p className="role-desc">
                            Played a key role in designing and delivering secure, scalable backend solutions using modern .NET technologies while collaborating closely with cross-functional teams.
                        </p>

                        <ul>
                            <li><span className="desc-title">API Development:</span> Designed and implemented high-performance RESTful APIs using .NET Core and Clean Architecture.</li>
                            <li><span className="desc-title">Security Implementation:</span> Applied JWT, OAuth 2.0, and ASP.NET Identity to ensure secure authentication and authorization.</li>
                            <li><span className="desc-title">Performance Optimization:</span> Improved system efficiency using async programming, caching, and optimized database queries.</li>
                            <li><span className="desc-title">Documentation & Integration:</span> Created clear API documentation using Swagger to support frontend and third-party integrations.</li>
                        </ul> */}
                    </div>

                    {/* INFOSYS */}
                    <div className="exp-content">
                        <p className="period">Sept 2021 – May 2024</p>
                        <h4 className="title">Senior System Engineer</h4>
                        <h3 className="company-name">Infosys Limited</h3>

                        {/* <p className="role-desc">
                            Contributed to enterprise modernization initiatives by migrating legacy systems to cloud-based architectures and improving overall application reliability.
                        </p>

                        <ul>
                            <li><span className="desc-title">Cloud Migration:</span> Supported migration of on-premise applications to Azure App Services and Virtual Machines.</li>
                            <li><span className="desc-title">Azure Storage Integration:</span> Implemented secure read/write operations using Azure Storage Accounts.</li>
                            <li><span className="desc-title">Data & Integration:</span> Migrated SSIS packages from on-premise environments to Azure VMs.</li>
                            <li><span className="desc-title">Automation & Support:</span> Automated file transfer processes and supported legacy system modernization.</li>
                        </ul> */}
                    </div>
                </div>
            </div>
            <div className="exp-btn">
                <button className="btn-see-more" onClick={() => setOpenModal(true)}>See More<span className="arrow-icon"><BsArrowRightCircleFill /></span></button>
            </div>

            {
                openModal &&
                (
                    <div className="modal-overlay" onClick={() => setOpenModal(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-btn" onClick={() => setOpenModal(false)}>X</button>
                            <h2>Professional Experience</h2>
                            <div className="modal-body">
                                <div className="exp-content">
                                    <h2 className="company-name">Comcast India Engineering Center (CIEC)</h2>
                                    <h4 className="title">Development Engineer II</h4>
                                    <p className="period">July 2025 – Present</p>
                                    <p className="role-desc">
                                        Actively contributing to the development of scalable and reliable enterprise solutions that power Comcast’s advertising platforms.
                                        I focus on building clean, maintainable systems while continuously improving performance and user experience.
                                    </p>

                                    <ul>
                                        <li><span className="desc-title">Application Development:</span> Building scalable features using React and .NET with a focus on maintainability and performance.</li>
                                        <li><span className="desc-title">Issue Resolution:</span> Proactively resolving production issues and enhancing system stability.</li>
                                        <li><span className="desc-title">Collaboration:</span> Working closely with cross-functional teams to deliver high-quality solutions.</li>
                                        <li><span className="desc-title">DevOps Exposure:</span> Supporting CI/CD pipelines and improving deployment efficiency using Azure DevOps.</li>
                                    </ul>
                                </div>

                                {/* KALAVAI */}
                                <div className="exp-content">
                                    <h2 className="company-name">KalavAI Digital Private Limited – The Viswa Group</h2>
                                    <h4 className="title">Senior Developer</h4>
                                    <p className="period">June 2024 – July 2025</p>
                                    <p className="role-desc">
                                        Played a key role in designing and delivering secure, scalable backend solutions using modern .NET technologies while collaborating closely with cross-functional teams.
                                    </p>

                                    <ul>
                                        <li><span className="desc-title">API Development:</span> Designed and implemented high-performance RESTful APIs using .NET Core and Clean Architecture.</li>
                                        <li><span className="desc-title">Security Implementation:</span> Applied JWT, OAuth 2.0, and ASP.NET Identity to ensure secure authentication and authorization.</li>
                                        <li><span className="desc-title">Performance Optimization:</span> Improved system efficiency using async programming, caching, and optimized database queries.</li>
                                        <li><span className="desc-title">Documentation & Integration:</span> Created clear API documentation using Swagger to support frontend and third-party integrations.</li>
                                    </ul>
                                </div>

                                {/* INFOSYS */}
                                <div className="exp-content">
                                    <h2 className="company-name">Infosys Limited</h2>
                                    <h4 className="title">Senior System Engineer</h4>
                                    <p className="period">Sept 2021 – May 2024</p>
                                    <p className="role-desc">
                                        Contributed to enterprise modernization initiatives by migrating legacy systems to cloud-based architectures and improving overall application reliability.
                                    </p>

                                    <ul>
                                        <li><span className="desc-title">Cloud Migration:</span> Supported migration of on-premise applications to Azure App Services and Virtual Machines.</li>
                                        <li><span className="desc-title">Azure Storage Integration:</span> Implemented secure read/write operations using Azure Storage Accounts.</li>
                                        <li><span className="desc-title">Data & Integration:</span> Migrated SSIS packages from on-premise environments to Azure VMs.</li>
                                        <li><span className="desc-title">Automation & Support:</span> Automated file transfer processes and supported legacy system modernization.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default experience;
