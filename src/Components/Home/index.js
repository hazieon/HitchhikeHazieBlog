import styles from "./index.module.css"
import {
  Link
} from "react-router-dom";


function Homepage() {
  return (
    <div className="Homepage">
        <div className={styles.heroImage}>
            <div className={styles.heroText}>
               <h1>Hitchhike Hazie</h1>
               <h2>Take the scenic route.</h2>
               <button className={styles.heroButton}>  
                 <Link className={styles.link} 
                     to="/sell">About Hazie</Link>
              </button>
            </div>
        </div> 
        </div>
  );
}

export default Homepage;


