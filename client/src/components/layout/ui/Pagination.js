import React from 'react'
import '../../../App.css';
import { connect } from "react-redux";
import { paginate } from "../../../actions/userVehicles";
import styled from 'styled-components'

const PageDiv = styled.div`
    margin-top: 25px;
    span{
        display: inline-block;
        float: left;
        font-size: 20px;
        padding: 0px 10px;
        background: white;
        color:#AA1826;
        border:1px solid #AA1826;

    }
    .active{
        display: inline-block;
        float: left;
        font-size: 20px;
        padding: 0px 10px;
        background: #AA1826;
        color: white;
    }

`
const Page = ({ paginate, userVehicles: { currentPage, totalPosts, postPerPage } }) => {

    const pageNumbers = [];
    let renderPageNumbers, lastPage = Math.ceil(totalPosts / postPerPage);
    let isFirst = false, isLast = false;
    if (totalPosts !== null) {
        let startPage, endPage;
        if (lastPage < 5) {
            startPage = 1;
            endPage = lastPage;
        } else {
            if (currentPage < 3) {
                startPage = 1;
                endPage = startPage + 4;
                isLast = true;
            } else if (currentPage > lastPage - 2) {
                startPage = lastPage - 4;
                endPage = lastPage;
                isFirst = true;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
                isFirst = true;
                isLast = true;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        renderPageNumbers = pageNumbers.map(number => {
            let classes = currentPage === number ? "active" : '';

            return (
                <span key={number} className={classes} onClick={() => paginate(number)}>{number}</span>
            );
        });
    }
    return (
        <PageDiv className="pagination">
            {isFirst ? <span onClick={() => paginate(1)}>First</span> : null}
            {renderPageNumbers}
            {isLast ? <span onClick={() => paginate(lastPage)}>Last</span> : null}
        </PageDiv>
    )
};

const mapStateToProps = state => ({
    userVehicles: state.userVehicles
});
export default connect(mapStateToProps, { paginate })(Page)