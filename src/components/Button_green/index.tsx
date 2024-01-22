import './index.css';

interface Props {
    text: string,
    btn_function: () => void,
}

export const Button_green = ({text, btn_function}: Props) => {

    return (
        
        <>
            <div className="div-button-green">
                <button className='btn-green' onClick={btn_function}>{text}</button>
            </div>
        </>
    
    )

}