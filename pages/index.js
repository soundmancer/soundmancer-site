
export default function Home() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🎧 SoundMancer</h1>
      <p>Bem-vindo ao universo sonoro criado por Aguiar.</p>
      <ul>
        <li><a href="/music" style={{ color: '#0ff' }}>Músicas</a></li>
        <li><a href="/videos" style={{ color: '#0ff' }}>Videoclipes</a></li>
        <li><a href="/about" style={{ color: '#0ff' }}>Sobre</a></li>
      </ul>
    </div>
  );
}
