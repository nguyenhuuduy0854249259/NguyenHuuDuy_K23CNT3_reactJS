import React from 'react'

export default function NhdJsxExpression() {
    // biến 
    const name="Nguyễn Hữu Duy";
    // biến đối tượng
    const user = {
        firstName:"Duy ",
        lastName:" Nguyễn"
    }
    // hàm
    const fullName=(user)=>{
        return user.firstName + '' + user.lastName ;
    }
    // element
    const element =(
        <div>
            {/* Biểu thức jsx */}
            <h2> {fullName(user)}   </h2>
            <hr/>
            <h3> Chào mừng bạn đã đến với bình nguyên vô tận, {name}</h3>
        </div>
    );

    // Ham
    const sayWelcome = (name)=>{
        if(name){
            return <h3> Welcome to {name}</h3>
        }else{
            return <h3> Welcome to Fit-NTU - K23CNT3 {name}</h3>
        }
    }
  return (
    <div>
        <h1> NHD - JSX Expression</h1>
        {/* sử dụng biến element */}
        {element}

         <hr/>
         {sayWelcome()}
         <hr/>
         {sayWelcome("Nguyễn Văn Huy")}
    </div>
  )
}
