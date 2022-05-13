import { useEffect, useRef, useState } from "react"

const maxScroll = 1200;

const Home = () => {
  const scrollableDivRef = useRef()
  const imgRef = useRef()


  useEffect(() => {
    scrollableDivRef.current.onscroll = (e) => {
      const scrolled = e.target.scrollTop
      const scrolledWithBounds = Math.max(scrolled, 0)
      imgRef.current.style.filter = `blur(${10 * scrolledWithBounds / maxScroll}px)`
    }
  }, [])

  return (
    <div className="wrapper">
      <img
        ref={imgRef}
        className="bg"
        src="bg.webp"
      />
      <div ref={scrollableDivRef} className="scrollable-div">
        <div className="text-container">
          <div className="display">
            <h1>English Camp</h1>
            <h2>Bystřice</h2>
          </div>
        </div>
        <div className="info">
          <h2>Info:</h2>
          <div className="row"><h3>Datum:</h3><h4>11. - 15.7.2022</h4></div>
          <div className="row"><h3>Místo:</h3><h4>Fara Bystřice</h4></div>
          <div className="row"><h3>Téma:</h3><h4>Who is Jesus?</h4></div>
          <div className="row"><h3>Věk:</h3><h4>8-12 let</h4></div>
          <div className="row"><h3>Cena:</h3><h4>1200,-</h4></div>
          <div className="row"><h3>Bankovní účet:</h3><h4>107-3522660237/0100</h4></div>
          <div className="row"><h3>Variabilní symbol:</h3><h4>111507</h4></div>
          <span>Peníze prosím pošlete převodem na číslo bankovního účtu a do poznámky uveďte jméno Vašeho dítěte. Uhraďte do 30.6.2022.</span>
          <a className="button-link" href="/register">Registrace 👉</a>
          <span>Pořádá Farní sbor Bystřice ve spolupráci s E.C. MISE,<br />
            kontakt: Simona Pietroszová<br />
            <a href="mailto:s.pietroszova@gmail.com">
              s.pietroszova@gmail.com
            </a><br />
            <a href="tel:733221680">+420 733 221 680</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home