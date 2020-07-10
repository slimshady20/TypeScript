import React from "react";
import {Redirect} from 'react-router-dom'
import {HomePage} from '../pages'
/*import {Cat, Clock, MyChatBot} from "../components";*/


const routerConfig=[
    {
    path: '/',
    exact : true,
    component: ()=> <Redirect to='/home'/>
    },
    {
        path: '/home',
        exact: true,
        component: HomePage
    },
    ]
export default routerConfig