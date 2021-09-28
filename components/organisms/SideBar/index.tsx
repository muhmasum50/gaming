import Footer from "./Footer"
import MenuItem from "./MenuItem"
import Profile from "./profile"

export default function SideBar() {
    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem title="Overview"/>
                    <MenuItem title="Transactions"/>
                    <MenuItem title="Messages"/>
                    <MenuItem title="Card"/>
                    <MenuItem title="Reward"/>
                    <MenuItem title="Settings"/>
                    <MenuItem title="Logout"/>
                
                </div>
                <Footer />
            </div>
        </section>
    )
}
