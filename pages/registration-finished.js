const RegistrationFinished = () => {
    return (
        <div className="register-wrapper">
            <img
                className="bg"
                src="bg.svg" />
            <div className="scrollable-div">
                <div className="text-container">
                    <div className="display">
                        <h1>Registrace úspěšně dokončena!</h1>
                    </div>
                    <a href="/" className="button-link">Zpět na úvod</a>
                </div>
            </div>
        </div>
    )
}

export default RegistrationFinished