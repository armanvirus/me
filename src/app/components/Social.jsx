import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from "../page.module.css";
const Social = ()=>{
    return(
        <>
            <div className={styles.flexBetween}>
            <a href=""><LinkedInIcon/></a>
            <a href=""><XIcon/></a>
            <a href=""><GitHubIcon/></a>
            </div>
        </>
    )
}

export default Social;