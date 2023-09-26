import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
    return <header className='flex justify-between bg-slate-300 p-4'>
        <Logo />
        <Nav />
    </header>
}

export default Header;