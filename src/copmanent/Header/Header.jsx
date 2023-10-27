import './style.css';

export default function Header() {
  return (
    <div className='heade'>
        <div className='heade2'>
           <img className='logo' src="src/copmanent/Header/img/logo (7).png" alt="" />
           <button className='headbut'><img className='imm' src="src/copmanent/Header/img/menu.png" alt="" /> <p className='ppp'>Каталог</p></button>
           <input  className='headinp'  type="search"  placeholder='Найти товар'  />
           <img className='headsearch' src="src/copmanent/Header/img/search.png" alt="" />
           <img className='menu-icon' src="src/copmanent/Header/img/MainMenu.png" alt="" />
           <img className='menu-iconn' src="src/copmanent/Header/img/MainMenu (2).png" alt="" />
           <a href="login"><img className='menu-iconnn' src="src/copmanent/Header/img/9102311_login_user_profile_account_password_icon (1).png" alt="" /></a>
           <img className='user' src="src/copmanent/Header/img/UserMenuItem.png" alt="" />
        </div>
    </div>
  )
}
