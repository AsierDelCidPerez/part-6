import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { actOfHideNotification, actOfShowNotificationWithMsg } from "../reducers/notificationReducer"
import {connect} from 'react-redux'

const Notification = props => {
  // const dispatch = useDispatch()
  // const notification = useSelector(state => state.notification)
  const notification = props.notification
  if(notification !== null){
    setTimeout(() => props.actOfHideNotification(null), 5000)
  }
  const style = {
    border: 'solid',
    padding: 10,
    margin: 10,
    borderWidth: 1
  }

  const notificationPane = () => (
    <div style={style}>
      {notification}
    </div>
  )

  return (
    <>
    {notification !== null && notificationPane()}
    </>
  )
}

const mapStateToProps = state => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps, {actOfHideNotification})(Notification)