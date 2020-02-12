import React, { Fragment } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { QuickLinks } from '../user/homepage/QuickLinks';
import { Row, Col, Icon, Layout } from 'antd';

const { Header, Footer } = Layout;




export const EmpireFooter = () => {
    const data = [
        {
            title: "Available Inventory",
            links: [
                ["/inventory", "View Our Inventory"],
                ["/inventory", "Vehicles by Make"],
                ["/inventory", "Vehicles by Model"],
                ["/inventory", "Vehicles by Year"],


            ],
        },
        {
            title: "Financing",
            links: [
                ["/", "Financing"],
                ["/", "Apply for a Loan"],
            ],
        },
    ];

    return (
        <Footer style={{ background: 'black' }}>
            <Row>
                <Col span={6}><Logo /><Copyright /></Col>
                <Col span={6}><QuickContact /></Col>
                <Col span={6}>              {data.map((section, i) => (
                    <FooterLinkSection
                        title={section.title}
                        data={section.links}
                        key={i}
                    />
                ))}
                </Col>
                <Col span={6}><SocialMedia /></Col>
            </Row>
            <Row>
                <Col span={24}><BottomFooter /> <DevelopmentWatermark /></Col>

            </Row>
        </Footer>
    )
}




const SocialMedia = () => {
    return (
        <Connect>
            <span>Connect with us</span>
            <ul>
                <li>
                    <a>
                        <Icon type="facebook" />
                    </a>
                </li>
                <li>
                    <a>
                        <Icon type="instagram" />
                    </a>
                </li>
                <li>
                    <a>
                        <Icon type="linkedin" />
                    </a>
                </li>
                <li>
                    <a>
                        <Icon type="youtube" />
                    </a>
                </li>
            </ul>
        </Connect>
    );
};

const QuickContact = () => {
    return (
        <EmpireContact>
            <h2>Empire Motors Sales And Leasing</h2>
            <span>Call<Icon type="phone" /></span>

            <a href="tel:+17787534972">+1 (778) 753-4972</a>

            <span>Email<Icon type="mail" /></span>

            <a href="mailto:sales@empiremotors.ca" >sales@empiremotors.ca</a>

            <span>Fax <Icon type="phone" /></span>
            <Link href="tel:+17787534972">
                <a>+1 (778) 753-0502</a>
            </Link>
        </EmpireContact>
    );
};


const FooterLinkSection = (props) => {
    const { data, title } = props;
    return (

        <Fragment>
            <LinkList>
                {data.map((link, i) => {
                    const [href, label] = data[i];
                    return (
                        <li>
                            <Link href={href}>
                                <a>{label}</a>
                            </Link>
                        </li>
                    );
                })}
            </LinkList>
        </Fragment>
    );
};

const Copyright = () => {
    const copyrightYear = 2020
    return (
        <span style={{ color: '#a0abb1', fontSize: '1rem', display: 'inline-block' }}>
            &copy; {copyrightYear} Empire Motors
      </span>
    );
};


const BottomFooter = () => {
    const links = [
        {
            label: "Privacy policy",
            href: "/",
        },
        {
            label: "Cookies",
            href: "/",
        },
        {
            label: "Contact Us",
            href: "/",
        },
        {
            label: "Website Terms and Conditions",
            href: "/",
        },
        {
            label: "Sitemap",
            href: "/",
        },
    ];
    return (
        <BottomFooterContianer>
            <ul>
                {links.map((item, i) => (
                    <li>
                        <Link href={item.href}>
                            <a>{item.label}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </BottomFooterContianer>
    );
};

const DevelopmentWatermark = () => {
    return (
        <WaterMark >
            Site by{" "}
            <Link href="/">
                <a>Company</a>
            </Link>
        </WaterMark>
    );
};


export const NavBarContact = () => {
    return (
        <NavBarContactContainer >

            <a href="tel:+17787534972">Call Us <Icon type="phone" /></a>
            <a href="mailto:sales@empiremotors.ca" >Email Us<Icon type="mail" /></a>

        </NavBarContactContainer>
    );
};

const NavBarContactContainer = styled.div`
display:inline-flex;
vertical-align: text-bottom;
a{
    background: black;
    padding: 0 2rem;
    color: white;
    font-size: 16px;
    font-family: inherit;
    text-transform:uppercase;  
    i{
        padding: 0 1rem;
    }
    &:hover{
        border: 1px solid white;
        
    }
}

`

export const Logo = styled.a`
margin: 16px 24px 16px 0;
float: left;
background-image: url("/images/empire-motors-logo.png");
background-repeat: no-repeat;
background-size: cover;
width: 241px;
height: 70px;
margin-right: rem-calc(100);
`
export const EmpireHeader = styled(Header)`
background: black;
padding: rem-calc(10 0);
position: relative;
z-index: 5;
-webkit-box-shadow: 0 0 15px 1px hsla(0, 0%, 49.8%, 0.1);
box-shadow: 0 0 15px 1px hsla(0, 0%, 49.8%, 0.1);
height: 105px ;`

const EmpireContact = styled.div`
h2{
    color:white;
    font-family: inherit;
    font-size: 1rem;
    font-weight: bold;
}
span{
    text-transform:uppercase;
    color:white;
    display:block;
    padding: 5% 0;
    i{
        padding: 10px;
        font-size:1rem;
    }
}
a{
    color:rgba(255, 255, 255, 0.75);
}
`


const Connect = styled.div`
span {
    font-weight: 700;
    display: block;
    text-transform: uppercase;
    padding-left:10px;
    letter-spacing: 2px;
    color:white;
  }
  ul {
    @include reset(ul);
    margin-top: 10%;
    padding: 0;
    li {
      display: inline-block;
      margin-right: rem-calc(10);
      &:last-child {
        margin-right: 0;
      }
    }
    a {
      color: #fff;
      font-size:2rem;
      padding: 10px;
    }
  }

`

const LinkList = styled.ul`
@include reset(ul);
li {
  display: block;
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 1rem;
  a {
    color: #fff;
  }
}

`

const BottomFooterContianer = styled.div`
text-align:center;
padding: 50px;
a {
  color: #a0abb1;
}
ul{
    @include reset(ul);
    font-size: rem-calc(14);
    li {
      display: inline-block;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
}
`


const WaterMark = styled.span`
font-size: 1rem;
color: rgba(255, 255, 255, 0.1);
a {
  color: rgba(255, 255, 255, 0.1);
  font-weight: bold;
}`