import { Component } from "react";
import { Fade } from "react-reveal";
import { contactInfo } from "../../portfolio";
import "./ContactFooter.css";

class ContactFooter extends Component {
  render() {
    const theme = this.props.theme;
    
    return (
      <Fade bottom duration={2000} distance="40px">
        <div className="contact-footer" id="contact">
          <div className="contact-footer-container">
            <h3 className="contact-footer-title" style={{ color: theme.text }}>
              {contactInfo.title}
            </h3>
            
            <div className="contact-details-grid">
              <div className="contact-detail-item">
                <span className="contact-footer-icon">📞</span>
                <div>
                  <h4 style={{ color: theme.text }}>Phone</h4>
                  <p style={{ color: theme.secondaryText }}>
                    <a href={`tel:${contactInfo.phone}`} style={{ color: theme.secondaryText, textDecoration: 'none' }}>
                      {contactInfo.phone}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <span className="contact-footer-icon">✉️</span>
                <div>
                  <h4 style={{ color: theme.text }}>Email</h4>
                  <p style={{ color: theme.secondaryText }}>
                    <a href={`mailto:${contactInfo.email}`} style={{ color: theme.secondaryText, textDecoration: 'none' }}>
                      {contactInfo.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default ContactFooter;