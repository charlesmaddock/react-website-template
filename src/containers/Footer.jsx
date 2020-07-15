import React from "react"
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
// Custom components
import { AlignCenter, StyledLink } from "../components/general"

export default () => (
  <AlignCenter>
    <Grid
      container
      style ={{paddingTop: 30, paddingBottom: 20}}
    >
      <Grid item style={{marginRight: "5%"}}>
        <h3 style = {{marginBottom: 18}}>
          Contact us
        </h3>
        <p style={{marginBottom: 6}}>
          <StyledLink
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:hello@clmte.com"
          >
            <FooterLink icon={<MailIcon/>} text="hello@clmte.com"/>
          </StyledLink>
          <StyledLink
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:press@clmte.com"
          >
            <FooterLink icon={<MailIcon/>} text="press@clmte.com"/>
          </StyledLink>
          <StyledLink
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:ir@clmte.com"
          >
            <FooterLink icon={<MailIcon/>} text="ir@clmte.com"/>
          </StyledLink>
        </p>
      </Grid>

      <Grid item style={{marginRight: "5%"}}>
        <h3 style = {{marginBottom: 18}}>
          Stay in touch 
        </h3>
        <StyledLink
          href="https://www.instagram.com/clmte.sweden/?hl=sv"
        >
          <FooterLink icon={<InstagramIcon/>} text="Instagram"/>
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/company/42396949/"
        >
          <FooterLink icon={<LinkedInIcon/>} text="LinkedIn"/>
        </StyledLink>
      </Grid>
    </Grid>

    <Grid 
      container 
      alignItems="center"
      style={{
        borderTop: '1px solid white', 
        paddingTop: 12, 
        opacity: 0.7, 
        fontSize: 12
      }}
    >
      <Grid item>
        <p>
          CLMTE 2020
        </p>
      </Grid>
      <Grid item style={{marginLeft: 10}}>
        <StyledLink 
          style={{fontSize: 12}} 
          href="privatePolicy.pdf"
        >
          
        </StyledLink>
      </Grid>
    </Grid>
  </AlignCenter>
)

const FooterLink = ({icon, text}) => (
  <div>
    <div style={{display: "inline-block", verticalAlign: "middle"}}>
      {icon}
    </div>
    <div style={{marginLeft: 4, marginBottom: 4, display: "inline-block", verticalAlign: "middle"}}>
      {text}
    </div>
  </div>
)