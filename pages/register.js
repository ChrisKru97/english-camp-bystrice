import { addDoc, collection } from "firebase/firestore";
import { useEffect, useRef } from "react"
import { db } from "../firebase/clientApp";

const maxScroll = 1200;

const Register = () => {
    const scrollableDivRef = useRef()
    const imgRef = useRef()

    useEffect(() => {
        scrollableDivRef.current.onscroll = (e) => {
            const scrolled = e.target.scrollTop
            const scrolledWithBounds = Math.max(scrolled, 0)
            imgRef.current.style.transform = `scale(${1 + scrolledWithBounds / maxScroll})`;
        }
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        try {
            await addDoc(collection(db, "registration"), formProps);
        } catch {
            alert("Vyskytl se problém, kontaktujte nás na s.pietroszova@gmail.com")
        }
        window.location.href = "/registration-finished";
    }

    return (
        <div className="register-wrapper">
            <div className="img-wrapper">
                <img
                    ref={imgRef}
                    className="bg"
                    src="bg.svg"
                />
            </div>
            <div ref={scrollableDivRef} className="scrollable-div">
                <div className="text-container">
                    <div className="display">
                        <h1>Registrace</h1>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="inputs-wrapper">
                            <label htmlFor="firstName">Jméno</label>
                            <input type="text" id="firstName" name="firstName" required />
                            <label htmlFor="lastName">Příjmení</label>
                            <input type="text" id="lastName" name="lastName" required />
                            <label htmlFor="dob">Datum narození</label>
                            <input type="date" id="dob" name="dob" required />
                            <div className="parent-contact">
                                <label className="underlined">Kontakt na rodiče</label>
                                <label htmlFor="phone">Tel č.</label>
                                <input type="tel" id="phone" name="phone" required />
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <label htmlFor="address">Adresa</label>
                            <input type="text" id="address" name="address" required />
                            <label htmlFor="diet">Požadavky na stravování</label>
                            <input id="diet" name="diet" />
                        </div>
                        <div className="terms">
                            English Camp se bude konat ve formě příměstského tábora. Bližší informace Vám budou zaslány e-mailem.<br />
                            Registrací Vašeho dítěte potvrzujete jeho účast včetně stravování  po celou délku pobytu.
                        </div>
                        <br />
                        <button type="submit" href="/register">Registrovat 👍</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register