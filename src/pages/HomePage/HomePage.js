import React from "react";
import styles from "./HomePage.module.css";
import { Search } from "react-feather";

const HomePage = () => {
    return (
        <div className={styles["homePage"]}>
            <div className={styles.hero}>
                <div className={styles["search-box"]}>
                    <h2>Find a meal</h2>
                    <div className={styles["hero-search--container"]}>
                        <Search color={"#999"} size={24} />
                        <input placeholder="Eggplant Parmesan" className={styles["hero-search"]} />
                        <button className={styles["hero-search--button"]}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;