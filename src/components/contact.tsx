import { Button, Form, Input } from "antd"
import { EnvironmentOutlined, InboxOutlined, PhoneOutlined } from '@ant-design/icons';
// import type { UploadProps } from 'antd';
// import { message, Upload } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";



// const { Dragger } = Upload;
const LocationMap = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // run once on load
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <iframe
            title="location-map"
            src="https://www.google.com/maps?q=10.939309,79.256687&z=14&output=embed"
            width={"100%"}
            height={isMobile ? "200" : "400"}
            style={{ border: 2 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    );
};

// const props: UploadProps = {
//     name: 'file',
//     multiple: true,
//     action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
//     onChange(info) {
//         const { status } = info.file;
//         if (status !== 'uploading') {
//             console.log(info.file, info.fileList);
//         }
//         if (status === 'done') {
//             message.success(`${info.file.name} file uploaded successfully.`);
//         } else if (status === 'error') {
//             message.error(`${info.file.name} file upload failed.`);
//         }
//     },
//     onDrop(e) {
//         console.log('Dropped files', e.dataTransfer.files);
//     },
// };

const contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className="contact-section">
            <h2 className="heading">Contact <span className="blue-text">Me</span></h2>
            <h3 className="sub-heading">In order to discuss about more about project and technical side. Please contact me by mobile and social networks</h3>
            <div className="contact-container">
                <div className="contact-form">
                    <Form name="contact" method="POST" data-netlify="true" netlify-honeybot='bot-field'>
                        <p className="contact-title">
                            <span className="summary-greetings">
                                Let's Connect !!!
                                <i className="corner tl"></i>
                                <i className="corner tr"></i>
                                <i className="corner bl"></i>
                                <i className="corner br"></i>
                            </span>
                        </p>
                        <input type="hidden" name="form-name" value="contact" />
                        {/* Honeypot (spam protection)  */}
                        <input type="hidden" name="bot-field" />
                        <Form.Item>
                            <Input placeholder="First Name" name="firstname" onChange={handleChange} required />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Email" name="email" onChange={handleChange} required />
                        </Form.Item>
                        <Form.Item>
                            <TextArea placeholder="Text your message here" rows={5} name="message" onChange={handleChange} required />
                        </Form.Item>
                        {/* <Form.Item>
                            <Dragger {...props} name="file">
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            </Dragger>
                        </Form.Item> */}
                        <Form.Item>
                            <Button className='submit-btn' htmlType='submit' type="primary" shape="round"><b>SEND MESSAGE</b></Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="contact-information">
                    <div className="map-container">
                        <p>WHERE TO FIND ME</p>
                        <div className="location-map">
                            <><LocationMap /></>
                        </div>
                    </div>
                    <div className="contact-info">
                        <p>CONTACTS</p>
                        <>
                            <h4><span><EnvironmentOutlined /></span> Kabisthalam, Thanjavur, Tamilnadu</h4>
                            <h4><span><InboxOutlined /></span> karthikeyan.s1311@gmail.com</h4>
                            <h4><span><PhoneOutlined /></span> +91 - 9952721940</h4>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact
