import trollFace from '/troll-face-png-19697.png'

export default function Header() {

    return (
        <header className="header">
            <img 
                src={trollFace} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}