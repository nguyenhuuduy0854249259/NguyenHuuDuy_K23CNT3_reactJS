import React from 'react'
import NhdLoginComp from './NhdLoginComp';
import NhdLogoutComp from './NhdLogoutComp';

export default function NhdLoginControl(props) {
    var isLoggedIn = props.isLoggedIn;
    var nhdLoginControl = isLoggedIn?<NhdLoginComp />: <NhdLogoutComp />;
  return (
    <div>
      {nhdLoginControl}
    </div>
  )
}