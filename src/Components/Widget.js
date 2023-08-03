import React from 'react'

export default function Widget(props) {
    const showWidget = props.showWidget
    const changeShowWidget = props.changeShowWidget


  return (
    showWidget?<div>Widget</div>:""
  )
}
