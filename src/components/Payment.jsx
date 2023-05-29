import appleImg from '../assets/apple-13.svg';
import billImg from '../assets/bill.png';
import chipImg from '../assets/chip.png';
import closeImg from '../assets/close.svg';
import computerLogo from '../assets/computer-logo.png';
import dotsImage from '../assets/dots.svg';
import editPencil from '../assets/edit-pencil.png';
import masterCardSymbol from '../assets/mc_symbol.svg';
import masterCardImg from '../assets/mastercard-2.svg';
import verifiedBadge from '../assets/verified-badge.svg';
import wifiImg from '../assets/wifi.png';

const Payment = () => {
  return (
    <section className="payment-background">
        <div className='payment-section'>
            <div className="flex close-btn-container">
                <button className='close-btn'><img src={closeImg} alt="close" /></button>
            </div>
            <div className="flex flex-wrap payment-padding">
                <CardDetails />
                <OrderDetails />
            </div>
        </div>
    </section>
  )
}

const CardDetails = () => {

    return (
        <section className="card-section">
            <div className="card-header flex justify-between align-center">
                <div className="logo flex align-center">
                    <span className="logo-circle flex justify-center align-center">
                        <img src={computerLogo} alt="computer logo" />
                    </span>
                    <h1>AceCoin<span className="logo-name-slim">Pay</span></h1>
                </div>
                <div className="timer">
                    <span className='timer-box inline-flex'>0</span>
                    <span className='timer-box inline-flex timer-margin-left'>1</span>
                    <span className='timer-margin-left timer-divider'>:</span>
                    <span className='timer-box inline-flex timer-margin-left'>1</span>
                    <span className='timer-box inline-flex timer-margin-left'>9</span>
                </div>
            </div>
            <CardForm />
        </section>
    )
}

const CardForm = () => {
    return (
        <div className='card-form-section'>
            <form>
                <div>
                    <label htmlFor="cardNumber" className='label-name'>Card Number</label>
                    <div className='flex justify-between'>
                        <span className='input-description'>Enter the 16-digit card number on the card</span>
                        <button className='edit-button inline-flex'>
                            <img src={editPencil} alt="edit pencil" />
                            <span>Edit</span>
                        </button>
                    </div>
                    <div className='card-input-container relative input-margin-top'>
                        <img src={masterCardSymbol} className='absolute mastercard' alt="mastercard" />
                        <img src={verifiedBadge} className='absolute badge' alt="verified badge" />
                        <input type="tel" id="card-number" name="cardNumber" pattern="[0-9]{13,19}" placeholder='2412   -   7512   -   3412   -   3456' required />
                    </div>
                </div>
                <div className='input-margin-top flex flex-wrap justify-between'>
                    <div>
                        <label htmlFor="cvv" className='label-name'>CVV Number</label>
                        <span className='input-description'>Enter the 3 or 4 digit number on the card</span>
                    </div>
                    <div className='cvv-input-container relative'>
                        <img src={dotsImage} className='absolute dots' alt="dots" />
                        <input type="number" className='text-center' name="cvv" id="cvv" placeholder='327' defaultValue={327} maxLength={4} />
                    </div>
                </div>
                <div className='input-margin-top flex flex-wrap justify-between'>
                    <div className='expiry-date-label-container'>
                        <label htmlFor="expiry-date" className='label-name'>Expiry Date</label>
                        <span className='input-description'>Enter the expiration date of the card</span>
                    </div>
                    <div className='expiry-date-input-container flex flex-end align-center'>
                        <input type="number" className='text-center' name="expiry-date" id="expiry-date" placeholder='09' defaultValue={'09'} maxLength={2} />
                        <span className='expiry-input-margin-left expiry-date-divider'>/</span>
                        <input type="number" className='expiry-input-margin-left text-center' name="expiry-date" id="expiry-date-month" placeholder='22' defaultValue={22} maxLength={2} />
                    </div>
                </div>
                <div className='input-margin-top flex flex-wrap justify-between'>
                    <div>
                        <label htmlFor="password" className='label-name'>Password</label>
                        <span className='input-description'>Enter your Dynamic password</span>
                    </div>
                    <div className='password-input-container relative'>
                        <img src={dotsImage} className='absolute dots' alt="dots" />
                        <input type="password" name="password" id="password" placeholder='12345678' defaultValue={12345678} />
                    </div>
                </div>
                <button type='submit' className='input-margin-top text-center pay-btn'>Pay Now</button>
            </form>
        </div>
    )
}

const OrderDetails = () => {

    return (
        <section className="order-section relative">
            <span className="blue-chip"></span>
            <div className="checkout-card absolute">
                <div className="checkout-details absolute">
                    <div className="flex justify-between">
                        <p className='name'>Company</p>
                        <div className="flex details-container">
                            <img src={appleImg} alt="apple logo" />
                            <p className='details'>Apple</p>
                        </div>
                    </div>
                    <div className="flex justify-between product-details-margin-top">
                        <p className='name'>Order Number</p>
                        <div className="flex">
                            <p className='details'>1266201</p>
                        </div>
                    </div>
                    <div className="flex justify-between product-details-margin-top">
                        <p className='name'>Product</p>
                        <div className="flex">
                            <p className='details'>Macbook Air</p>
                        </div>
                    </div>
                    <div className="flex justify-between product-details-margin-top">
                        <p className='name'>VAT (20%)</p>
                        <div className="flex">
                            <p className='details'>$100.00</p>
                        </div>
                    </div>
                </div>
                <div className="divider absolute">
                    <div className="absolute divider-left divider-cirle absolute">
                    </div>
                    <div className="absolute divider-right divider-cirle absolute">
                    </div>
                </div>
                <div className="checkout-amount-container absolute">
                    <p className='name'>You have to Pay</p>
                    <div className="flex justify-between">
                        <h3 className='amount'>549<span className='sub'>.99 </span><span className='currency'>USD</span></h3>
                        <img src={billImg} alt="bill" />
                    </div>
                </div>
            </div>
            <div className="credit-card absolute">
                <div className="flex justify-between align-center">
                    <img src={chipImg} className='chip-img' alt="chip" />
                    <img src={wifiImg} className='wifi-img' alt="wifi" />
                </div>
                <div className="card-details absolute">
                    <p className='holder-name'>Jonathan Michael</p>
                    <div className="flex align-center">
                        <div className="hidden-card-number flex">
                            <span className="circle"></span>
                            <span className="circle"></span>
                            <span className="circle"></span>
                            <span className="circle"></span>
                        </div>
                        <p className='timer-margin-left card-details-visible'>3456</p>
                    </div>
                    <div className="flex justify-between align-center">
                        <p className='expiry-date-card'>09/22</p>
                        <img src={masterCardImg} className='master-card' alt="mastercard" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Payment