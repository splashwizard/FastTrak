import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getUsers } from '../../../../actions/users'
import {
    Icon,
    PageHeader,
    Table,
    Tag
} from 'antd';
import 'antd/dist/antd.css';
import Alert from '../../ui/Alert'


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sortDirections: ['descend', 'ascend'],
        sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sortDirections: ['descend', 'ascend'],
        sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
        title: 'Role',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    }
];






const ViewTeam = ({ getUsers, auth: { user }, users: { loading, users } }) => {
    useEffect(() => {
        getUsers();
    }, [getUsers])

    let counter = 0;

    const activeusers = users.map((user) => {
        return {
            key: counter++,
            name: user.name,
            email: user.email,
            tags: ['admin']
        }
    })



    return loading && users === null ? <Icon type="loading" /> :
        <Fragment>
            <div>
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="View Team"
                    subTitle="View All The Members Of Your Team" />
                <Alert />

                <Table columns={columns} dataSource={activeusers} />
            </div>
        </Fragment>

}

ViewTeam.propTypes = {
    getUsers: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
    auth: state.auth,
    users: state.users
})
export default connect(mapStateToProps, {
    getUsers
})(ViewTeam)