import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Engine, ISourceOptions } from '@tsparticles/engine'
import styles from './Home.module.css'

async function initEngine(engine: Engine) {
  await loadSlim(engine)
}

const flowerMarkup =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">' +
  '<g fill="#d6cce0">' +
  '<ellipse cx="20" cy="10" rx="6" ry="10"/>' +
  '<ellipse cx="20" cy="10" rx="6" ry="10" transform="rotate(72 20 20)"/>' +
  '<ellipse cx="20" cy="10" rx="6" ry="10" transform="rotate(144 20 20)"/>' +
  '<ellipse cx="20" cy="10" rx="6" ry="10" transform="rotate(216 20 20)"/>' +
  '<ellipse cx="20" cy="10" rx="6" ry="10" transform="rotate(288 20 20)"/>' +
  '</g>' +
  '<circle cx="20" cy="20" r="4" fill="#4a3363"/>' +
  '</svg>'

const flowerDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(flowerMarkup)}`

const particlesOptions: ISourceOptions = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  particles: {
    number: { value: 14 },
    shape: {
      type: 'image',
      options: {
        image: {
          src: flowerDataUri,
          width: 40,
          height: 40,
        },
      },
    },
    size: { value: { min: 14, max: 26 } },
    opacity: { value: { min: 0.5, max: 0.9 } },
    move: {
      enable: true,
      direction: 'bottom',
      speed: { min: 0.5, max: 1.3 },
      straight: false,
      random: true,
      outModes: { default: 'out' },
    },
    rotate: {
      value: { min: 0, max: 360 },
      direction: 'random',
      animation: { enable: true, speed: 4 },
    },
    wobble: {
      enable: true,
      distance: 10,
      speed: { min: -5, max: 5 },
    },
  },
  detectRetina: true,
}

function Home() {
  return (
    <section className={styles.hero}>
      <ParticlesProvider init={initEngine}>
        <Particles id="flowers" className={styles.flowers} options={particlesOptions} />
      </ParticlesProvider>
      <div className={styles.content}>
        <h1>Olatz & Pablo</h1>
        <p className={styles.date}>25 · 07 · 2026</p>
      </div>
    </section>
  )
}

export default Home
