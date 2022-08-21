import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { actOfShowNotificationWithMsg } from "../reducers/notificationReducer"

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)
  if(notification !== null){
    setTimeout(() => dispatch(actOfShowNotificationWithMsg(null)), 5000)
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

export default Notification