function App() {
  const [offset, setOffset] = useState(-520)
  const [angle, setAngle] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null!)
  const mainRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    headerRef.current.style.setProperty('--bg-offset', `${offset}px`)
    mainRef.current.style.setProperty('--angle', `${angle}deg`)
  }, [offset, angle])

  useEffect(() => {
    let start = 0
    let trueStart = 0
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: end } = e
      const deltaX = (end - start) / 2
      const trueDeltaX = end - trueStart
      // 标尺移动 logic
      if (deltaX < -50) {
        start -= 100
        setOffset(-50)
      }
      else if (deltaX > 50) {
        start += 100
        setOffset(-50)
      }
      else {
        setOffset(offset + deltaX)
      }
      // 卡片旋转 logic
      const deltaAngle = trueDeltaX / 10
      setAngle(angle + deltaAngle)

      e.preventDefault()
    }
    const handleMouseUp = (e: MouseEvent) => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      e.preventDefault()
    }
    const handleMouseDown = (e: MouseEvent) => {
      start = e.clientX
      trueStart = start
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      e.preventDefault()
    }

    window.addEventListener('mousedown', handleMouseDown)
    return () => window.removeEventListener('mousedown', handleMouseDown)
  }, [offset, angle])

  return (
    <div className="h-100vh w-100vw px-10 py-20 screen-bg">
      <div className="relative h-full perspective-3000 preserve-3d border-1px border-gray-500/50 rounded-5 border-solid px-8">
        {/* head */}
        <div ref={headerRef} className="header h-10 flex items-end">
          <div className="gra-bg h-full flex-1" />
          <div className="px-10 text-5 leading-5 text-white/80">数字驱动相关技术</div>
          <div className="gra-bg h-full flex-1" />
        </div>
        {/* card left wp */}
        <div className="card-left absolute left-4 top-0 h-full flex flex-col preserve-3d justify-center">
          <div className="mb-10 w-80 origin-right rotate-y-25 rounded-2 p-8 shadow shadow-light/30 shadow-inset card-bg -translate-z-40">
            <div className="tag mb-3 w-fit border-1px border-white/30 rounded-full px-4 py-1 text-5 font-bold">
              TTS相关技术
            </div>
            <p className="mb-3 text-3 leading-5 text-white/60">
              TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术
              TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术
            </p>
            <div className="h-30 rounded bg-black/30" />
          </div>
          <div className="w-80 origin-right rotate-y-25 rounded-2 p-8 shadow shadow-light/30 shadow-inset card-bg -translate-z-40">
            <div className="tag mb-3 w-fit border-1px border-white/30 rounded-full px-4 py-1 text-5 font-bold">
              TTS相关技术
            </div>
            <p className="mb-3 text-3 leading-5 text-white/60">
              TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术
              TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术
            </p>
            <div className="h-30 rounded bg-black/30" />
          </div>
        </div>
        {/* card right wp */}
        <div className="card-left absolute right-4 top-0 h-full flex flex-col preserve-3d justify-center">
          <div className="mb-10 w-80 origin-left rounded-2 p-8 shadow shadow-light/30 shadow-inset card-bg -translate-z-40 -rotate-y-25">
            <div className="tag mb-3 w-fit border-1px border-white/30 rounded-full px-4 py-1 text-5 font-bold">
              TTS相关技术
            </div>
            <p className="mb-3 text-3 leading-5 text-white/60">
              TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术
              TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术
            </p>
            <div className="h-30 rounded bg-black/30" />
          </div>
          <div className="w-80 origin-left rounded-2 p-8 shadow shadow-light/30 shadow-inset card-bg -translate-z-40 -rotate-y-25">
            <div className="tag mb-3 w-fit border-1px border-white/30 rounded-full px-4 py-1 text-5 font-bold">
              TTS相关技术
            </div>
            <p className="mb-3 text-3 leading-5 text-white/60">
              TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术
              TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术TTS相关技术
            </p>
            <div className="h-30 rounded bg-black/30" />
          </div>
        </div>
        {/* main  */}
        <div ref={mainRef} className="main">
          <div className="card-wp preserve-3d">
            <div className="card-item grid place-items-center rounded text-3 text-white/90" />
            <div className="card-item grid place-items-center rounded text-3 text-white/90" />
            <div className="card-item grid place-items-center rounded text-3 text-white/90" />
            <div className="card-item grid place-items-center rounded text-3 text-white/90" />
            <div className="card-item grid place-items-center rounded text-3 text-white/90" />
            <div className="card-item grid place-items-center rounded text-3 text-white/90" />
          </div>
          <div className="ground" />
        </div>
      </div>
    </div>
  )
}

export default App
