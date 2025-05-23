import chefClaudeIcon from '../assets/chef-claude-icon.svg';

export default function Header() {
    return (
        <header className='header'>
            <div className='logo-section'>
                <img src={chefClaudeIcon} alt="Chef Claude Icon" />
                <h1>Chef Claude - Develop</h1>
            </div>
        </header>
    )
}