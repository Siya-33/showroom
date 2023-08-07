export default function Screen1() {
  const [angle, setAngle] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null!)
  const [active, setActive] = useState<number | undefined>()
  const initialText = '基于神经网络的自主全栈式ai算法生成的数字人在经过前期训练后从收到语音信息到做出回复将经历语音输入，STT语音转文本，LLM大语言模型等总计六个步骤'
  const [realAnswer, setRealAnswer] = useState<string>(initialText)

  const timer = useRef<number>()

  const [signal, setSignal] = useState(true)
  const animationText = useCallback(async (text: string) => {
    let s = ''
    let i = 0
    if (timer.current) {
      clearInterval(timer.current)
      s = ''
      i = 0
    }
    timer.current = setInterval(() => {
      s += text[i]
      setRealAnswer(s)
      i++
      if (i >= text.length)
        clearInterval(timer.current)
    }, 50) as any as number
  }, [])

  const spin = useCallback(() => {
    requestAnimationFrame(() => {
      if (signal)
        setAngle(angle + 0.1)
    })
  }, [angle, signal])

  useEffect(() => {
    spin()
  }, [spin])

  useEffect(() => {
    mainRef.current.style.setProperty('--angle', `${angle}deg`)
  }, [angle])

  useEffect(() => {
    let start = 0
    let trueStart = 0
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: end } = e

      const trueDeltaX = end - trueStart

      // 卡片旋转 logic
      const deltaAngle = trueDeltaX / 10
      setAngle(angle + deltaAngle)

      e.preventDefault()
    }
    const handleMouseUp = (e: MouseEvent) => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      // 关闭弹窗
      setActive(undefined)
      // 开始自动旋转
      setSignal(true)

      e.preventDefault()
    }
    const handleMouseDown = (e: MouseEvent) => {
      start = e.clientX
      trueStart = start
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      // 停止自动旋转
      setSignal(false)
      e.preventDefault()
    }

    window.addEventListener('mousedown', handleMouseDown)
    return () => window.removeEventListener('mousedown', handleMouseDown)
  }, [angle])

  useEffect(() => {
    if (active === undefined) {
      mainRef.current.style.animationPlayState = 'running'
      animationText(initialText)
      return () => {
        animationText('')
      }
    }

    if (active === 0)
      animationText('测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试')

    if (active === 1)
      animationText('测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试')
    if (active === 2)
      animationText('测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试')
    if (active === 3)
      animationText('测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试')
    if (active === 4)
      animationText('测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试')

    mainRef.current.style.animationPlayState = 'paused'
    return () => {
      animationText('')
    }
  }, [active, animationText])

  function handleClick(val: number, _angle: number) {
    // mainRef.current.style.setProperty('--angle', `${angle}deg`)
    setActive(val)
  }

  function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), ms)
    })
  }

  function base1() {
    return `absolute bottom-400px left-50% w-300px translate-z-800px
      overflow-hidden rounded-10px bg-center  bg-contain bg-no-repeat
      backdrop-blur-5px transition-all translate-y-0 opacity-100 shadow-2xl
      scale-90 visible
    `
  }

  function base1Hidden() {
    return `absolute bottom-400px left-50% w-300px translate-z-800px
      overflow-hidden rounded-10px bg-center  bg-contain bg-no-repeat
      backdrop-blur-5px transition-all -translate-y-10px opacity-0
      shadow-2xl invisible scale-80
    `
  }

  function base2() {
    return `absolute top-190px left-160px
    w-340px bg-contain bg-center bg-no-repeat
    overflow-hidden rounded-10px backdrop-blur-5px scale-85 opacity-100
    transition-all shadow-2xl rotate-y-25 translate-z-100px`
  }

  function base2Hidden() {
    return `absolute top-190px left-160px
      w-340px bg-contain bg-center bg-no-repeat
      overflow-hidden rounded-10px backdrop-blur-5px
      scale-75 opacity-0 transition-all
    `
  }

  function getTTSClassName() {
    if (active === 0) {
      return `${base1()}
        aspect-1.7
        bg-[url(@/bg/tts-2.png)]
      `
    }

    return `${base1Hidden()}
      aspect-1.7
      bg-[url(@/bg/tts-2.png)]
    `
  }
  function getTTS2ClassName() {
    if (active === 0) {
      return `${base2()}
        aspect-0.437
        bg-[url(@/bg/tts-3.png)]
      `
    }
    return `${base2Hidden()}
      aspect-0.437
      bg-[url(@/bg/tts-3.png)]
    `
  }

  function getSSTClassName() {
    if (active === 1) {
      return `${base1()}
        aspect-1.4
        bg-[url(@/bg/stt-2.png)]
      `
    }
    return `${base1Hidden()}
      aspect-1.4
      bg-[url(@/bg/stt-2.png)]
    `
  }

  function getSST2ClassName() {
    if (active === 1) {
      return `${base2()}
        aspect-0.48
        bg-[url(@/bg/stt-3.png)]
      `
    }
    return `${base2Hidden()}
      aspect-0.48
      bg-[url(@/bg/stt-3.png)]
    `
  }

  function getYuClassName() {
    if (active === 2) {
      return `${base1()}
        aspect-1.4
        bg-[url(@/bg/yu-2.png)]
      `
    }
    return `${base1Hidden()}
      aspect-1.4
      bg-[url(@/bg/yu-2.png)]
    `
  }

  function getYanClassName() {
    if (active === 3) {
      return `${base1()}
        aspect-1.4
        bg-[url(@/bg/yan-2.png)]
      `
    }
    return `${base1Hidden()}
      aspect-1.4
      bg-[url(@/bg/yan-2.png)]
    `
  }

  function getLanClassName() {
    if (active === 4) {
      return `${base1()}
        aspect-1.4
        bg-[url(@/bg/lan-2.png)]
      `
    }
    return `${base1Hidden()}
      aspect-1.4
      bg-[url(@/bg/lan-2.png)]
    `
  }

  return (
    <div className="relative h-full perspective-3000 preserve-3d bg-[url(@/bg/screen1-bg.png)] bg-contain bg-center bg-no-repeat px-10 py-20">

      {/* main  */}
      {/* tts answer */}
      <div className={getTTSClassName()} />

      <div className={getTTS2ClassName()} />

      {/* sst */}
      <div className={getSSTClassName()} />

      <div className={getSST2ClassName()} />

      {/* 语音输入 */}
      <div className={getYanClassName()} />

      {/* 语音数字人 */}
      <div className={getYuClassName()} />

      {/* 大语音模型 */}
      <div className={getLanClassName()} />

      {/* 水滴助手 */}
      <div className="droplen overflow-hidden">
        <div className="brand mb-4 w-fit text-4 font-bold tracking-widest text-white">水滴助手</div>

        <div className="test" />

        {realAnswer}
      </div>

      <div />

      <div
        ref={mainRef}
        className="main">
        <div className="card-wp preserve-3d">
          <div
            data-angle="0"
            className="card-item grid place-items-center rounded bg-[url(@/bg/tts-1.png)] text-3 text-white/90"
            onClick={() => handleClick(0, 288)} />

          <div
            data-angle="72"
            className="card-item grid place-items-center rounded bg-[url(@/bg/stt-1.png)] text-3 text-white/90"
            onClick={() => handleClick(1, 216)} />

          <div
            data-angle="144"
            className="card-item grid place-items-center rounded bg-[url(@/bg/yu-1.png)] text-3 text-white/90"
            onClick={() => handleClick(2, 144)} />

          <div
            data-angle="216"
            className="card-item grid place-items-center rounded bg-[url(@/bg/yan-1.png)] text-3 text-white/90"
            onClick={() => handleClick(3, 72)} />

          <div
            data-angle="288"
            className="card-item grid place-items-center rounded bg-[url(@/bg/lan-1.png)] text-3 text-white/90"
            onClick={() => handleClick(4, 0)} />
        </div>
      </div>
    </div>
  )
}
