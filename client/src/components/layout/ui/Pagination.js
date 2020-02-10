import React from 'react'
import { Pagination } from 'antd';

export const Page = ({ totalPosts, postPerPage, paginate }) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        // <nav>
        <div>hi</div>
        //     <ul>
        //         {pageNumbers.map(number => (
        //             <li key={number} 
        //     )

        //         )}


        //     </ul>
        // </nav>
    )
}
