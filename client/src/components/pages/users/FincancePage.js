import React from 'react'
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navbar from '../../layout/user/navbar/Navbar'
import { FinanceBanner } from '../../layout/user/finance/FinanceBanner'
import { ContactText } from '../../layout/user/about/About'
import { Finance } from '../../layout/user/finance/Finance'
import { HoursOfOperation } from '../../layout/ui/HoursOfOperation'
import { Logo, EmpireHeader, EmpireFooter, NavBarContact } from '../../layout/ui/Layout'
import Map from '../../layout/ui/Map'
const { Content } = Layout;




const FinancePage = () => {

    return (
        <Layout className="layout">
            <EmpireHeader>
                <Logo href="/" />
                <Navbar />
                <NavBarContact />
            </EmpireHeader>
            <Content >
                <FinanceBanner />
                <Finance />
                <ContactText />
                <HoursOfOperation />
                <Map />
            </Content>
            <EmpireFooter />
        </Layout>
    )
}

export default FinancePage