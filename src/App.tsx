import './App.css'

function App() {
  const asciiArt = `██████╗ ██████╗ ██████╗ ███╗   ██╗███████╗██╗     ██╗██╗   ██╗███████╗    ████████╗ █████╗ ███╗   ██╗████████╗██╗██╗   ██╗███████╗
██╔════╝██╔═══██╗██╔══██╗████╗  ██║██╔════╝██║     ██║██║   ██║██╔════╝    ╚══██╔══╝██╔══██╗████╗  ██║╚══██╔══╝██║██║   ██║██╔════╝
██║     ██║   ██║██████╔╝██╔██╗ ██║█████╗  ██║     ██║██║   ██║███████╗       ██║   ███████║██╔██╗ ██║   ██║   ██║██║   ██║███████╗
██║     ██║   ██║██╔══██╗██║╚██╗██║██╔══╝  ██║     ██║██║   ██║╚════██║       ██║   ██╔══██║██║╚██╗██║   ██║   ██║██║   ██║╚════██║
╚██████╗╚██████╔╝██║  ██║██║ ╚████║███████╗███████╗██║╚██████╔╝███████║       ██║   ██║  ██║██║ ╚████║   ██║   ██║╚██████╔╝███████║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝ ╚═════╝ ╚══════╝       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝ ╚═════╝ ╚══════╝`

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn-close"></span>
          <span className="btn-minimize"></span>
          <span className="btn-maximize"></span>
        </div>
        <span className="terminal-title">tantius@cornelius: ~</span>
      </div>
      <div className="terminal-body">
        <pre className="ascii-art">{asciiArt}</pre>
        <div className="terminal-prompt">
          <span className="prompt-user">tantius@cornelius</span>:<span className="prompt-path">~</span>$ <span className="cursor">_</span>
        </div>
      </div>
    </div>
  )
}

export default App