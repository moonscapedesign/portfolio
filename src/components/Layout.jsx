import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="framer-body-augiA20Il">
            {/* Navigation will go here if extracted */}
            <Outlet />
            {/* Footer will go here if extracted */}
        </div>
    )
}
