import { NextPage } from "next";
import styles from "./styles.module.scss"

const Nav: NextPage = () => {
    return (
        <>
            <div className={styles.nav}>
                <div className={styles.leftContainer}>
                    <div className={styles.logoContainer}>
                        {/* <img src="https://www.svgrepo.com/show/95096/food.svg"></img> */}
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    {/* <button>Login</button> */}
                </div>
            </div>
        </>
        
    )
}

export default Nav