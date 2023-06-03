import React, { useEffect, useState } from 'react';
import { set_user_value_from_localstorage } from '../../redux/actions/user';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { CircularProgress } from '@material-ui/core';

const PrivatLayout = (props) => {
    const [loading, setLoading] = useState(true)
    const route = useRouter()
    const { children } = props
    // redux 
    const { set_user_value_from_localstorage, signup, uid } = props

    useEffect(() => {
        let userInfo = {
          signup: localStorage.getItem('signup'),
          uid: localStorage.getItem('uid')
        }
        set_user_value_from_localstorage(userInfo)
      }, [])

    useEffect(() => {
        if (!localStorage.getItem('uid')) {
            route.push('/signin')
            return
        }
        setLoading(false)
    }, [])
    if (loading) return <div className='loaderWrapper'><CircularProgress /></div>
    return (
        <div>
            {children}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        uid: state.UserReducer.uid,
        signup: state.UserReducer.signup,
    }
}
export default connect(mapStateToProps, { set_user_value_from_localstorage })(PrivatLayout)