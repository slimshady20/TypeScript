import React from "react";
import {Redirect} from 'react-router-dom'
import {HomePage} from '../progress'
import {Cat, Clock, MyChatBot} from '../components/'
import AdvancedCounter from "../components/fp/AdvancedCounter";

const routerConfig = [
    { path: '/', exact: true, component: () => <Redirect to="/home"/> },
    { path: '/home', component: HomePage },
    { path: '/chat', component: MyChatBot },
    { path: '/cat', component: Cat },
    { path: '/clock', component: Clock },
    { path: '/counter', component: AdvancedCounter },
]
export default routerConfig