import chefClaudeIcon from '../assets/chef-claude-icon.svg';

export default function Header() {
    return (
        <header className='header'>
            <button
                className='logo-section'
                onClick={() => location.reload()}
                type="button"
                aria-label="Reload page"
                style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
            >
                <img src={chefClaudeIcon} alt="Chef Claude Icon" />
                <h1>Chef Claude</h1>
            </button>
        </header>
    )
}