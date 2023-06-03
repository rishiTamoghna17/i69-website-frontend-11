import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { set_user_value_from_localstorage } from '../../redux/actions/user';
import { connect } from 'react-redux';

const LayoutDefault = (props) => {
  const { children } = props
  // redux 
  const { set_user_value_from_localstorage, signup, uid } = props
  console.log('uid',uid)

  useEffect(() => {
    let userInfo = {
      signup: localStorage.getItem('signup'),
      uid: localStorage.getItem('uid')
    }
    set_user_value_from_localstorage(userInfo)
  }, [])

  return (
    <>
      {signup != null && uid == null && <Header navposition="right" className="reveal-from-bottom" hidesignup={true} />}

      {uid != null && <Header navposition="right" className="reveal-from-bottom" hidesignin={true} hidesignup={true} />}

      {signup == null && uid == null && <Header navposition="right" className="reveal-from-bottom" />}

      <main className="site-content">
        {children}
      </main>
      <Footer />
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    uid: state.UserReducer.uid,
    signup: state.UserReducer.signup,
  }
}
export default connect(mapStateToProps, { set_user_value_from_localstorage })(LayoutDefault)