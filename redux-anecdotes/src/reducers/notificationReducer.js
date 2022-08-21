import { useSelector } from "react-redux"

const notificationReducer = (state=null, action) => {
    switch(action.type){
        case 'SET_NOT':
            return action.msg
        default:
            return state
    }
}

export const actOfShowNotificationWithMsg = msg => {
    return {
        type: 'SET_NOT',
        msg
    }
}

export const actOfHideNotification = () => {
    return {
        type: 'SET_NOT',
        msg: null
    }
}

export default notificationReducer