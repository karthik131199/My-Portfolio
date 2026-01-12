import { Button, Form, Input } from "antd";
import { EnvironmentOutlined, InboxOutlined, PhoneOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";

// LocationMap Component
const LocationMap = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <iframe
      title="location-map"
      src="https://www.google.com/maps?q=10.939309,79.256687&z=14&output=embed"
      width="100%"
      height={isMobile ? "200" : "400"}
      style={{ border: "2px solid #000" }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

// Contact Component
const Contact = () => {
  const [form] = Form.useForm();

  return (
    <div className="contact-section">
      <h2 className="heading">
        Contact <span className="blue-text">Me</span>
      </h2>
      <h3 className="sub-heading">
        In order to discuss more about projects and technical side, please contact me via mobile or social networks
      </h3>

      <div className="contact-container">
        {/* Form Section */}
        <div className="contact-form">
          <form name="contact" method="POST" data-netlify="true">
            {/* Netlify hidden inputs */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            {/* “Let's Connect !!!” Title */}
            <p className="contact-title">
              <span className="summary-greetings">
                Let's Connect !!!
                <i className="corner tl"></i>
                <i className="corner tr"></i>
                <i className="corner bl"></i>
                <i className="corner br"></i>
              </span>
            </p>

            {/* Ant Design Form */}
            <Form form={form} layout="vertical">
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input name="name" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email" }
                ]}
              >
                <Input name="email" />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: "Please enter your message" }]}
              >
                <Input.TextArea name="message" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  SEND MESSAGE
                </Button>
              </Form.Item>
            </Form>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="contact-information">
          <div className="map-container">
            <p>WHERE TO FIND ME</p>
            <div className="location-map">
              <LocationMap />
            </div>
          </div>

          <div className="contact-info">
            <p>CONTACTS</p>
            <h4><EnvironmentOutlined /> Kabisthalam, Thanjavur, Tamilnadu</h4>
            <h4><InboxOutlined /> karthikeyan.s1311@gmail.com</h4>
            <h4><PhoneOutlined /> +91 - 9952721940</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
