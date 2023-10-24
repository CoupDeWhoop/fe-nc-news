import { GiNewspaper } from 'react-icons/gi';
export default function Header () {
    return (
        <header className="header">
            <div className="icon">
                <GiNewspaper />
            </div>
            <h1>NC News</h1>
        </header>
    )
}