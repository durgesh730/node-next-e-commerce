import React from 'react'
import styles from './Comment.module.css'
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import { AiFillStar } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Comment = () => {
    return (
        <>
            <div className={styles.comment} >
                <div className={styles.headandbtn} >
                    <div className={styles.review} >
                        Ratings & Reviews
                    </div>

                    <div className={styles.Commentsbothbtn} >
                        <Button className={styles.ratbtn} variant="contained">Rate Product</Button> <br />
                        <Button className={styles.commentbtn} variant="contained">Add Comment</Button>
                    </div>
                </div>

                <div className={styles.ReviewComments} >
                    <div className={styles.rating} >
                        <span>3.8 <AiFillStar /> </span>
                        <small className={styles.ratingdetails} >hii this product good I will rate this product to best level of my experience life and so it good products.</small>
                    </div>
                    <div className={styles.CommentWalUser} >
                        <span> <BsFillCheckCircleFill className={styles.CommectIcons} /> Durgesh chaudhary </span>
                        <small> 3 months ago</small>
                    </div>
                    <Divider />
                </div>

                <div className={styles.ReviewComments} >
                    <div className={styles.rating} >
                        <span>3.8 <AiFillStar /> </span>
                        <small className={styles.ratingdetails} >hii this product good I will rate this product to best level of my experience life and so it good products.</small>
                    </div>
                    <div className={styles.CommentWalUser} >
                        <span> <BsFillCheckCircleFill className={styles.CommectIcons} /> Durgesh chaudhary </span>
                        <small> 3 months ago</small>
                    </div>
                    <Divider />
                </div>

                <div className={styles.ReviewComments} >
                    <div className={styles.rating} >
                        <span>3.8 <AiFillStar /> </span>
                        <small className={styles.ratingdetails} >hii this product good I will rate this product to best level of my experience life and so it good products.</small>
                    </div>
                    <div className={styles.CommentWalUser} >
                        <span> <BsFillCheckCircleFill className={styles.CommectIcons} /> Durgesh chaudhary </span>
                        <small> 3 months ago</small>
                    </div>
                    <Divider />
                </div>

                <div className={styles.ReviewComments} >
                    <div className={styles.rating} >
                        <span>3.8 <AiFillStar /> </span>
                        <small className={styles.ratingdetails} >hii this product good I will rate this product to best level of my experience life and so it good products.</small>
                    </div>
                    <div className={styles.CommentWalUser} >
                        <span> <BsFillCheckCircleFill className={styles.CommectIcons} /> Durgesh chaudhary </span>
                        <small> 3 months ago</small>
                    </div>
                    <Divider />
                </div>

                <div className={styles.ReviewComments} >
                    <div className={styles.rating} >
                        <span>3.8 <AiFillStar /> </span>
                        <small className={styles.ratingdetails} >hii this product good I will rate this product to best level of my experience life and so it good products.</small>
                    </div>
                    <div className={styles.CommentWalUser} >
                        <span> <BsFillCheckCircleFill className={styles.CommectIcons} /> Durgesh chaudhary </span>
                        <small> 3 months ago</small>
                    </div>
                    <Divider />
                </div>
                
                <div className={styles.ReviewComments} >
                    <div className={styles.rating} >
                        <span>3.8 <AiFillStar /> </span>
                        <small className={styles.ratingdetails} >hii this product good I will rate this product to best level of my experience life and so it good products.</small>
                    </div>
                    <div className={styles.CommentWalUser} >
                        <span> <BsFillCheckCircleFill className={styles.CommectIcons} /> Durgesh chaudhary </span>
                        <small> 3 months ago</small>
                    </div>
                    <Divider />
                </div>

            </div>
        </>
    )
}

export default Comment
