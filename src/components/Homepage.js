import React from "react";
import styles from './Homepage.module.css';
import firstImage from '../image/photo1.jpg';
import secondImage  from '../image/photo2.jpg';
import thirdImage from '../image/photo3.jpg';
import fourthImage from '../image/photo4.jpg';
import fivthImage from '../image/photo5.jpg';
import sixthImage from '../image/photo6.jpg';

const Homepage =()=>{
    return(
        <div className={styles.Main}>
        <div>
           <div className={styles.split, styles.left }>
            <div className={styles.clm1}>
            <h1>ACME PHOTOGRAPHY</h1>
            <h2>Beautiful Natural Photography</h2>
            <button className={styles.Btn}>View Work</button>
            </div>  
            </div> 
           
            <div className={styles.split, styles.right}>
           <div className={styles.clm2}>
               <img src={firstImage}/>
           </div>
           </div> 
        </div>   

           
        <div className={styles.Text1}>
               <h2>Our Work</h2>
        </div>

           <div className={styles.SectionA}>
               <img src={secondImage} />
           </div>

            <div className={styles.Text2} >
                <h3>Photo One </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur.</p>
            </div>
           <div className={styles.SectionA}>
               <img src={thirdImage}/>
           </div>

           <div className={styles.Text2} >
                <h3>Photo Two </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur.</p>
            </div>

           <div className={styles.SectionA}>
               <img src={fourthImage}/>
           </div>

           <div className={styles.Text2} >
                <h3>Photo Three </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur.</p>
            </div>

           <div className={styles.SectionA}>
               <img src={fivthImage}/>
           </div>

           <div className={styles.Text2} >
                <h3>Photo Four </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur.</p>
            </div>

           <div className={styles.SectionA}>
               <img src={sixthImage}/>
           </div>

           <div className={styles.Text2} >
                <h3>Photo One </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur.</p>
            </div>

            <div className={styles.footer}>
                <h3> Get In Touch</h3>
                <p>Email or call us to set up a consult</p> 
                <p>Email: contact@acmephotos.test</p>
                <p>Phone: (617) 555-5555</p>
            </div>
        </div>
    )
}

export default Homepage;