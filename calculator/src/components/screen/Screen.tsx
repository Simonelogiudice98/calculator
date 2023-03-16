import styles from './Screen.module.scss';
import IScreen from './ScreenProps';

export default function Screen(props:IScreen):JSX.Element{
    return(
        <input className={styles.display} type="text" readOnly={true} value={props.result}/>
               
    );
};