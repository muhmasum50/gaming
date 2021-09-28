import Footer from "./Footer"
import MenuItem from "./MenuItem"
import Profile from "./Profile"

interface SideBarProps {
    activeMenu: 'overview' | 'settings' | 'transactions'
}

export default function SideBar(props: SideBarProps) {
    const {activeMenu} = props
    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem icon="ic-menu-overview" title="Overview" href="/member" active={activeMenu === 'overview'} />
                    <MenuItem icon="ic-menu-transaction" title="Transactions" href="/member/transactions" active={activeMenu === 'transactions'} />
                    <MenuItem icon="ic-menu-message" title="Messages" href="/member"/>
                    <MenuItem icon="ic-menu-card" title="Card" href="/member"/>
                    <MenuItem icon="ic-menu-rewards" title="Reward" href="/member"/>
                    <MenuItem icon="ic-menu-settings" title="Settings" href="/member/edit-profile" active={activeMenu === 'settings'}/>
                    <MenuItem icon="ic-menu-logout" title="Logout" href="/member"/>
                
                </div>
                <Footer />
            </div>
        </section>
    )
}
