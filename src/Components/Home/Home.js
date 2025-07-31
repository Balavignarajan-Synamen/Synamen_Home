import React from 'react'
import ParentProps from '../../Props/ParentProps'
import Child from '../../Props/props2/child'
import ParentE from '../../Props/props3Ecommerce/ParentE'
import UserList from '../../Props/props4User/UserList'
import ProductList from '../../Props/Props5Products/ProductList'
import UseStateCounter from '../../Hooks/UseState/UseStateCounter'
import ShowHideText from '../../Hooks/UseState/ShowHideText'
import FormUse from '../../Hooks/UseState/FormUse'
import ThemeToggle from '../../Hooks/UseState/ThemeToggle'
import ItemList from '../../Hooks/UseState/ItemList'
import LoginForm from '../../Hooks/UseState/useState2/LoginForm'
import ParentPop from '../../Hooks/UseState/useState2/popup/ParentPop'
import MinishopCart from '../../Hooks/UseState/useState2/MinishopCart'
import MiniCart from '../../Hooks/UseState/useState2/MinishopCart'
import MiniFriendApp from '../../Hooks/UseState/useState2/MiniFriendApp'

function Home() {
  return (
    <div> 
        {/* <ParentProps />
        <Child /> */}


        {/* <ParentE /> Ecommerce Props Example */}
{/* ----------------------------------------------- */}

         {/* UserCard and UserList Example  */}
          {/* <UserList /> */}


        {/* ProductList and ProductCard Example */}
         {/* <ProductList /> */}



         {/* **UseState Exercise** */}
          {/* <UseStateCounter /> */}
          {/* <ShowHideText /> */}
          {/* <FormUse /> */}
          {/* <ThemeToggle /> */}
          {/* <ItemList /> */}
         {/* **UseState Exercise 2** */}
              {/* <LoginForm /> */}
              {/* <ParentPop /> */}
              {/* <MiniCart /> */}
              <MiniFriendApp />

    </div>
  )
}

export default Home