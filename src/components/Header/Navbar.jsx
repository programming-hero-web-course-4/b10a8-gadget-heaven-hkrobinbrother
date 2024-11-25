
import logo from '../../assets/logo.png'
import coine from '../../assets/coin.png'

const Navebar = () => {

    

    
    return (
        <div className='flex justify-between mx-auto w-11/12 p-10 items-center'>
            <div>
                <img src={logo} />
            </div>
            <div className='flex justify-between gap-10 items-center'>
                <ul className='flex justify-around gap-6'>
                    <li>Hello</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedule</li>
                </ul>
                <div>
                    
                <button  className='flex justify-between font-bold gap-4 rounded-md bg-gray-100 p-2'>{coin} Coin <img src={coine} alt="" /> </button>
                </div>
            </div>
        </div>
    );
};

export default Navebar;