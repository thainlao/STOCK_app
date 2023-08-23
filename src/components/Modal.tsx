import React, { useState } from "react";
import '../styles/modal.css';
import photo4 from '../assets/1.png';

const Modal = () => {
    const [nameInput, setNameInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [phoneError, setPhoneError] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [emailInput, setEmailInput] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setNameInput(inputValue);

        const namePattern = /^[A-ZА-Я][a-zа-я]+ [A-ZА-Я][a-zа-я]+ [A-ZА-Я][a-zа-я]+$/;

        if (!namePattern.test(inputValue)) {
            setErrorMessage("Недостаточно информации. Введите фамилию, имя и отчество через пробел (Например: Иванов Иван Иванович)");
        } else {
            setErrorMessage("");
        }
    }

    const getInputNameClassName = () => {
        if (errorMessage) {
            return "main_modal_input error";
        } else if (nameInput.trim() !== "") {
            return "main_modal_input valid";
        } else {
            return "main_modal_input";
        }
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;
    
        // Удаляем все символы, кроме цифр
        inputValue = inputValue.replace(/\D/g, '');
    
        // Ограничиваем ввод до 11 цифр
        if (inputValue.length > 11) {
            inputValue = inputValue.slice(0, 11);
        }
    
        setPhoneInput(inputValue);
    
        if (inputValue.length < 11) {
            setPhoneError("Номер телефона должен содержать 11 цифр");
        } else {
            setPhoneError("");
        }
    };
    
    const getInputPhoneClassName = () => {
        if (phoneError) {
            return "main_modal_input error";
        } else if (phoneInput.trim() !== "") {
            return "main_modal_input valid";
        } else {
            return "main_modal_input";
        }
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setEmailInput(inputValue);
    
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    
        if (!emailPattern.test(inputValue)) {
            setEmailError("Пожалуйста, введите корректный адрес электронной почты.");
        } else {
            setEmailError("");
        }
    };

    const getInputEmailClassName = () => {
        if (emailError) {
            return "main_modal_input error";
        } else if (emailInput.trim() !== "") {
            return "main_modal_input valid";
        } else {
            return "main_modal_input";
        }
    };

    const handleModalClose = () => {
        setNameInput('');
        setPhoneInput('');
        setErrorMessage('');
        setPhoneError('');
        setEmailInput('');
        setModalOpen(false);
    }

    const handleSubmit = () => {
        setModalOpen(true);
    }

    const ModalWindow = () => {
        return (
            <div className="modal">
                <div className="modal-content border border-[black] shadow-md shadow-[grey]">
                    <span className="close" onClick={handleModalClose}>Закрыть</span>
                    <div className="">
                        <div className="modal_text flex items-center gap-3 justify-between flex-col">
                            <p className="font-bold">Начните ваш пусть инвестора с нами!</p>
                            <p>Здравствуйте, {nameInput}</p>
                            <p className="">Мы скоро с вами свяжемся</p>
                            <p>{phoneInput}</p>
                            <p>{emailInput}</p>
                            <img src={photo4} className="w-52 h-48"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="modalbody" id="account">
            <div className="modal_content">
                <p className="body_bigtext">Откройте брокерский счет</p>

                <div className="theecard">
                    <div className="flex gap-5 lg:flex-row md:flex-row flex-col">
                        <div className="card_modal">
                            <div className="card_content">
                                <div className="number">1</div>
                                <p className="font-bold">Заполните заявку онлайн</p>
                                <p className="sub_text">Понадобится только паспорт и телефон</p>
                            </div>
                        </div>

                        <div className="card_modal">
                            <div className="card_content">
                                <div className="number">2</div>
                                <p className="font-bold">Откроем счет за 5 минут</p>
                                <p className="sub_text">Если биржа закрыта, то откроем счет на следующий торговый день</p>
                            </div>
                        </div>

                        <div className="card_modal">
                            <div className="card_content">
                                <div className="number">3</div>
                                <p className="font-bold">Привезем документы</p>
                                <p className="sub_text">Подписать документы можно также онлайн!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main_modal">
                    <div className="main_modal_content">
                        <p className="text">Данные инвестора</p>
                        <p className="text">Открыть счет могут граждане РФ старше 18 лет</p>
                        <hr className="line" />

                        <input 
                            className={getInputNameClassName()}
                            type="text"
                            placeholder="Фамилия, имя и отчество*"
                            value={nameInput}
                            onChange={handleNameChange}
                        />

                        {errorMessage && <p className="text-sm text-[red]">{errorMessage}</p>}

                        <hr className="line" />

                        <input 
                            className={getInputPhoneClassName()}
                            type='text'
                            placeholder="Телефон*"
                            value={phoneInput}
                            onChange={handlePhoneChange}
                        />

                        {phoneError && <p className="text-sm text-[red]">{phoneError}</p>}

                        <hr className="line" />

                        <input
                        className={getInputEmailClassName()}
                        type="text"
                        placeholder="Email*"
                        value={emailInput}
                        onChange={handleEmailChange}
                        />

                        {emailError && <p className="text-sm text-[red]">{emailError}</p>}
                        <hr className="line" />

                        <button
                            onClick={handleSubmit}
                            disabled={(!!errorMessage || !!phoneError || !!emailError || nameInput.trim() === '' || phoneInput.trim() === '' || emailInput.trim() === '') as boolean}
                            className="modal_button"
                        >
                            Продолжить
                        </button>
                    </div>
                </div>

            </div>
            {modalOpen && <ModalWindow />}
        </div>
    )
}

export default Modal