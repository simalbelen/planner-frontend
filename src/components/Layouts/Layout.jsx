import { useLocation, useParams } from 'react-router-dom'
import NavigationBar from '../NavigationBar/NavigationBar'
import { AppRouter } from '../routes/AppRouter'

export function Layout() {
    const location = useLocation();
    const params = useParams()

    const dict_titles = {
        "/":"Home",
        "/planner":"Planner",

    }

    console.log({params})
    console.log({location})

    return (
        <>
            <NavigationBar title={dict_titles[location.pathname]}/>
            <AppRouter />
        </>
    )
}
