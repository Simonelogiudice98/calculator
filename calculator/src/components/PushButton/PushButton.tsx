
import styles from './PushButton.module.scss';
import { IPushBtn } from './PushButtonProps';

export default function PushButton(props:IPushBtn):JSX.Element{
    return(
        <button

            className={
                `${props.value === 0 ? styles.zeroButton : styles.pushButton} ${typeof props.value === 'number' ||props.value === '.' ? styles.numbersButton : styles.symbolsButton}`
                } 
            onClick={(e) => {
                e.preventDefault();
                props.onClick();
            }}
        >
            {

            props.value === "*" ? "X" : props.value === "/" ? ":" : props.value
            
            }
        </button>
    );
}